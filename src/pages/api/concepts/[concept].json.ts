import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ params }) => {
  try {
    const { concept } = params;
    
    if (!concept) {
      return new Response(JSON.stringify({ error: 'Concept ID required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const concepts = await getCollection('concepts');
    const foundConcept = concepts.find(c => c.slug === concept);
    
    if (!foundConcept) {
      return new Response(JSON.stringify({ error: 'Concept not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    // Return concept data in a format suitable for the modal
    const conceptData = {
      term: foundConcept.data.term,
      definition: foundConcept.data.definition,
      category: foundConcept.data.category,
      aliases: foundConcept.data.aliases || [],
      related: foundConcept.data.related || [],
      examples: foundConcept.data.examples || [],
      formula: foundConcept.data.formula,
      visualization: foundConcept.data.visualization,
      bridgeFrom: foundConcept.data.bridgeFrom,
      bridgeTo: foundConcept.data.bridgeTo,
      weight: foundConcept.data.weight,
      importance: foundConcept.data.importance,
      cluster: foundConcept.data.cluster
    };
    
    return new Response(JSON.stringify(conceptData), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
    
  } catch (error) {
    console.error('Error fetching concept:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
