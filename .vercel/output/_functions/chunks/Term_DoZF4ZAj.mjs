import { a as createComponent, c as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_BtnpNevN.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                                                   */
/* empty css                                                            */

const $$Astro$1 = createAstro("https://lucascazelli.com");
const $$ConceptLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ConceptLink;
  const { concept, children, showPreview = true, className = "" } = Astro2.props;
  const displayText = children || concept.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/concepts/${concept}`, "href")}${addAttribute(`concept-link ${className}`, "class")}${addAttribute(concept, "data-concept")}${addAttribute(showPreview, "data-preview")}${addAttribute(`Learn about ${displayText}`, "title")} data-astro-cid-quvfc3a4> ${displayText} </a> `;
}, "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/components/ConceptLink.astro", void 0);

const $$Astro = createAstro("https://lucascazelli.com");
const $$Term = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Term;
  const { id, children, showPreview = true } = Astro2.props;
  const displayText = children || id.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/concepts/${id}`, "href")} class="concept-link"${addAttribute(id, "data-concept")}${addAttribute(showPreview, "data-preview")}${addAttribute(`Learn about ${displayText}`, "title")} data-astro-cid-hr2hq2fv> ${displayText} </a> `;
}, "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/components/Term.astro", void 0);

export { $$ConceptLink as $, $$Term as a };
