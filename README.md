# Rahul Roy Profile

A modern personal portfolio website built with Next.js, Tailwind CSS, and React. The app presents a professional profile, project highlights, contact form, and includes authentication/email integration scaffolding for future secure admin flows.
It has showcased AI chatbot, An ask about me bot, and video conference app.

## Overview

This project serves as a personal portfolio and online presence for Rahul Roy. It includes:

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
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   ├── lib/
│   └── ui/
├── auth.ts
├── auth.config.ts
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── pnpm-lock.yaml
├── public/
├── shadcn-components/
├── hooks/
├── lib/
└── README.md
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
cd rahul-roy-profile
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

If you want, I can also tailor this README for a more polished personal brand version with sections like Technologies, Experience, Featured Work, and Contact. 
