import { g as getCollection } from '../../../chunks/_astro_content_BsVD4rRg.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params }) => {
  try {
    const { concept } = params;
    if (!concept) {
      return new Response(JSON.stringify({ error: "Concept ID required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const concepts = await getCollection("concepts");
    const foundConcept = concepts.find((c) => c.slug === concept);
    if (!foundConcept) {
      return new Response(JSON.stringify({ error: "Concept not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }
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
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=3600"
        // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error fetching concept:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
