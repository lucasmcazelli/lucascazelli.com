# Deployment Guide

## Vercel Deployment (Recommended)

This project is optimized for Vercel deployment with the `@astrojs/vercel` adapter.

### Quick Setup

1. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Astro and configure the build

2. **Environment Variables:**
   - Add `PUBLIC_GOOGLE_SITE_VERIFICATION` if you have one
   - No other environment variables needed for basic deployment

3. **Deploy:**
   - Push to `main` branch
   - Vercel automatically builds and deploys
   - Your site will be available at `https://lucascazelli.com`

### Features Enabled

- ✅ **Vercel Web Analytics**: Automatic performance monitoring
- ✅ **Image Optimization**: Automatic image optimization
- ✅ **CDN Caching**: Global CDN for fast loading
- ✅ **Speed Insights**: Performance metrics dashboard
- ✅ **Automatic HTTPS**: SSL certificates
- ✅ **Custom Domain**: lucascazelli.com

### Build Process

The build process is handled automatically by Vercel:

1. Install dependencies with `pnpm install`
2. Run `pnpm run build`
3. Deploy the `dist` folder
4. Generate OG images automatically

### Manual Deployment

If you need to deploy manually:

```bash
# Build the project
pnpm run build

# Deploy to Vercel (requires Vercel CLI)
vercel --prod
```

### Performance Features

- **Static Generation**: All pages are pre-rendered for maximum speed
- **Image Optimization**: Automatic WebP conversion and resizing
- **Edge Caching**: Global CDN with smart caching
- **Compression**: Automatic gzip/brotli compression

### Monitoring

- **Vercel Dashboard**: View deployments and performance
- **Speed Insights**: Core Web Vitals monitoring
- **Web Analytics**: Traffic and performance data
- **Function Logs**: Server-side debugging

## GitHub Actions (Deprecated)

The GitHub Actions workflow has been removed in favor of Vercel's native Git integration, which is more reliable and feature-rich.
