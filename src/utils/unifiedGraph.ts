import { getCollection } from 'astro:content';

export interface GraphNode {
  id: string;
  label: string;
  type: 'post' | 'concept';
  category?: string;
  weight: number;
  url: string;
  date?: Date;
  definition?: string;
  importance?: number;
  cluster?: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: 'references' | 'related' | 'bridges' | 'mentions' | 'connections';
  weight: number;
}

export interface UnifiedGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

export async function buildUnifiedGraph(): Promise<UnifiedGraph> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const concepts = await getCollection('concepts');
  
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  
  // Add blog posts as nodes
  posts.forEach(post => {
    const postSlug = post.id; // Use id instead of slug
    nodes.push({
      id: `post-${postSlug}`,
      label: post.data.title,
      type: 'post',
      category: post.data.category,
      weight: post.data.importance || 2,
      url: `/posts/${postSlug}`,
      date: post.data.pubDatetime,
      importance: post.data.importance,
      cluster: post.data.cluster
    });
    
    // Add post-to-post connections
    post.data.connections?.forEach(targetId => {
      edges.push({
        source: `post-${postSlug}`,
        target: `post-${targetId}`,
        type: 'connections',
        weight: 1
      });
    });
  });
  
  // Add concepts as nodes
  concepts.forEach(concept => {
    nodes.push({
      id: `concept-${concept.slug}`,
      label: concept.data.term,
      type: 'concept',
      category: concept.data.category,
      weight: concept.data.importance || 1,
      url: `/concepts/${concept.slug}`,
      definition: concept.data.definition,
      importance: concept.data.importance,
      cluster: concept.data.cluster
    });
    
    // Add concept-to-concept connections
    concept.data.related?.forEach(relatedId => {
      edges.push({
        source: `concept-${concept.slug}`,
        target: `concept-${relatedId}`,
        type: 'related',
        weight: 0.5
      });
    });
    
    // Add bridge connections (engineering to product)
    if (concept.data.bridgeTo) {
      edges.push({
        source: `concept-${concept.slug}`,
        target: `concept-${concept.data.bridgeTo}`,
        type: 'bridges',
        weight: 2
      });
    }
    
    // Add bridge-from connections (reverse direction)
    if (concept.data.bridgeFrom) {
      edges.push({
        source: `concept-${concept.data.bridgeFrom}`,
        target: `concept-${concept.slug}`,
        type: 'bridges',
        weight: 2
      });
    }
  });
  
  // Extract concepts mentioned in posts
  posts.forEach(post => {
    const content = post.body;
    const postSlug = post.id;
    
    if (content) {
      concepts.forEach(concept => {
        // Check if the concept term or any aliases are mentioned in the post
        const isMentioned = content.includes(concept.data.term) || 
                           concept.data.aliases?.some(alias => content.includes(alias)) ||
                           content.includes(`concept-${concept.slug}`) ||
                           content.includes(`/concepts/${concept.slug}`);
        
        if (isMentioned) {
          edges.push({
            source: `post-${postSlug}`,
            target: `concept-${concept.slug}`,
            type: 'mentions',
            weight: 0.3
          });
        }
      });
    }
  });
  
  // Add concept-to-post connections (concepts introduced in posts)
  concepts.forEach(concept => {
    if (concept.data.firstIntroduced) {
      edges.push({
        source: `concept-${concept.slug}`,
        target: `post-${concept.data.firstIntroduced}`,
        type: 'references',
        weight: 0.8
      });
    }
  });
  
  return { nodes, edges };
}

// Helper function to get graph statistics
export async function getGraphStats(): Promise<{
  totalNodes: number;
  totalEdges: number;
  posts: number;
  concepts: number;
  bridges: number;
  categories: Record<string, number>;
}> {
  const graph = await buildUnifiedGraph();
  
  const posts = graph.nodes.filter(n => n.type === 'post').length;
  const concepts = graph.nodes.filter(n => n.type === 'concept').length;
  const bridges = graph.edges.filter(e => e.type === 'bridges').length;
  
  const categories = graph.nodes.reduce((acc, node) => {
    if (node.category) {
      acc[node.category] = (acc[node.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  return {
    totalNodes: graph.nodes.length,
    totalEdges: graph.edges.length,
    posts,
    concepts,
    bridges,
    categories
  };
}

// Helper function to get related nodes
export async function getRelatedNodes(nodeId: string, maxDepth: number = 2): Promise<GraphNode[]> {
  const graph = await buildUnifiedGraph();
  const visited = new Set<string>();
  const queue: { nodeId: string; depth: number }[] = [{ nodeId, depth: 0 }];
  const related: GraphNode[] = [];
  
  while (queue.length > 0) {
    const { nodeId: currentId, depth } = queue.shift()!;
    
    if (visited.has(currentId) || depth > maxDepth) continue;
    visited.add(currentId);
    
    // Find connected nodes
    const connectedEdges = graph.edges.filter(
      edge => edge.source === currentId || edge.target === currentId
    );
    
    for (const edge of connectedEdges) {
      const connectedId = edge.source === currentId ? edge.target : edge.source;
      const connectedNode = graph.nodes.find(n => n.id === connectedId);
      
      if (connectedNode && !visited.has(connectedId) && depth < maxDepth) {
        related.push(connectedNode);
        queue.push({ nodeId: connectedId, depth: depth + 1 });
      }
    }
  }
  
  // Remove the original node and sort by importance
  return related
    .filter(node => node.id !== nodeId)
    .sort((a, b) => (b.importance || 0) - (a.importance || 0));
}

// Helper function to get bridge connections
export async function getBridgeConnections(): Promise<{
  engineering: GraphNode[];
  product: GraphNode[];
  bridges: GraphEdge[];
}> {
  const graph = await buildUnifiedGraph();
  
  const engineering = graph.nodes.filter(
    node => node.type === 'concept' && node.category === 'engineering'
  );
  
  const product = graph.nodes.filter(
    node => node.type === 'concept' && node.category === 'product'
  );
  
  const bridges = graph.edges.filter(edge => edge.type === 'bridges');
  
  return { engineering, product, bridges };
}
