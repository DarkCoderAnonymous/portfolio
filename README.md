# Muhammad Afzaal — Portfolio

Personal portfolio of Muhammad Afzaal, MERN Stack Developer (React, Next.js, Node.js) based in Lahore, Pakistan.

Built with Next.js 16 (App Router), React 19, TypeScript, Framer Motion and React Three Fiber.

## Editing content

All profile content lives in one file: `src/data/profile.ts`.

- `profile` — name, headline, summary, location, email, LinkedIn, stats
- `experience` — work history shown in the Experience timeline
- `projects` — project cards (title, description, screenshot, tags, link)
- `skillGroups` — skills grid, grouped by category
- `navSections` — order of sections in the navigation

Project screenshots go in `public/images/`.

## Running locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production

```bash
npm run build
npm start
```

Set `NEXT_PUBLIC_SITE_URL` (e.g. `https://your-domain.com`) in your hosting environment so Open Graph
URLs and structured data point at the live site.

The contact form sends email through EmailJS; the service, template and public key are configured in
`src/app/contact/ContactUs.js`.
