import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BMAQZmqy.mjs';
import { manifest } from './manifest_CwazCvC7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/api/concepts/list.json.astro.mjs');
const _page4 = () => import('./pages/api/concepts/_concept_.json.astro.mjs');
const _page5 = () => import('./pages/api/concepts/_id_.astro.mjs');
const _page6 = () => import('./pages/archives.astro.mjs');
const _page7 = () => import('./pages/concepts.astro.mjs');
const _page8 = () => import('./pages/concepts/_---slug_.astro.mjs');
const _page9 = () => import('./pages/concepts/_---slug_.astro2.mjs');
const _page10 = () => import('./pages/graph.astro.mjs');
const _page11 = () => import('./pages/og.png.astro.mjs');
const _page12 = () => import('./pages/posts/_---slug_/index.png.astro.mjs');
const _page13 = () => import('./pages/posts/_---page_.astro.mjs');
const _page14 = () => import('./pages/posts/_---slug_.astro.mjs');
const _page15 = () => import('./pages/robots.txt.astro.mjs');
const _page16 = () => import('./pages/rss.xml.astro.mjs');
const _page17 = () => import('./pages/search.astro.mjs');
const _page18 = () => import('./pages/tags/_tag_/_---page_.astro.mjs');
const _page19 = () => import('./pages/tags.astro.mjs');
const _page20 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.0_jiti@2.4.2_lightningcss@1.30.1_rollup@4.41.1_typescript@5.8.3_yaml@2.7.0/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.md", _page2],
    ["src/pages/api/concepts/list.json.ts", _page3],
    ["src/pages/api/concepts/[concept].json.ts", _page4],
    ["src/pages/api/concepts/[id].ts", _page5],
    ["src/pages/archives/index.astro", _page6],
    ["src/pages/concepts/index.astro", _page7],
    ["src/pages/concepts/[...slug]/index.astro", _page8],
    ["src/pages/concepts/[...slug].astro", _page9],
    ["src/pages/graph.astro", _page10],
    ["src/pages/og.png.ts", _page11],
    ["src/pages/posts/[...slug]/index.png.ts", _page12],
    ["src/pages/posts/[...page].astro", _page13],
    ["src/pages/posts/[...slug]/index.astro", _page14],
    ["src/pages/robots.txt.ts", _page15],
    ["src/pages/rss.xml.ts", _page16],
    ["src/pages/search.astro", _page17],
    ["src/pages/tags/[tag]/[...page].astro", _page18],
    ["src/pages/tags/index.astro", _page19],
    ["src/pages/index.astro", _page20]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "10ae66a6-d1c5-439a-9a57-0fad18a5f362",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
