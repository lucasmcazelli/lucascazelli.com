import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const prerender = false;

export const GET: APIRoute = async () => {
  try {
    const concepts = await getCollection('concepts');
    
    const conceptList = concepts.map(concept => ({
      id: concept.id,
      term: concept.data.term,
      aliases: concept.data.aliases || [],
      definition: concept.data.definition,
      category: concept.data.category
    }));
    
    return new Response(JSON.stringify(conceptList), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error('Error fetching concepts:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch concepts' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
