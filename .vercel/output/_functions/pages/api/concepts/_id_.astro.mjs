import { g as getCollection } from '../../../chunks/_astro_content_BsVD4rRg.mjs';
export { renderers } from '../../../renderers.mjs';

const prerender = false;
const GET = async ({ params }) => {
  try {
    const { id } = params;
    if (!id) {
      return new Response(JSON.stringify({ error: "Concept ID is required" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const concepts = await getCollection("concepts");
    const concept = concepts.find((c) => c.id === id || c.id === `${id}.md` || c.id.replace(".md", "") === id);
    if (!concept) {
      return new Response(JSON.stringify({ error: "Concept not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json"
        }
      });
    }
    const conceptData = {
      id: concept.id.replace(".md", ""),
      term: concept.data.term,
      definition: concept.data.definition,
      category: concept.data.category,
      aliases: concept.data.aliases || [],
      related: concept.data.related || [],
      examples: concept.data.examples || [],
      formula: concept.data.formula,
      bridgeFrom: concept.data.bridgeFrom,
      bridgeTo: concept.data.bridgeTo,
      url: `/concepts/${concept.id.replace(".md", "")}`
    };
    return new Response(JSON.stringify(conceptData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=300"
      }
    });
  } catch (error) {
    console.error("Error fetching concept:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch concept" }), {
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
