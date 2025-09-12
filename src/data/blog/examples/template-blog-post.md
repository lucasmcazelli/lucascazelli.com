I'll help you add an explanation and a blog post template to your Astro Paper blog. Let me first explore the current structure to understand how blog posts are organized and then create the appropriate templates.


[3 tools called]

Now let me examine some existing blog posts to understand the structure and create appropriate templates:


[3 tools called]

Now let me create a comprehensive blog post template and explanation. I'll create both a template file and an explanation document:


[1 tool called]

Perfect! Now I'll create a comprehensive blog post template and an explanation document. Let me create both files:


[2 tools called]

Great! The files don't exist, so I'll create them. Let me create both the blog post template and the explanation guide:


[1 tool called]

I need to create these files. Let me write the content for both files:

```markdown:/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/src/data/blog/template-blog-post.md
---
author: Lucas Cazelli
pubDatetime: 2024-01-15T10:00:00Z
modDatetime: 2024-01-15T10:00:00Z
title: "Your Blog Post Title Here"
slug: your-blog-post-title-here
featured: false
draft: true
tags:
  - product
  - example
  - template
category: product
description: "A brief description of what this blog post is about. This will be used in search results and social media previews."
ogImage: /assets/images/your-og-image.png
canonicalURL: ""
hideEditPost: false
timezone: "America/New_York"
readTime: 5
featuredImage: ""
connections: []
backlinks: []
relatedPosts: []
importance: 5
cluster: "product-management"
---

# Your Blog Post Title Here

Start with an engaging introduction that hooks your readers and clearly states what they'll learn from this post.

<figure>
  <img
    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&h=630"
    alt="Descriptive alt text for your image"
  />
  <figcaption class="text-center">
    Photo by <a href="https://unsplash.com/photos/your-image-link">Photographer Name</a>
  </figcaption>
</figure>

## Table of contents

## Main Section 1

This is where you dive into your main content. Use clear headings (h2 for main sections) to structure your post.

### Subsection 1.1

Break down complex topics into digestible subsections.

```javascript
// Example code block
function exampleFunction() {
  console.log("Hello, World!");
}
```

### Subsection 1.2

Continue with more detailed explanations.

> 💡 **Tip**: Use blockquotes to highlight important information or tips.

## Main Section 2

Structure your content logically, making it easy for readers to follow your argument.

### Key Points to Remember

- Use bullet points for lists
- Keep sentences concise and clear
- Provide actionable insights

1. Numbered lists work well for step-by-step processes
2. They help readers follow along
3. They make content more scannable

## Main Section 3

### Real-World Example

Share practical examples that illustrate your points:

| Feature | Benefit | Implementation |
|---------|---------|----------------|
| Feature A | Benefit 1 | Easy |
| Feature B | Benefit 2 | Medium |
| Feature C | Benefit 3 | Complex |

## Conclusion

Wrap up your post by:

- Summarizing the key takeaways
- Providing actionable next steps
- Encouraging reader engagement

## What's Next?

- [ ] Action item 1
- [ ] Action item 2
- [ ] Action item 3

---

*Have questions or thoughts about this topic? Feel free to reach out on [Twitter](https://twitter.com/yourusername) or [LinkedIn](https://linkedin.com/in/yourusername).*
```

Now let me create the comprehensive explanation guide:

