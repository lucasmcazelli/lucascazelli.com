import { g as getCollection } from '../../../chunks/_astro_content_BsVD4rRg.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async () => {
  try {
    const concepts = await getCollection("concepts");
    const conceptList = concepts.map((concept) => ({
      id: concept.id,
      term: concept.data.term,
      aliases: concept.data.aliases || [],
      definition: concept.data.definition,
      category: concept.data.category
    }));
    return new Response(JSON.stringify(conceptList), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300"
        // Cache for 5 minutes
      }
    });
  } catch (error) {
    console.error("Error fetching concepts:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch concepts" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json"
      }
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
