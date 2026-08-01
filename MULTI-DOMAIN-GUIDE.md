# Multi-Domain Static Deployment Guide

## Overview

Your SmartAds landing pages are now configured to work across multiple domains, both locally and in production.

## Files Overview

- **`index.html`** - Production navigation hub (uses Vercel URLs)
- **`index-local.html`** - Local development hub (uses localhost URLs)
- **`vercel.json`** - Vercel configuration for each project

## Deployment Options

### Option 1: Single Domain (All projects on one domain)

**Best for:** Simple setup, single brand

**Setup:**
1. Deploy all projects to the same Vercel account
2. Use subdirectories or paths:
   - `yourdomain.com/cinema`
   - `yourdomain.com/magazine`
   - `yourdomain.com/news`
   - etc.

**Configuration:**
Update `vercel.json` for each project:
```json
{
  "rewrites": [
    {
      "source": "/cinema",
      "destination": "/index.html"
    }
  ]
}
```

### Option 2: Multiple Subdomains (Current Setup)

**Best for:** Separate branding, different audiences

**Current Configuration:**
- `cinema-spotlight.vercel.app`
- `magazine-mastery.vercel.app`
- `newsy-lead-forge.vercel.app`
- `ott-ad-hub.vercel.app`
- `radio-connect-hub.vercel.app`
- `sky-high-ads.vercel.app`
- `sky-high-reach.vercel.app`

**Setup:**
1. Deploy each project separately to Vercel
2. Each gets its own subdomain
3. Navigation hub links to each subdomain

### Option 3: Custom Domains

**Best for:** Professional branding, SEO

**Setup:**
1. Deploy each project to Vercel
2. Add custom domains in Vercel dashboard:
   - `cinema.yourdomain.com`
   - `magazine.yourdomain.com`
   - `news.yourdomain.com`
   - etc.

**Configuration:**
Update `index.html` links:
```html
<a href="https://cinema.yourdomain.com" target="_blank">
```

## How to Deploy to Multiple Domains

### Step 1: Deploy Each Project

```bash
# Cinema Spotlight
cd cinema-spotlight-main
vercel --prod

# Magazine Mastery
cd ../magazine-mastery-main
vercel --prod

# Repeat for all projects...
```

### Step 2: Note the Production URLs

Vercel will provide URLs like:
- `https://cinema-spotlight-abc123.vercel.app`
- `https://magazine-mastery-def456.vercel.app`
- etc.

### Step 3: Update Navigation Hub

Edit `index.html` and replace the placeholder URLs with your actual production URLs:

```html
<!-- Replace with your actual URLs -->
<a href="https://your-cinema-url.vercel.app" target="_blank">
<a href="https://your-magazine-url.vercel.app" target="_blank">
```

### Step 4: Deploy Navigation Hub

```bash
cd ..
vercel --prod
```

## Custom Domain Setup

### Step 1: Add Custom Domains in Vercel

1. Go to Vercel dashboard
2. Select each project
3. Go to Settings → Domains
4. Add your custom domain (e.g., `cinema.yourdomain.com`)

### Step 2: Configure DNS

Add DNS records for each custom domain:

```
CNAME cinema -> cname.vercel-dns.com
CNAME magazine -> cname.vercel-dns.com
CNAME news -> cname.vercel-dns.com
```

### Step 3: Update Navigation Hub

```html
<a href="https://cinema.yourdomain.com" target="_blank">
<a href="https://magazine.yourdomain.com" target="_blank">
```

## Static Hosting on Other Platforms

### Netlify

1. Connect each project to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.output`
4. Add custom domains as needed

### GitHub Pages

1. Push each project to separate GitHub repositories
2. Enable GitHub Pages
3. Use URLs like:
   - `yourusername.github.io/cinema-spotlight`
   - `yourusername.github.io/magazine-mastery`

### AWS S3 + CloudFront

1. Build each project: `npm run build`
2. Upload `.output/public` to S3 buckets
3. Set up CloudFront distributions
4. Configure custom domains

## Environment-Specific Navigation

### Local Development
Use `index-local.html` for localhost testing.

### Production
Use `index.html` for production URLs.

### Automatic Switching (Optional)

Create a smart navigation hub that detects environment:

```javascript
const isLocal = window.location.hostname === 'localhost' || 
                window.location.hostname === '127.0.0.1';

const links = {
  cinema: isLocal ? 'http://localhost:3001' : 'https://cinema.yourdomain.com',
  magazine: isLocal ? 'http://localhost:3002' : 'https://magazine.yourdomain.com',
  // etc.
};
```

## Benefits of Multi-Domain Setup

✅ **Independent Deployment:** Update each landing page independently
✅ **Separate Analytics:** Track performance per advertising channel
✅ **Different Audiences:** Target different demographics per domain
✅ **A/B Testing:** Test different designs on different domains
✅ **SEO Benefits:** Separate domains for different keywords
✅ **Scalability:** Add/remove landing pages without affecting others

## Current Status

✅ All projects configured for Vercel deployment
✅ Navigation hub ready for multi-domain linking
✅ Local development environment set up
✅ Custom domain ready (just add DNS records)

## Next Steps

1. Deploy all projects to Vercel
2. Note the production URLs
3. Update `index.html` with actual URLs
4. Deploy navigation hub
5. (Optional) Add custom domains
6. Test all links in production