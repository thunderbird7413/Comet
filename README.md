# COMET'26 Landing Page

A modern, futuristic landing page for COMET'26 - IIT Roorkee's celebration of Innovation.

## Features

- 🎨 Modern dark theme with gradient backgrounds
- 🎭 Responsive design with mobile hamburger menu
- 🎪 3D rotating shapes using React Three Fiber
  - Hero section: Rotating ribbon sphere in emerald green
  - About section: Rotating crystal shapes in electric blue
- ⚡ Next.js 16 with App Router
- 🎯 TypeScript for type safety

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Font Setup

The site is configured to use the **Acquire** font. To enable it:

1. Download the font from [FontSpace](https://www.fontspace.com/aquire-font-f43735)
2. Place the font files in `src/app/fonts/`:
   - `Aquire-Regular.otf`
   - `Aquire-Bold.otf` (optional)
3. Open `src/app/globals.css` and uncomment lines 16-34 (the @font-face blocks)
4. Rebuild the site

Without the font files, the site will use system fallback fonts.

## Project Structure

```
src/
├── app/
│   ├── fonts/          # Place Acquire font files here
│   ├── globals.css     # Global styles and font setup
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── components/
│   ├── Hero.tsx        # Hero section with title
│   ├── Scene.tsx       # 3D ribbon sphere component
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── About.tsx       # About section
│   └── AboutShapes.tsx # 3D crystal shapes component
└── utils/
    └── webgl.ts        # WebGL detection utility
```

## Technologies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **React Three Fiber** - 3D rendering
- **Three.js** - 3D graphics
- **@react-three/drei** - Helper components for R3F

## License

This project is part of COMET'26 event by CDC, IIT Roorkee.
