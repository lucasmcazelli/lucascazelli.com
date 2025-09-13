import { getCollection } from 'astro:content';

export interface GraphNode {
  id: string;
  label: string;
  type: 'post' | 'concept' | 'tag';
  category?: string;
  weight: number;
  url: string;
  date?: Date;
  definition?: string;
  importance?: number;
  cluster?: string;
  tags?: string[];
  connectionCount?: number;
  centrality?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  type: 'references' | 'related' | 'bridges' | 'mentions' | 'connections' | 'tags' | 'backlinks';
  weight: number;
  strength: number; // Calculated strength based on multiple factors
}

export interface UnifiedGraph {
  nodes: GraphNode[];
  edges: GraphEdge[];
}

// Simple in-memory cache for development
let graphCache: UnifiedGraph | null = null;
let cacheTimestamp = 0;
const CACHE_TTL = 1000 * 60 * 5; // 5 minutes in development

export async function buildUnifiedGraph(): Promise<UnifiedGraph> {
  // Use cache in production or if cache is still valid
  if (import.meta.env.PROD && graphCache && Date.now() - cacheTimestamp < CACHE_TTL) {
    return graphCache;
  }
  
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const concepts = await getCollection('concepts');
  
  const nodes: GraphNode[] = [];
  const edges: GraphEdge[] = [];
  const tagNodes = new Map<string, GraphNode>();
  
  // Collect all unique tags
  const allTags = new Set<string>();
  posts.forEach(post => post.data.tags.forEach(tag => allTags.add(tag)));
  
  // Create tag nodes
  allTags.forEach(tag => {
    const tagNode: GraphNode = {
      id: `tag-${tag}`,
      label: `#${tag}`,
      type: 'tag',
      category: 'tag',
      weight: 0.5,
      url: `/tags/${tag}`,
      importance: 3,
      connectionCount: 0
    };
    tagNodes.set(tag, tagNode);
    nodes.push(tagNode);
  });
  
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
      cluster: post.data.cluster,
      tags: post.data.tags,
      connectionCount: 0
    });
    
    // Add post-to-tag connections
    post.data.tags.forEach(tag => {
      edges.push({
        source: `post-${postSlug}`,
        target: `tag-${tag}`,
        type: 'tags',
        weight: 0.5,
        strength: 0.5
      });
    });
    
    // Add post-to-post connections (manual) and post-to-concept connections
    post.data.connections?.forEach(targetId => {
      // Check if this is a concept or post connection
      const isConceptConnection = concepts.some(c => c.slug === targetId);
      const targetNodeId = isConceptConnection ? `concept-${targetId}` : `post-${targetId}`;
      
      edges.push({
        source: `post-${postSlug}`,
        target: targetNodeId,
        type: 'connections',
        weight: 1,
        strength: 1.5
      });
    });
    
    // Add backlink connections
    post.data.backlinks?.forEach(sourceId => {
      // Check if this is a concept or post backlink
      const isConceptBacklink = concepts.some(c => c.slug === sourceId);
      const sourceNodeId = isConceptBacklink ? `concept-${sourceId}` : `post-${sourceId}`;
      
      edges.push({
        source: sourceNodeId,
        target: `post-${postSlug}`,
        type: 'backlinks',
        weight: 0.8,
        strength: 1.2
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
      cluster: concept.data.cluster,
      connectionCount: 0
    });
    
    // Add concept-to-concept connections
    concept.data.related?.forEach(relatedId => {
      edges.push({
        source: `concept-${concept.slug}`,
        target: `concept-${relatedId}`,
        type: 'related',
        weight: 0.5,
        strength: 0.7
      });
    });
    
    // Add bridge connections (engineering to product)
    if (concept.data.bridgeTo) {
      edges.push({
        source: `concept-${concept.slug}`,
        target: `concept-${concept.data.bridgeTo}`,
        type: 'bridges',
        weight: 2,
        strength: 2.5
      });
    }
    
    // Add bridge-from connections (reverse direction)
    if (concept.data.bridgeFrom) {
      edges.push({
        source: `concept-${concept.data.bridgeFrom}`,
        target: `concept-${concept.slug}`,
        type: 'bridges',
        weight: 2,
        strength: 2.5
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
            weight: 0.3,
            strength: 0.4
          });
        }
      });
    }
  });
  
  // Add concept-to-post connections (concepts introduced in posts)
  concepts.forEach(concept => {
    if (concept.data.firstIntroduced) {
      // Check if the referenced post actually exists
      const postExists = posts.some(p => p.id === concept.data.firstIntroduced);
      if (postExists) {
        edges.push({
          source: `concept-${concept.slug}`,
          target: `post-${concept.data.firstIntroduced}`,
          type: 'references',
          weight: 0.8,
          strength: 1.0
        });
      }
    }
  });
  
  // Add tag-based connections between posts (shared tags create weak connections)
  posts.forEach(post => {
    const postSlug = post.id;
    posts.forEach(otherPost => {
      if (post.id === otherPost.id) return;
      
      const sharedTags = post.data.tags.filter(tag => 
        otherPost.data.tags.includes(tag)
      );
      
      if (sharedTags.length > 0) {
        const strength = Math.min(sharedTags.length * 0.2, 0.8);
        edges.push({
          source: `post-${postSlug}`,
          target: `post-${otherPost.id}`,
          type: 'tags',
          weight: strength,
          strength: strength
        });
      }
    });
  });
  
  // Validate edges - remove edges that reference non-existent nodes
  const nodeIds = new Set(nodes.map(n => n.id));
  const validEdges = edges.filter(edge => {
    const sourceExists = nodeIds.has(edge.source);
    const targetExists = nodeIds.has(edge.target);
    
    if (!sourceExists) {
      console.warn(`Edge references non-existent source node: ${edge.source}`);
    }
    if (!targetExists) {
      console.warn(`Edge references non-existent target node: ${edge.target}`);
    }
    
    return sourceExists && targetExists;
  });
  
  // Calculate connection counts and centrality
  const connectionCounts = new Map<string, number>();
  validEdges.forEach(edge => {
    connectionCounts.set(edge.source, (connectionCounts.get(edge.source) || 0) + 1);
    connectionCounts.set(edge.target, (connectionCounts.get(edge.target) || 0) + 1);
  });
  
  // Update nodes with connection counts
  nodes.forEach(node => {
    node.connectionCount = connectionCounts.get(node.id) || 0;
    // Calculate centrality based on connection count and type
    node.centrality = node.connectionCount * (node.type === 'tag' ? 0.5 : 1.0);
  });
  
  console.log(`Graph built: ${nodes.length} nodes, ${validEdges.length} edges`);
  console.log(`Node types: ${nodes.filter(n => n.type === 'post').length} posts, ${nodes.filter(n => n.type === 'concept').length} concepts, ${nodes.filter(n => n.type === 'tag').length} tags`);
  
  const graph = { nodes, edges: validEdges };
  
  // Cache the result
  if (import.meta.env.PROD) {
    graphCache = graph;
    cacheTimestamp = Date.now();
  }
  
  return graph;
}

