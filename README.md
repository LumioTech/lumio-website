# Lumio Website

Official Company Website of Lumio, provide AI services for business. 

## Features

- 🏠 **Home Page**: Hero section with call-to-action and feature highlights
- 💬 **Interactive Chatbot Widget**: Frontend chatbot UI for customer engagement (currently UI-only demo)
- ℹ️ **About Page**: Company information and mission statement
- 🛠️ **Services Page**: Detailed service offerings including AI Customer Support Bot, AI Document Analyzer, and AI Sales Assistant
- 📧 **Contact Page**: Contact form with client-side validation and state management
- 📱 **Responsive Design**: Mobile-first layout using Tailwind CSS responsive prefixes (sm:, md:, lg:)
- 🎨 **Modern UI**: Clean, professional design with Geist fonts and smooth transitions

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd lumio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

The application will automatically reload when you make changes to the code.

### Testing Locally
After making changes, always run `npm run build` to ensure the production build works correctly, as Turbopack may behave differently than the production build.

## Available Scripts

- `npm run dev` - Start dev server with Turbopack on localhost:3000
- `npm run build` - Production build with Turbopack
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
lumio/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── contact/
│   │   └── page.tsx          # Contact page with form
│   ├── services/
│   │   └── page.tsx          # Services page
│   ├── layout.tsx            # Root layout with navbar and footer
│   ├── page.tsx              # Home page with hero section
│   └── globals.css           # Global styles
├── components/
│   ├── Navbar.tsx            # Navigation bar component
│   ├── Footer.tsx            # Footer component
│   └── ChatbotWidget.tsx     # Chatbot widget component
├── public/                   # Static assets
├── tailwind.config.ts        # Tailwind CSS configuration
└── CLAUDE.md                 # Development guide for Claude Code
```

## Common Gotchas

1. **Turbopack**: Both dev and build use `--turbopack` flag. If you encounter build issues, try removing the flag temporarily to isolate Turbopack-specific problems.

2. **Client Component State**: When adding interactivity requiring useState or useEffect, remember to add 'use client' at the top of the file.

3. **Image Imports**: Static assets go in `public/` and are referenced with absolute paths starting with `/` (e.g., `/logo.png`).

## Deployment

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

- Build command: `npm run build`
- Framework: Auto-detected as Next.js
- Output directory: `.next`

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Documentation

For detailed development guidance when working with Claude Code, see [CLAUDE.md](./CLAUDE.md).