```markdown:/Users/lucascazelli/Dev/website-lucascazelli/astro-paper/BLOG_POST_GUIDE.md
# Blog Post Creation Guide for Lucas Cazelli's Blog

This guide explains how to create and structure blog posts for your Astro Paper blog, including the template and best practices.

## Quick Start

1. **Copy the template**: Use `src/data/blog/template-blog-post.md` as your starting point
2. **Update the frontmatter**: Fill in all the required fields
3. **Write your content**: Follow the structure and best practices outlined below
4. **Set draft to false**: When ready to publish, change `draft: false`

## Frontmatter Explanation

The frontmatter (the YAML section at the top of your markdown file) contains metadata about your blog post. Here's what each field means:

### Required Fields

| Field | Description | Example |
|-------|-------------|---------|
| `author` | Your name | `"Lucas Cazelli"` |
| `pubDatetime` | Publication date in ISO 8601 format | `2024-01-15T10:00:00Z` |
| `title` | The title of your blog post | `"Building Better Product Teams"` |
| `description` | Brief description for SEO and social sharing | `"Learn how to structure and manage product teams for maximum impact."` |

### Optional Fields

| Field | Description | Default | Example |
|-------|-------------|---------|---------|
| `modDatetime` | Last modification date | None | `2024-01-16T14:30:00Z` |
| `slug` | Custom URL slug | Auto-generated from filename | `"building-better-product-teams"` |
| `featured` | Show on homepage featured section | `false` | `true` |
| `draft` | Hide from published posts | `false` | `true` |
| `tags` | Array of tags for categorization | `["others"]` | `["product", "management", "teams"]` |
| `category` | Main category for the post | None | `"product"` |
| `ogImage` | Social media preview image | Site default | `"/assets/images/post-og.png"` |
| `readTime` | Estimated reading time in minutes | Auto-calculated | `8` |
| `timezone` | Timezone for the post | Site default | `"America/New_York"` |

### Advanced Fields (Knowledge Graph)

| Field | Description | Example |
|-------|-------------|---------|
| `connections` | Manual connections to other posts | `["post-slug-1", "post-slug-2"]` |
| `backlinks` | Posts that link to this one | `["related-post-slug"]` |
| `relatedPosts` | Auto-generated related posts | `[]` |
| `importance` | Node size in graph (1-10) | `5` |
| `cluster` | Community/cluster assignment | `"product-management"` |

## Available Categories

Based on your blog configuration, you can use these categories:

- `neuroscience` - Posts about brain science, decision-making, cognitive biases
- `product` - Product management, strategy, and development
- `statistics` - Data analysis, metrics, and statistical concepts
- `case-study` - Real-world examples and case studies
- `technical` - Technical implementation, tools, and processes

## Content Structure Best Practices

### 1. Engaging Introduction
- Start with a hook that grabs attention
- Clearly state what readers will learn
- Keep it concise but compelling

### 2. Table of Contents
Always include a "Table of contents" section after your introduction:

```markdown
## Table of contents
```

This will automatically generate a clickable table of contents.

### 3. Logical Structure
- Use H2 for main sections
- Use H3 for subsections
- Keep headings descriptive and scannable

### 4. Visual Elements
- Include relevant images with proper alt text
- Use code blocks for technical content
- Add tables for structured data
- Include blockquotes for important points

### 5. Strong Conclusion
- Summarize key takeaways
- Provide actionable next steps
- Encourage engagement

## File Organization

### Directory Structure
You can organize posts in subdirectories:

```
src/data/blog/
├── 2024/                    # Year-based organization
│   ├── january/
│   │   └── my-post.md
│   └── february/
│       └── another-post.md
├── _drafts/                 # Underscore prefix = no URL impact
│   └── work-in-progress.md
└── standalone-post.md
```

### URL Generation
- `src/data/blog/post-name.md` → `/posts/post-name`
- `src/data/blog/2024/post.md` → `/posts/2024/post`
- `src/data/blog/_drafts/post.md` → `/posts/post` (underscore ignored)

## Image Handling

### Option 1: Assets Directory (Recommended)
Store images in `src/assets/images/` for automatic optimization:

```markdown
![Alt text](@/assets/images/your-image.jpg)
```

### Option 2: Public Directory
Store images in `public/assets/images/` for direct access:

```markdown
![Alt text](/assets/images/your-image.jpg)
```

## SEO Best Practices

1. **Compelling Titles**: Make them specific and benefit-focused
2. **Meta Descriptions**: Write clear, actionable descriptions (150-160 characters)
3. **Headers**: Use descriptive H2 and H3 tags
4. **Internal Links**: Link to related posts when relevant
5. **External Links**: Link to authoritative sources
6. **Images**: Always include alt text for accessibility and SEO

## Publishing Workflow

1. **Create Draft**: Set `draft: true` while writing
2. **Review Content**: Check for typos, clarity, and structure
3. **Optimize Images**: Compress images for better performance
4. **Set Publication Date**: Use `pubDatetime` for scheduling
5. **Publish**: Change `draft: false` and deploy

## Content Ideas for Your Blog

Based on your background as a CPO & Co-founder at North AI:

### Product Management
- Building product roadmaps
- User research methodologies
- Product-market fit strategies
- Cross-functional team collaboration

### Leadership & Strategy
- Scaling product teams
- Decision-making frameworks
- Stakeholder management
- Vision and mission alignment

### Technical Insights
- AI product development
- Data-driven decision making
- Technical debt management
- Innovation processes

### Case Studies
- Real product challenges and solutions
- Before/after transformations
- Lessons learned from failures
- Success story breakdowns

## Tools and Resources

### Writing Tools
- [Grammarly](https://grammarly.com/) - Grammar and style checking
- [Hemingway Editor](https://hemingwayapp.com/) - Readability improvement
- [Canva](https://canva.com/) - Image creation and editing

### SEO Tools
- [Yoast SEO](https://yoast.com/) - Content optimization
- [Google PageSpeed Insights](https://pagespeed.web.dev/) - Performance checking
- [Screaming Frog](https://www.screamingfrog.co.uk/seo-spider/) - Technical SEO

## Getting Help

If you need assistance with:
- Technical implementation
- Content strategy
- SEO optimization
- Design and layout

Refer to the existing documentation in your blog or reach out for support.

---

*Happy blogging! Remember, the best blog posts come from authentic experiences and genuine insights.*
```

Perfect! I've created both files for you:

## 📝 What I've Created

### 1. **Blog Post Template** (`src/data/blog/template-blog-post.md`)
A comprehensive template that includes:
- Complete frontmatter with all available fields
- Structured content sections with examples
- Best practices for formatting
- Code blocks, tables, and visual elements
- SEO-optimized structure

### 2. **Blog Post Guide** (`BLOG_POST_GUIDE.md`)
A detailed explanation document that covers:
- **Frontmatter breakdown** - Every field explained with examples
- **Content structure best practices** - How to organize your posts effectively
- **File organization** - How to structure your blog directories
- **SEO guidelines** - Optimize for search engines and social sharing
- **Publishing workflow** - Step-by-step process from draft to published
- **Content ideas** - Specific suggestions for your product management focus
- **Tools and resources** - Helpful tools for writing and optimization

## 🚀 How to Use

1. **For new posts**: Copy `template-blog-post.md` and rename it to your post title
2. **Update the frontmatter**: Fill in the relevant fields (title, description, tags, etc.)
3. **Write your content**: Follow the structure and best practices in the guide
4. **Set draft to false**: When ready to publish

## 🎯 Key Features of the Template

- **SEO-optimized**: Proper meta descriptions, structured headings, and image handling
- **Accessible**: Alt text for images, proper heading hierarchy
- **Engaging**: Hook introduction, clear structure, actionable conclusion
- **Professional**: Consistent formatting and visual elements
- **Flexible**: Works for different types of content (tutorials, case studies, insights)

The template is specifically tailored for your background as a CPO & Co-founder, with categories and content suggestions that align with product management, leadership, and technical insights.