// Helper function to get graph statistics
export async function getGraphStats(): Promise<{
  totalNodes: number;
  totalEdges: number;
  posts: number;
  concepts: number;
  tags: number;
  bridges: number;
  categories: Record<string, number>;
  mostConnected: GraphNode[];
  isolatedNodes: GraphNode[];
  avgConnectionsPerNode: number;
}> {
  const graph = await buildUnifiedGraph();
  
  const posts = graph.nodes.filter(n => n.type === 'post').length;
  const concepts = graph.nodes.filter(n => n.type === 'concept').length;
  const tags = graph.nodes.filter(n => n.type === 'tag').length;
  const bridges = graph.edges.filter(e => e.type === 'bridges').length;
  
  const categories = graph.nodes.reduce((acc, node) => {
    if (node.category && node.category !== 'tag') {
      acc[node.category] = (acc[node.category] || 0) + 1;
    }
    return acc;
  }, {} as Record<string, number>);
  
  // Find most connected nodes (excluding tags)
  const mostConnected = graph.nodes
    .filter(n => n.type !== 'tag')
    .sort((a, b) => (b.connectionCount || 0) - (a.connectionCount || 0))
    .slice(0, 5);
    
  // Find isolated nodes (no connections)
  const isolatedNodes = graph.nodes
    .filter(n => (n.connectionCount || 0) === 0);
  
  const avgConnectionsPerNode = graph.nodes.length > 0 
    ? graph.edges.length * 2 / graph.nodes.length 
    : 0;
  
  return {
    totalNodes: graph.nodes.length,
    totalEdges: graph.edges.length,
    posts,
    concepts,
    tags,
    bridges,
    categories,
    mostConnected,
    isolatedNodes,
    avgConnectionsPerNode
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
