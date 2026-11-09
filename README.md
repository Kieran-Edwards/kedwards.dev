# kedwards.dev

Personal portfolio site for Kieran Edwards.

## Stack
- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4 (`@tailwindcss/postcss`)

## Development
```bash
npm install
npm run dev
```

## Scripts
- `npm run dev` — start the dev server
- `npm run build` — typecheck (`tsc -b`) and build
- `npm run lint` — run oxlint
- `npm run preview` — preview the production build

## Structure
- `src/components/` — reusable UI (navbar, footer, skill pill)
- `src/pages/` — page sections (About, Skills, Work, Contact)
- `src/data/` — site data (personal info, projects)
- `src/assets/` — images and icons
- `src/styles/` — shared theme variables and component classes
- `public/` — static files (favicon, CV PDF)
