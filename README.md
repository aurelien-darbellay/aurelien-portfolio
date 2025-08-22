# Aurélien Darbellay — Portfolio (React + Vite)

A sleek, responsive personal site built with React + Vite. Includes an intro section and a portfolio grid of clickable project cards.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Where to edit content

- **Intro text**: `src/components/Hero.jsx`
- **Projects**: `src/data/projects.js`
  - `deployUrl`: clicking a card opens this link in a new tab. Use a full URL (starting with `http`).
  - `githubUrl`: link shown on the card.
  - `image`: update to your own screenshot/images (place in `src/assets/`).

## Tech stack

- Vite, React 18
- Accessible, keyboard-friendly cards
- Responsive CSS grid, no external CSS frameworks

## Deploy

- Any static host (Netlify, Vercel, GitHub Pages)
- Ensure the site is built (`npm run build`) before deploying
