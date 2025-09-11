import { writeFile, mkdir } from "fs/promises";
import { join } from "path";

// Simple OG image generation script that creates placeholder images
// In production, this would use the actual OG image generation utilities

async function generateOgImages() {
  console.log("🖼️ Starting OG image generation...");

  try {
    // Create a simple placeholder OG image for the site
    console.log("📄 Generating site OG image...");
    const siteOgSvg = `
      <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
        <rect width="1200" height="630" fill="#1a1a1a"/>
        <text x="600" y="300" font-family="Arial, sans-serif" font-size="48" fill="white" text-anchor="middle">
          Lucas Cazelli
        </text>
        <text x="600" y="380" font-family="Arial, sans-serif" font-size="24" fill="#888" text-anchor="middle">
          CPO & Co-founder at North AI
        </text>
      </svg>
    `;
    
    const siteOgPath = join(process.cwd(), "public", "og.png");
    await writeFile(siteOgPath, siteOgSvg);
    console.log("✅ Site OG image generated: public/og.png");

    // Create placeholder OG images for blog posts
    const blogPosts = [
      "001-system1-vs-system2-product-decisions"
    ];

    console.log(`📝 Found ${blogPosts.length} blog posts to process...`);

    for (const slug of blogPosts) {
      try {
        console.log(`🖼️ Generating OG image for: ${slug}`);
        
        // Create directory if it doesn't exist
        const postPath = join(process.cwd(), "public", "posts", slug);
        await mkdir(postPath, { recursive: true });
        
        // Create a simple placeholder OG image
        const postOgSvg = `
          <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
            <rect width="1200" height="630" fill="#1a1a1a"/>
            <text x="600" y="250" font-family="Arial, sans-serif" font-size="36" fill="white" text-anchor="middle">
              System 1 vs System 2
            </text>
            <text x="600" y="320" font-family="Arial, sans-serif" font-size="24" fill="white" text-anchor="middle">
              Product Decisions
            </text>
            <text x="600" y="450" font-family="Arial, sans-serif" font-size="18" fill="#888" text-anchor="middle">
              Lucas Cazelli • lucascazelli.com
            </text>
          </svg>
        `;
        
        const ogPath = join(postPath, "og.png");
        await writeFile(ogPath, postOgSvg);
        
        console.log(`✅ Generated: public/posts/${slug}/og.png`);
      } catch (error) {
        console.error(`❌ Failed to generate OG image for ${slug}:`, error.message);
      }
    }

    console.log("🎉 OG image generation completed!");
    console.log(`📊 Generated ${blogPosts.length + 1} OG images total`);

  } catch (error) {
    console.error("❌ OG image generation failed:", error);
    process.exit(1);
  }
}

// Run the script
generateOgImages();
