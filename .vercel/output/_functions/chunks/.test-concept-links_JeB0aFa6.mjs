import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BtnpNevN.mjs';
import { $ as $$ConceptLink, a as $$Term } from './Term_DoZF4ZAj.mjs';
import 'clsx';

const frontmatter = {
  "title": "Testing Concept Links",
  "description": "A test post to verify that concept linking functionality works properly.",
  "pubDatetime": "2024-12-12T10:00:00.000Z",
  "modDatetime": "2024-12-12T10:00:00.000Z",
  "featured": false,
  "draft": true,
  "tags": ["test", "concepts"],
  "category": "technical",
  "importance": 3,
  "connections": [],
  "backlinks": [],
  "relatedPosts": [],
  "cluster": "testing"
};
function getHeadings() {
  return [{
    "depth": 1,
    "slug": "testing-concept-links",
    "text": "Testing Concept Links"
  }, {
    "depth": 2,
    "slug": "testing-different-link-types",
    "text": "Testing Different Link Types"
  }, {
    "depth": 3,
    "slug": "using-conceptlink-component",
    "text": "Using ConceptLink Component"
  }, {
    "depth": 3,
    "slug": "using-term-component",
    "text": "Using Term Component"
  }, {
    "depth": 3,
    "slug": "testing-with-custom-text",
    "text": "Testing with Custom Text"
  }, {
    "depth": 2,
    "slug": "what-should-work",
    "text": "What Should Work"
  }, {
    "depth": 2,
    "slug": "expected-behavior",
    "text": "Expected Behavior"
  }];
}
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "testing-concept-links",
      children: "Testing Concept Links"
    }), "\n", createVNode(_components.p, {
      children: "This is a test post to verify that the concept linking functionality works properly."
    }), "\n", createVNode(_components.h2, {
      id: "testing-different-link-types",
      children: "Testing Different Link Types"
    }), "\n", createVNode(_components.h3, {
      id: "using-conceptlink-component",
      children: "Using ConceptLink Component"
    }), "\n", createVNode(_components.p, {
      children: ["Here’s a link to ", createVNode($$ConceptLink, {
        concept: "geometric-division",
        children: "geometric division"
      }), " concept."]
    }), "\n", createVNode(_components.h3, {
      id: "using-term-component",
      children: "Using Term Component"
    }), "\n", createVNode(_components.p, {
      children: ["Here’s a link to ", createVNode($$Term, {
        id: "cognitive-load-distribution",
        children: "cognitive load distribution"
      }), " concept."]
    }), "\n", createVNode(_components.h3, {
      id: "testing-with-custom-text",
      children: "Testing with Custom Text"
    }), "\n", createVNode(_components.p, {
      children: ["Here’s a link to ", createVNode($$ConceptLink, {
        concept: "geometric-division",
        children: "spatial segmentation"
      }), " using custom display text."]
    }), "\n", createVNode(_components.h2, {
      id: "what-should-work",
      children: "What Should Work"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Clickable Links"
        }), ": All concept links should be clickable and navigate to the concept pages"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Hover Effects"
        }), ": Links should show hover effects indicating they’re interactive"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Modal Preview"
        }), ": Clicking links should show a modal with concept preview (if modal is working)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Visual Styling"
        }), ": Links should be visually distinct from regular text"]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Clicking any concept link should either:\n", createVNode(_components.ul, {
          children: ["\n", createVNode(_components.li, {
            children: "Open the concept page directly, OR"
          }), "\n", createVNode(_components.li, {
            children: "Show a modal preview of the concept with an option to view the full page"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Let’s see if this works!"
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/data/blog/.test-concept-links.mdx";
const file = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/.test-concept-links.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/.test-concept-links.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
