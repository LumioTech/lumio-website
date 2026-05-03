# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Lumio is an AI company marketing website built with Next.js 15, React 19, TypeScript, and Tailwind CSS 4. The site showcases AI-powered business solutions with pages for home, about, services, and contact, plus an interactive chatbot widget.

## Development Commands

```bash
npm run dev     # Start dev server with Turbopack on localhost:3000
npm run build   # Production build with Turbopack
npm start       # Start production server
npm run lint    # Run ESLint
```

After making changes, always run `npm run build` to verify the production build, as Turbopack may behave differently between dev and build modes.

## Architecture

This project uses Next.js 15's App Router. All routes live in `app/`, shared UI in `components/`.

### Client vs Server Components
Default to Server Components. Use `'use client'` only when needed (state, browser APIs, event handlers). Current client components: `ChatbotWidget.tsx`, `app/contact/page.tsx`.

### Contact Form & Email
The contact form POSTs to `app/api/contact/route.ts`, which sends email via the [Resend](https://resend.com) SDK. Requires `RESEND_API_KEY` in `.env.local`. The recipient address is hardcoded in the route (`season0112@gmail.com`).

**Security note**: The email HTML template in `route.ts` interpolates `name`, `email`, and `message` directly without sanitization — this is an HTML injection risk if the email client renders HTML. Sanitize these values before interpolation.

### Chatbot Widget
`components/ChatbotWidget.tsx` is a UI-only demo — `handleSend` uses a `setTimeout` to simulate a bot reply. To wire up a real backend, replace the `setTimeout` block with an API call and add proper conversation state and error handling.

### Deployment
Live at **https://lumio.technology/**. Configured for Vercel. `vercel.json` is present; framework is auto-detected as Next.js.

### GitHub Actions
`claude-code-pr-review.yml` runs automated PR reviews using Claude Code (sticky comments, dependabot support).

## Gotchas

- **Turbopack**: Both `dev` and `build` use `--turbopack`. To isolate Turbopack-specific issues, remove the flag temporarily.
- **Fonts**: Geist fonts are loaded once in `app/layout.tsx` via `next/font/google`. Do not load fonts in individual pages.
- **Env vars**: Only `NEXT_PUBLIC_`-prefixed variables are exposed to the browser. Keep API keys (e.g. `RESEND_API_KEY`) without that prefix.
