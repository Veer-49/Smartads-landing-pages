# SmartAds Landing Pages Hub

This is a navigation hub for 7 different advertising landing page projects, configured for single-domain deployment with subdirectories.

## Projects

1. **Cinema Spotlight** - Theater advertising solutions (`/cinema-spotlight`)
2. **Magazine Mastery** - Print and digital magazine advertising (`/magazine-mastery`)
3. **Newsy Lead Forge** - News and media advertising (`/newsy-lead-forge`)
4. **OTT Ad Hub** - Over-the-top streaming platform advertising (`/ott-ad-hub`)
5. **Radio Connect Hub** - Radio broadcasting advertising (`/radio-connect-hub`)
6. **Sky High Ads** - Elevated advertising solutions (`/sky-high-ads`)
7. **Sky High Reach** - Extended reach advertising (`/sky-high-reach`)

## Quick Start

### Local Development

**Start All Projects at Once:**
```bash
start-all.bat
```

**Start Projects Individually:**
```bash
cd cinema-spotlight-main
npm run dev
```

**Access Navigation Hub:**
- Local: Open `index-local.html` in your browser
- Production: Deployed at your domain root

## Production Deployment

### Single Domain Deployment (Current Setup)

**Build All Projects:**
```bash
node build-all.js
```

**Deploy to Vercel:**
```bash
vercel --prod
```

This will create:
- `yourdomain.com/` - Navigation hub
- `yourdomain.com/cinema-spotlight` - Cinema landing page
- `yourdomain.com/magazine-mastery` - Magazine landing page
- etc.

## Folder Structure

**Source Projects:**
- `cinema-spotlight-main/` - Source code
- `magazine-mastery-main/` - Source code
- etc.

**Built Subdirectories (created by build-all.js):**
- `cinema-spotlight/` - Built files for deployment
- `magazine-mastery/` - Built files for deployment
- etc.

## Technologies Used

- **React 19** - UI library
- **TanStack Start** - Full-stack React framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Vercel** - Deployment platform

## Notes

- All projects are deployed on a single domain with subdirectories
- Use `index-local.html` for local development
- Use `index.html` for production
- The build script automatically creates the proper folder structure