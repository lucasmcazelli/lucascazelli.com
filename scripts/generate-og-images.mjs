import { getCollection } from "astro:content";
import { writeFile, mkdir } from "fs/promises";
import { join } from "path";
import { generateOgImageForPost, generateOgImageForSite } from "../src/utils/generateOgImages.js";

async function generateOgImages() {
  console.log("🖼️ Starting OG image generation...");

  try {
    // Generate site OG image
    console.log("📄 Generating site OG image...");
    const siteOgBuffer = await generateOgImageForSite();
    const siteOgPath = join(process.cwd(), "public", "og.png");
    await writeFile(siteOgPath, siteOgBuffer);
    console.log("✅ Site OG image generated: public/og.png");

    // Get all blog posts
    const posts = await getCollection("blog", ({ data }) => !data.draft);
    console.log(`📝 Found ${posts.length} blog posts to process...`);

    // Generate OG images for each post
    for (const post of posts) {
      try {
        console.log(`🖼️ Generating OG image for: ${post.data.title}`);
        
        // Create directory if it doesn't exist
        const postPath = join(process.cwd(), "public", "posts", post.slug);
        await mkdir(postPath, { recursive: true });
        
        // Generate and save OG image
        const ogBuffer = await generateOgImageForPost(post);
        const ogPath = join(postPath, "og.png");
        await writeFile(ogPath, ogBuffer);
        
        console.log(`✅ Generated: public/posts/${post.slug}/og.png`);
      } catch (error) {
        console.error(`❌ Failed to generate OG image for ${post.data.title}:`, error.message);
      }
    }

    console.log("🎉 OG image generation completed!");
    console.log(`📊 Generated ${posts.length + 1} OG images total`);

  } catch (error) {
    console.error("❌ OG image generation failed:", error);
    process.exit(1);
  }
}

// Run the script
generateOgImages();
