# Portfolio Webapp

A modern personal portfolio website built with Next.js, Tailwind CSS, and React. The app presents a professional profile, project highlights, contact form, and includes authentication/email integration scaffolding for future secure admin flows.
It has showcased AI chatbot, An ask about me bot, and video conference app.

## Overview

This project serves as a personal portfolio and online presence for Software Engineer. It includes:

- A hero section and personal introduction
- About me content
- Project showcase sections
- Contact form with email sending support
- AI chatbot
- An ask about me AI bot
- video conference app

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Groq API
- LiveKit
- Tailwind CSS
- shadcn/ui-inspired component patterns
- NextAuth v5 beta
- Resend for email delivery
- zod for schema validation
- bcryptjs for password hashing

## Project Structure
```bash
.
├── app/                          # Next.js app directory containing pages and global styles
│   ├── api/                      # API route handlers
│   │   ├── ai-chat/              # AI chatbot API endpoint
│   │   ├── ask-ai-about-me/      # AI 'ask about me' bot API endpoint
│   │   ├── connection-details/   # Connection details API
│   │   └── record/               # Recording start/stop API
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout component
│   ├── page.tsx                  # Home page component
│   └── lib/                     # App-specific libraries and utilities
├── components.json               # JSON configuration for components (if used)
├── eslint.config.mjs             # ESLint configuration
├── next.config.ts                # Next.js configuration
├── next-env.d.ts                 # Next.js TypeScript env types
├── package.json                  # Project dependencies and scripts
├── pnpm-lock.yaml               # Package lock for pnpm
├── pnpm-workspace.yaml          # pnpm workspace configuration
├── postcss.config.mjs            # PostCSS configuration
├── public/                      # Static public assets like images
│   └── background-images/       # Background images used in the app
├── projects/                    # Individual project modules/sections
├── shadcn-components/           # UI components inspired by shadcn/ui
├── styles/                      # CSS modules and global styles
├── hooks/                       # Custom React hooks
├── lib/                        # General libraries and utility functions
├── ui/                         # UI components and shared UI helper files
└── README.md                    # Project README
```
```

## Features

- Responsive landing page for portfolio presentation
- Reusable UI sections for about, projects, and contact
- Email contact workflow powered by Resend
- AI based general chat bot
- AI based ask about me specific chat bot
- Video conference app
- Clean components architecture for easy extension

## Prerequisites

Before running the project, make sure you have:

- Node.js 20+
- pnpm
- A Resend API key for email sending
- A Groq API key for AI bots
- A LiveKit API key for video conference app

## Getting Started

1. Clone the repository:

```bash
git clone <your-repository-url>
cd portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Create a local environment file:

```bash
cp .env.example .env.local
```

If there is no .env.example file in the repo, create `.env.local` manually and add the required variables.

4. Start the development server:

```bash
pnpm dev
```

5. Open the app in your browser:

```bash
http://localhost:3000
```

## Environment Variables

This project expects the following environment variables in `.env.local`:

```bash
RESEND_API_KEY=your_resend_api_key
GROQ_API_KEY=your_groq_api_key
LIVEKIT_API_KEY=your_livekit_api_key
LIVEKIT_API_SECRET=your_livekit_secret
LIVEKIT_URL=your_livekit_url
```

## Available Scripts

```bash
pnpm dev      # Start the local development server
pnpm build    # Create a production build
pnpm start    # Run the production build
pnpm lint     # Run ESLint checks
```

## Contact Form

The contact form in the portfolio sends submissions via Resend. The implementation is in:

- `app/lib/actions.ts`
- `app/ui/Contacts/contact-form.tsx`

It validates input with zod and sends an email to the configured recipient.

## Deployment

This app is well-suited for deployment on Vercel.

Typical deployment steps:

1. Push the repository to GitHub.
2. Import the project in Vercel.
3. Add the required environment variables in the Vercel dashboard.
4. Deploy the app.

## License

This project is currently under MIT License.

## Notes

This README reflects the current implementation of the project. As the app evolves, you may want to add:

- The main landing page
- project detail pages
- Contact form
- AI chatbot setup
- Ask About Me chatbot setup
- Video Conference app setup
- deployment and CI/CD documentation

