# Mushroom Garden

## Overview
An interactive Next.js web application featuring an animated mushroom garden. Users can explore a scrollable forest canvas with various mushroom species, click on mushrooms to learn fun facts, and restart the sprouting animation.

## Recent Changes
- **2026-01-22**: Migrated from Vercel to Replit
  - Updated dev and start scripts to use port 5000 with host 0.0.0.0
  - Configured deployment settings for Replit environment
  - Installed dependencies using pnpm

## Tech Stack
- **Framework**: Next.js 16.0.10 with Turbopack
- **Runtime**: React 19.2.0
- **Styling**: Tailwind CSS 4.x with tailwind-merge
- **UI Components**: Radix UI primitives, shadcn/ui
- **Package Manager**: pnpm
- **Language**: TypeScript

## Project Structure
```
/
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main Mushroom Garden page
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── mushroom.tsx     # Mushroom component
│   ├── forest-background.tsx
│   └── info-modal.tsx
├── lib/                 # Utility functions
├── public/              # Static assets
├── styles/              # Additional stylesheets
├── next.config.mjs      # Next.js configuration
├── package.json         # Dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## Development Commands
- `pnpm run dev` - Start development server on port 5000
- `pnpm run build` - Build for production
- `pnpm run start` - Start production server on port 5000
- `pnpm run lint` - Run ESLint

## Notes
- The app uses Vercel Analytics package but it's in debug mode during development
- TypeScript version 5.0.2 is slightly older than recommended (5.1.0+) but works fine
