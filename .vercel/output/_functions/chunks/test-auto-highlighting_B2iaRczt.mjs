import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BtnpNevN.mjs';
import 'clsx';

const frontmatter = {
  "title": "Testing Auto-Concept Highlighting",
  "description": "A test post to verify that concept terms are automatically highlighted in blog post text.",
  "pubDatetime": "2024-12-12T12:00:00.000Z",
  "modDatetime": "2024-12-12T12:00:00.000Z",
  "featured": false,
  "draft": false,
  "tags": ["test", "concepts", "auto-highlighting"],
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
    "slug": "testing-auto-concept-highlighting",
    "text": "Testing Auto-Concept Highlighting"
  }, {
    "depth": 2,
    "slug": "what-should-be-highlighted",
    "text": "What Should Be Highlighted"
  }, {
    "depth": 3,
    "slug": "engineering-concepts",
    "text": "Engineering Concepts"
  }, {
    "depth": 3,
    "slug": "cognitive-science-concepts",
    "text": "Cognitive Science Concepts"
  }, {
    "depth": 2,
    "slug": "testing-different-contexts",
    "text": "Testing Different Contexts"
  }, {
    "depth": 3,
    "slug": "in-paragraphs",
    "text": "In Paragraphs"
  }, {
    "depth": 3,
    "slug": "in-lists",
    "text": "In Lists"
  }, {
    "depth": 3,
    "slug": "in-code-context-should-not-be-highlighted",
    "text": "In Code Context (Should NOT be highlighted)"
  }, {
    "depth": 2,
    "slug": "expected-behavior",
    "text": "Expected Behavior"
  }];
}
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ul: "ul",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h1, {
      id: "testing-auto-concept-highlighting",
      children: "Testing Auto-Concept Highlighting"
    }), "\n", createVNode(_components.p, {
      children: "This post tests the automatic highlighting of concept terms in blog post text."
    }), "\n", createVNode(_components.h2, {
      id: "what-should-be-highlighted",
      children: "What Should Be Highlighted"
    }), "\n", createVNode(_components.p, {
      children: "The following terms should be automatically highlighted when they appear in the text:"
    }), "\n", createVNode(_components.h3, {
      id: "engineering-concepts",
      children: "Engineering Concepts"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Geometric Division"
        }), ": This is a fundamental concept in finite element analysis where we break down complex structures into smaller elements."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mesh generation"
        }), ": Another term for geometric division, this process creates computational grids."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Discretization"
        }), ": The mathematical process of converting continuous problems into discrete ones."]
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "cognitive-science-concepts",
      children: "Cognitive Science Concepts"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Cognitive Load Distribution"
        }), ": This describes how mental effort is allocated across different cognitive systems."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Mental effort distribution"
        }), ": An alternative term for the same concept."]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Attention allocation"
        }), ": How we distribute our cognitive resources."]
      }), "\n"]
    }), "\n", createVNode(_components.h2, {
      id: "testing-different-contexts",
      children: "Testing Different Contexts"
    }), "\n", createVNode(_components.h3, {
      id: "in-paragraphs",
      children: "In Paragraphs"
    }), "\n", createVNode(_components.p, {
      children: "When discussing engineering principles, geometric division becomes essential for understanding how complex structures are analyzed. Similarly, cognitive load distribution helps us understand how users process information in digital interfaces."
    }), "\n", createVNode(_components.h3, {
      id: "in-lists",
      children: "In Lists"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Geometric division is used in structural analysis"
      }), "\n", createVNode(_components.li, {
        children: "Cognitive load distribution affects user experience design"
      }), "\n", createVNode(_components.li, {
        children: "Both concepts involve breaking down complex systems"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "in-code-context-should-not-be-highlighted",
      children: "In Code Context (Should NOT be highlighted)"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code astro-code-themes min-light night-owl",
      style: {
        "--shiki-light": "#24292eff",
        "--shiki-dark": "#d6deeb",
        "--shiki-light-bg": "#ffffff",
        "--shiki-dark-bg": "#011627",
        overflowX: "auto",
        "--file-name-offset": "-0.75rem"
      },
      tabindex: "0",
      "data-language": "javascript",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              "--shiki-light": "#C2C3C5",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#637777",
              "--shiki-dark-font-style": "italic"
            },
            children: "// geometric division should not be highlighted here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#D32F2F",
              "--shiki-dark": "#C792EA"
            },
            children: "function"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#82AAFF",
              "--shiki-dark-font-style": "italic"
            },
            children: " geometricDivision"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D9F5DD"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D7DBE0"
            },
            children: "value"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D9F5DD"
            },
            children: ")"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#D32F2F",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#C792EA",
              "--shiki-dark-font-style": "italic"
            },
            children: "  return"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D7DBE0"
            },
            children: " value"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#D32F2F",
              "--shiki-dark": "#C792EA"
            },
            children: " /"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#1976D2",
              "--shiki-dark": "#F78C6C"
            },
            children: " 2"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ";"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              "--shiki-light": "#C2C3C5",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#637777",
              "--shiki-dark-font-style": "italic"
            },
            children: "// cognitive load distribution should not be highlighted here"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#D32F2F",
              "--shiki-dark": "#C792EA"
            },
            children: "const"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#1976D2",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#82AAFF",
              "--shiki-dark-font-style": "italic"
            },
            children: " cognitiveLoadDistribution"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#D32F2F",
              "--shiki-dark": "#C792EA"
            },
            children: " ="
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-style": "inherit",
              "--shiki-dark": "#82AAFF",
              "--shiki-dark-font-style": "italic"
            },
            children: " calculateLoad"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: "();"
          })]
        })]
      })
    }), "\n", createVNode(_components.h2, {
      id: "expected-behavior",
      children: "Expected Behavior"
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Automatic Detection"
        }), ": Terms should be automatically detected and highlighted"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Click Interaction"
        }), ": Clicking highlighted terms should show a modal with concept preview"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "New Tab Option"
        }), ": The modal should have an icon to open the concept page in a new tab"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Code Exclusion"
        }), ": Terms in code blocks should NOT be highlighted"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Case Insensitive"
        }), ": Both “Geometric Division” and “geometric division” should work"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Let’s see if this auto-highlighting feature works correctly!"
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

const url = "src/data/blog/test-auto-highlighting.mdx";
const file = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/test-auto-highlighting.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/test-auto-highlighting.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
