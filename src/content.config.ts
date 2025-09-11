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
    }),
});

export const collections = { blog };
