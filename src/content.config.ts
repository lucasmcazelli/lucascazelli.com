import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";

const blog = defineCollection({
  loader: glob({
    pattern: ["**/[^_]*.md", "**/[^_]*.mdx"],
    base: `./${BLOG_PATH}`,
  }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      description: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().default(false),
      tags: z.array(z.string()).default(["others"]),
      category: z
        .enum([
          "neuroscience",
          "product",
          "statistics",
          "case-study",
          "technical",
        ])
        .optional(),
      readTime: z.number().optional(), // minutes
      featuredImage: z.string().optional(),
      ogImage: image().or(z.string()).optional(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
      // Knowledge Graph fields
      connections: z.array(z.string()).optional(), // Manual connections to other posts
      backlinks: z.array(z.string()).optional(), // Posts that link to this one
      relatedPosts: z.array(z.string()).optional(), // Auto-generated related posts
      importance: z.number().min(1).max(10).default(5), // Node size in graph
      cluster: z.string().optional(), // Community/cluster assignment
    }),
});

const concepts = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      term: z.string(),
      definition: z.string().max(280), // Short definition for previews
      category: z.enum(['engineering', 'cognitive-science', 'statistics', 'product', 'neuroai']),
      aliases: z.array(z.string()).optional(), // Alternative names
      related: z.array(z.string()).optional(), // Related concept IDs
      opposite: z.array(z.string()).optional(), // Contrasting concepts
      examples: z.array(z.object({
        context: z.string(),
        description: z.string()
      })).optional(),
      formula: z.string().optional(), // Mathematical notation if applicable
      visualization: image().or(z.string()).optional(), // Path to diagram/image
      bridgeFrom: z.string().optional(), // Engineering concept it maps from
      bridgeTo: z.string().optional(), // Product/AI concept it maps to
      firstIntroduced: z.string().optional(), // Blog post slug
      weight: z.number().default(1), // Importance in graph (1-5)
      importance: z.number().min(1).max(10).default(5), // Node size in graph
      cluster: z.string().optional(), // Community/cluster assignment
    }),
});

export const collections = { blog, concepts };
