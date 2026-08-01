# Deployment Guide

## Option 1: Deploy Navigation Hub to Vercel (Recommended)

The navigation hub (`index.html`) is a static HTML file that can be deployed to Vercel.

### Steps:

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy from the root directory:**
   ```bash
   cd "E:\Git hub\Smartads landing pages"
   vercel
   ```

3. **Follow the prompts:**
   - Set project name (e.g., `smartads-landing-pages`)
   - Select default settings
   - Deploy!

The navigation hub will be live and accessible via a Vercel URL.

## Option 2: Deploy Individual Landing Pages to Vercel

Each of the 7 landing page projects can be deployed separately to Vercel.

### Steps for each project:

1. **Navigate to project folder:**
   ```bash
   cd cinema-spotlight-main
   ```

2. **Deploy to Vercel:**
   ```bash
   vercel
   ```

3. **Repeat for each project:**
   - magazine-mastery-main
   - newsy-lead-forge-main
   - ott-ad-hub-main
   - radio-connect-hub-main
   - sky-high-ads-main
   - sky-high-reach-main

### Update Navigation Hub Links:

After deploying each project, update the links in `index.html` to use the Vercel URLs instead of localhost:

```html
<!-- Change from -->
<a href="http://localhost:3001" target="_blank">

<!-- To -->
<a href="https://your-project-name.vercel.app" target="_blank">
```

## Option 3: Local Static Build

To build projects for local static deployment:

### Build Individual Projects:

```bash
cd cinema-spotlight-main
npm run build
npm run preview
```

The built files will be in the `.output/public` directory.

### Build All Projects:

Use the provided batch script:
```bash
build-all.bat
```

## Option 4: GitHub + Vercel Auto-Deployment

### Steps:

1. **Initialize Git repository:**
   ```bash
   cd "E:\Git hub\Smartads landing pages"
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. **Create GitHub repository** and push code.

3. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect the configuration
   - Deploy!

## Troubleshooting

### Build Failures:
If build fails with "Rolldown" errors, the TanStack Start framework may need additional configuration. In this case, consider using the development mode with Vercel:

```bash
vercel --prod
```

### Port Conflicts:
The projects are configured to use ports 3001-3007. Ensure these ports are available when running locally.

### Missing Dependencies:
If you encounter dependency issues:
```bash
cd [project-folder]
npm install
```

## Current Status

✅ Navigation hub ready for Vercel deployment  
✅ All projects configured with Vercel settings  
✅ Port configurations set (3001-3007)  
✅ Build scripts updated  

## Next Steps

1. Deploy the navigation hub to Vercel
2. Deploy individual landing pages
3. Update navigation hub links with live URLs
4. Test all links in production