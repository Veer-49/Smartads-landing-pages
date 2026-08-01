# SmartAds Landing Pages Hub

This is a navigation hub for 7 different advertising landing page projects.

## Projects

1. **Cinema Spotlight** - Theater advertising solutions (Port 3001)
2. **Magazine Mastery** - Print and digital magazine advertising (Port 3002)
3. **Newsy Lead Forge** - News and media advertising (Port 3003)
4. **OTT Ad Hub** - Over-the-top streaming platform advertising (Port 3004)
5. **Radio Connect Hub** - Radio broadcasting advertising (Port 3005)
6. **Sky High Ads** - Elevated advertising solutions (Port 3006)
7. **Sky High Reach** - Extended reach advertising (Port 3007)

## Quick Start

### Option 1: Start All Projects at Once

Run the batch script to start all 7 projects simultaneously:

```bash
start-all.bat
```

This will open 7 separate terminal windows, each running one of the projects on its designated port.

### Option 2: Start Projects Individually

Navigate to each project folder and run:

```bash
cd cinema-spotlight-main
npm run dev
```

Repeat for each project with their respective folders.

## Access the Navigation Hub

Once the projects are running, open `index.html` in your browser. This will show you a beautiful navigation page with cards for each project. Click on any card to open that landing page.

## Port Configuration

Each project is configured to run on a different port to avoid conflicts:

- Cinema Spotlight: `http://localhost:3001`
- Magazine Mastery: `http://localhost:3002`
- Newsy Lead Forge: `http://localhost:3003`
- OTT Ad Hub: `http://localhost:3004`
- Radio Connect Hub: `http://localhost:3005`
- Sky High Ads: `http://localhost:3006`
- Sky High Reach: `http://localhost:3007`

## Deployment

### Deploy to Vercel

**Quick Deployment:**
```bash
npm install -g vercel
vercel
```

**Individual Project Deployment:**
```bash
cd cinema-spotlight-main
vercel
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

### Build for Production

**Build All Projects:**
```bash
build-all.bat
```

**Build Individual Project:**
```bash
cd cinema-spotlight-main
npm run build
```

## Technologies Used

- **React 19** - UI library
- **TanStack Start** - Full-stack React framework
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server
- **Vercel** - Deployment platform

## Notes

- Make sure you have Node.js installed on your system
- Run `npm install` in each project folder if you haven't already
- The navigation hub (`index.html`) is a static HTML file that can be opened directly in a browser
- Each project will open in a new browser tab when clicked from the navigation hub
- All projects are configured for Vercel deployment with proper build settings