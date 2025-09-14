import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_BtnpNevN.mjs';
import 'clsx';

const frontmatter = {
  "title": "Why Your Brain Hates A/B Tests: System 1 vs System 2 in Product Decisions",
  "description": "Product managers make 100+ micro-decisions daily. Here's how Kahneman's dual-process theory explains why we're so bad at interpreting test results.",
  "publishDate": "2025-09-10T00:00:00.000Z",
  "pubDatetime": "2025-09-10T10:00:00.000Z",
  "tags": ["cognitive-science", "product-management", "decision-making", "a-b-testing"],
  "category": "neuroscience",
  "readTime": 8,
  "featuredImage": "/images/system1-vs-system2.png",
  "draft": false,
  "importance": 8,
  "connections": [],
  "backlinks": [],
  "relatedPosts": [],
  "cluster": "cognitive-science"
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "the-47-second-decision-that-cost-us-50k",
    "text": "The 47-Second Decision That Cost Us £50K"
  }, {
    "depth": 2,
    "slug": "your-brains-two-operating-systems",
    "text": "Your Brain’s Two Operating Systems"
  }, {
    "depth": 2,
    "slug": "the-ab-test-panic-when-system-1-takes-control",
    "text": "The A/B Test Panic: When System 1 Takes Control"
  }, {
    "depth": 2,
    "slug": "the-hidden-costs-of-system-1-product-management",
    "text": "The Hidden Costs of System 1 Product Management"
  }, {
    "depth": 3,
    "slug": "1-premature-optimization-syndrome",
    "text": "1. Premature Optimization Syndrome"
  }, {
    "depth": 3,
    "slug": "2-false-pattern-recognition",
    "text": "2. False Pattern Recognition"
  }, {
    "depth": 3,
    "slug": "3-statistical-anchoring",
    "text": "3. Statistical Anchoring"
  }, {
    "depth": 2,
    "slug": "building-system-2-into-your-product-process",
    "text": "Building System 2 Into Your Product Process"
  }, {
    "depth": 3,
    "slug": "pre-decision-frameworks",
    "text": "Pre-Decision Frameworks"
  }, {
    "depth": 3,
    "slug": "data-presentation-for-system-2",
    "text": "Data Presentation for System 2"
  }, {
    "depth": 3,
    "slug": "decision-documentation",
    "text": "Decision Documentation"
  }, {
    "depth": 2,
    "slug": "from-civil-engineering-to-cognitive-engineering",
    "text": "From Civil Engineering to Cognitive Engineering"
  }, {
    "depth": 2,
    "slug": "the-neuroscience-of-better-product-decisions",
    "text": "The Neuroscience of Better Product Decisions"
  }, {
    "depth": 2,
    "slug": "practical-implementation-your-next-ab-test",
    "text": "Practical Implementation: Your Next A/B Test"
  }, {
    "depth": 2,
    "slug": "the-bottom-line-product-management-as-applied-cognitive-science",
    "text": "The Bottom Line: Product Management as Applied Cognitive Science"
  }, {
    "depth": 2,
    "slug": "references--further-reading",
    "text": "References & Further Reading"
  }];
}
function _createMdxContent(props) {
  const _components = {
    a: "a",
    br: "br",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
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
    children: [createVNode(_components.h2, {
      id: "the-47-second-decision-that-cost-us-50k",
      children: "The 47-Second Decision That Cost Us £50K"
    }), "\n", createVNode(_components.p, {
      children: "Last Tuesday at 10:03 AM, I caught myself making a classic System 1 error. Our latest A/B test showed a 23% drop in video completion rates. My gut screamed “revert immediately.” My finger hovered over the rollback button."
    }), "\n", createVNode(_components.p, {
      children: "But I paused. Why was my brain so eager to panic?"
    }), "\n", createVNode(_components.p, {
      children: "As product managers, we make 100+ micro-decisions daily. Launch this feature. Kill that experiment. Ship or iterate. Each choice shapes user behavior, revenue, and company trajectory. Yet our brains—evolutionarily wired for survival, not spreadsheets—consistently sabotage rational product decisions."
    }), "\n", createVNode(_components.p, {
      children: "Here’s why understanding Kahneman’s dual-process theory isn’t just academic curiosity—it’s survival for deep-tech startups."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "your-brains-two-operating-systems",
      children: "Your Brain’s Two Operating Systems"
    }), "\n", createVNode(_components.p, {
      children: ["Daniel Kahneman’s ", createVNode(_components.em, {
        children: "Thinking, Fast and Slow"
      }), " revealed that human cognition operates through two distinct systems:"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "System 1: The Reactive Engine"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Fast, automatic, emotional"
      }), "\n", createVNode(_components.li, {
        children: "Pattern recognition and heuristics"
      }), "\n", createVNode(_components.li, {
        children: "Evolved for immediate threats and opportunities"
      }), "\n", createVNode(_components.li, {
        children: "Dominates under stress, fatigue, or time pressure"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "System 2: The Analytical Processor"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Slow, deliberate, logical"
      }), "\n", createVNode(_components.li, {
        children: "Statistical reasoning and causal analysis"
      }), "\n", createVNode(_components.li, {
        children: "Requires conscious effort and cognitive resources"
      }), "\n", createVNode(_components.li, {
        children: "Often overridden by System 1’s urgency"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "In product management, this creates a dangerous paradox: the decisions requiring the most analytical rigor (System 2) often occur under conditions that activate our reactive brain (System 1)."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-ab-test-panic-when-system-1-takes-control",
      children: "The A/B Test Panic: When System 1 Takes Control"
    }), "\n", createVNode(_components.p, {
      children: "Back to that Tuesday morning. Our video attention platform was testing a new calibration flow—reducing setup time from 2 minutes to 30 seconds. Early metrics looked promising: 40% faster onboarding, reduced drop-offs."
    }), "\n", createVNode(_components.p, {
      children: "Then the completion rates crashed."
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "System 1’s Immediate Response:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Pattern matching"
        }), ": “Metrics dropped = something’s broken”"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Loss aversion"
        }), ": Fixated on the 23% decline, ignoring other gains"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Availability bias"
        }), ": Recalled our worst A/B test disasters, not balanced outcomes"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.em, {
          children: "Urgency addiction"
        }), ": Demanded immediate action to “stop the bleeding”"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "What System 2 Analysis Revealed:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Sample size: Only 247 users (statistically insignificant)"
      }), "\n", createVNode(_components.li, {
        children: "Cohort composition: 67% mobile users (higher baseline abandonment)"
      }), "\n", createVNode(_components.li, {
        children: "Completion metric: Measured differently in test vs. control"
      }), "\n", createVNode(_components.li, {
        children: "Secondary metrics: User satisfaction scores actually increased 15%"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "The “disaster” was measurement noise. The feature was performing exactly as designed."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-hidden-costs-of-system-1-product-management",
      children: "The Hidden Costs of System 1 Product Management"
    }), "\n", createVNode(_components.h3, {
      id: "1-premature-optimization-syndrome",
      children: ["1. ", createVNode(_components.strong, {
        children: "Premature Optimization Syndrome"
      })]
    }), "\n", createVNode(_components.p, {
      children: "When metrics dip, System 1 demands immediate fixes. This leads to:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Shipping band-aid solutions instead of root cause analysis"
      }), "\n", createVNode(_components.li, {
        children: "Creating technical debt from rushed patches"
      }), "\n", createVNode(_components.li, {
        children: "Missing genuine improvement opportunities"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Real example"
      }), ": A SaaS startup I consulted reverted 6 A/B tests in one quarter based on day-1 metrics. Later analysis showed 4 would have driven significant long-term gains."]
    }), "\n", createVNode(_components.h3, {
      id: "2-false-pattern-recognition",
      children: ["2. ", createVNode(_components.strong, {
        children: "False Pattern Recognition"
      })]
    }), "\n", createVNode(_components.p, {
      children: "Our brains excel at finding patterns—even when none exist."
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "“Feature X always launches successfully on Thursdays” (survivorship bias)"
      }), "\n", createVNode(_components.li, {
        children: "“Users from organic channels convert better” (selection bias)"
      }), "\n", createVNode(_components.li, {
        children: "“This reminds me of our failed Y initiative” (representativeness heuristic)"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "3-statistical-anchoring",
      children: ["3. ", createVNode(_components.strong, {
        children: "Statistical Anchoring"
      })]
    }), "\n", createVNode(_components.p, {
      children: "System 1 locks onto the first number it sees, distorting all subsequent analysis."
    }), "\n", createVNode(_components.p, {
      children: "In neuroscience-backed video analytics, we track dozens of metrics:"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Eye fixation peaks"
      }), "\n", createVNode(_components.li, {
        children: "Attention synchronization scores"
      }), "\n", createVNode(_components.li, {
        children: "Blink rate variations"
      }), "\n", createVNode(_components.li, {
        children: "Gaze pattern entropy"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: "Teams often anchor on whichever metric appears first in dashboards, ignoring more predictive signals buried below the fold."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "building-system-2-into-your-product-process",
      children: "Building System 2 Into Your Product Process"
    }), "\n", createVNode(_components.h3, {
      id: "pre-decision-frameworks",
      children: createVNode(_components.strong, {
        children: "Pre-Decision Frameworks"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "1. The 24-Hour Rule"
      }), "\nUnless the platform is literally on fire, wait 24 hours before major reversions. System 2 needs time to engage."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "2. Devil’s Advocate Protocol"
      }), createVNode(_components.br, {}), "\nAssign someone to argue the opposite position. Force System 2 activation through cognitive friction."]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "3. Base Rate Anchoring"
      }), "\nBefore analyzing any test, state your prior beliefs:"]
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "“Historically, 23% of our A/B tests show early negative signals”"
      }), "\n", createVNode(_components.li, {
        children: "“Feature rollbacks cost us an average of 3 dev-weeks”"
      }), "\n", createVNode(_components.li, {
        children: "“Mobile completion rates run 40% lower than desktop baseline”"
      }), "\n"]
    }), "\n", createVNode(_components.h3, {
      id: "data-presentation-for-system-2",
      children: createVNode(_components.strong, {
        children: "Data Presentation for System 2"
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Instead of"
      }), ": “Completion rate dropped 23%“", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Present"
      }), ": “Completion rate: 47% (test) vs 61% (control), n=247, CI: ±8%, power: 0.62”"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Instead of"
      }), ": Charts showing dramatic peaks and valleys", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Present"
      }), ": Normalized baselines with confidence intervals"]
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Instead of"
      }), ": Real-time alerts for every metric fluctuation", createVNode(_components.br, {}), "\n", createVNode(_components.strong, {
        children: "Present"
      }), ": Weekly summaries with trend context"]
    }), "\n", createVNode(_components.h3, {
      id: "decision-documentation",
      children: createVNode(_components.strong, {
        children: "Decision Documentation"
      })
    }), "\n", createVNode(_components.p, {
      children: "Create a simple template forcing System 2 engagement:"
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
      "data-language": "markdown",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#82B1FF",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "## Decision: [Feature/Test Name]"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "System 1 impulse"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": What's my gut reaction?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "Base rates"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": What typically happens in similar situations?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "Sample size"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": Do we have statistical significance?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "Secondary metrics"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": What else changed?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "Opportunity cost"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": What are we NOT doing if we react now?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "bold"
            },
            children: "Reversibility"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#6F42C1",
              "--shiki-light-font-weight": "bold",
              "--shiki-dark": "#C5E478",
              "--shiki-dark-font-weight": "inherit"
            },
            children: "**"
          }), createVNode(_components.span, {
            style: {
              "--shiki-light": "#24292EFF",
              "--shiki-dark": "#D6DEEB"
            },
            children: ": How easy is it to undo this decision?"
          })]
        })]
      })
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "from-civil-engineering-to-cognitive-engineering",
      children: "From Civil Engineering to Cognitive Engineering"
    }), "\n", createVNode(_components.p, {
      children: "My background in structural engineering taught me that forces invisible to the naked eye determine whether buildings stand or collapse. Stress concentrations. Material fatigue. Resonance frequencies."
    }), "\n", createVNode(_components.p, {
      children: "Product management operates under similar hidden forces—cognitive biases that determine whether products succeed or fail. Just as we wouldn’t design a bridge without understanding load dynamics, we shouldn’t build products without understanding decision dynamics."
    }), "\n", createVNode(_components.p, {
      children: "At North AI, we’re applying this systems thinking to video analytics. Our synthetic audience platform doesn’t just track what users do—it models how cognitive processes drive attention, engagement, and retention. We’re building System 2 directly into the product experience."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-neuroscience-of-better-product-decisions",
      children: "The Neuroscience of Better Product Decisions"
    }), "\n", createVNode(_components.p, {
      children: "Current neuroscience research reveals specific interventions that activate analytical thinking:"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "1. Cognitive Load Reduction"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Simplify dashboards to 3-5 key metrics maximum"
      }), "\n", createVNode(_components.li, {
        children: "Use consistent time windows (7-day, 30-day comparisons)"
      }), "\n", createVNode(_components.li, {
        children: "Automate routine decisions to preserve mental bandwidth"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "2. Temporal Distancing"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Ask: “How will we view this decision in 6 months?”"
      }), "\n", createVNode(_components.li, {
        children: "Scenario plan for 3 potential outcomes"
      }), "\n", createVNode(_components.li, {
        children: "Consider reversibility vs. irreversibility"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "3. Social Proof Mechanisms"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Share decisions with technical advisors before implementation"
      }), "\n", createVNode(_components.li, {
        children: "Create cross-functional review processes"
      }), "\n", createVNode(_components.li, {
        children: "Document and share post-decision analysis"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "practical-implementation-your-next-ab-test",
      children: "Practical Implementation: Your Next A/B Test"
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Before launching your next experiment:"
      })
    }), "\n", createVNode(_components.ol, {
      children: ["\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Define success criteria"
        }), " (before seeing any data)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Set minimum sample sizes"
        }), " (statistical power calculation)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Identify potential confounding variables"
        }), " (seasonality, cohort effects)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Schedule decision checkpoints"
        }), " (day 3, day 7, day 14)"]
      }), "\n", createVNode(_components.li, {
        children: [createVNode(_components.strong, {
          children: "Pre-commit to analysis methodology"
        }), " (primary/secondary metrics, significance thresholds)"]
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "During the test:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Monitor for technical issues only"
      }), "\n", createVNode(_components.li, {
        children: "Resist analyzing incomplete data"
      }), "\n", createVNode(_components.li, {
        children: "Document surprising observations without taking action"
      }), "\n"]
    }), "\n", createVNode(_components.p, {
      children: createVNode(_components.strong, {
        children: "Post-test analysis:"
      })
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: "Start with base rates and priors"
      }), "\n", createVNode(_components.li, {
        children: "Calculate confidence intervals"
      }), "\n", createVNode(_components.li, {
        children: "Examine effect sizes, not just statistical significance"
      }), "\n", createVNode(_components.li, {
        children: "Consider long-term vs. short-term impacts"
      }), "\n"]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "the-bottom-line-product-management-as-applied-cognitive-science",
      children: "The Bottom Line: Product Management as Applied Cognitive Science"
    }), "\n", createVNode(_components.p, {
      children: "The best product managers aren’t just data-driven—they’re cognition-aware. They understand that every metric interpretation, every prioritization choice, every go/no-go decision flows through the same neural pathways that helped our ancestors survive on the savanna."
    }), "\n", createVNode(_components.p, {
      children: "But modern product problems require modern solutions. By building System 2 thinking into our processes, we make better decisions, ship higher-impact features, and ultimately create products that genuinely improve human experiences."
    }), "\n", createVNode(_components.p, {
      children: "That Tuesday morning test? We let it run for two more weeks. Final results: 31% improvement in user onboarding completion, 18% increase in long-term retention, and validation of our core hypothesis about cognitive load in video testing workflows."
    }), "\n", createVNode(_components.p, {
      children: "System 2 for the win."
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.p, {
      children: createVNode(_components.em, {
        children: "Lucas Cazelli is CPO & Co-founder at North AI, where he builds neuroscience-inspired analytics for video content. Previously, he led product at TES Global and Paus, with a background in civil engineering and structural design. He writes about decision-making, behavioral analytics, and the intersection of cognitive science and product strategy."
      })
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.strong, {
        children: "Connect"
      }), ": ", createVNode(_components.a, {
        href: "https://linkedin.com/in/lucascazelli",
        children: "LinkedIn"
      }), " | ", createVNode(_components.a, {
        href: "https://north-ai.com",
        children: "North AI"
      }), " | ", createVNode(_components.a, {
        href: "mailto:lucas@north-ai.com",
        children: "lucas@north-ai.com"
      })]
    }), "\n", createVNode(_components.hr, {}), "\n", createVNode(_components.h2, {
      id: "references--further-reading",
      children: "References & Further Reading"
    }), "\n", createVNode(_components.ul, {
      children: ["\n", createVNode(_components.li, {
        children: ["Kahneman, D. (2011). ", createVNode(_components.em, {
          children: "Thinking, Fast and Slow"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Thaler, R. & Sunstein, C. (2008). ", createVNode(_components.em, {
          children: "Nudge: Improving Decisions About Health, Wealth, and Happiness"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Ariely, D. (2008). ", createVNode(_components.em, {
          children: "Predictably Irrational"
        })]
      }), "\n", createVNode(_components.li, {
        children: ["Heath, C. & Heath, D. (2013). ", createVNode(_components.em, {
          children: "Decisive: How to Make Better Choices in Life and Work"
        })]
      }), "\n"]
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

const url = "src/data/blog/why-your-brain-hates-ab-tests-system-1-vs-system-2-product-decisions.mdx";
const file = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/why-your-brain-hates-ab-tests-system-1-vs-system-2-product-decisions.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/why-your-brain-hates-ab-tests-system-1-vs-system-2-product-decisions.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
