# Copilot instructions

## Project overview
- Vite + React 19 single-page app with React Router (no backend or database).
- App entry mounts `App` inside `BrowserRouter` in [src/main.jsx](src/main.jsx).
- Routes and default redirect are centralized in [src/App.jsx](src/App.jsx); `Nav` renders globally above `<main>`.

## Structure and patterns
- Page-level screens live under [src/pages](src/pages); add new views there and wire them into [src/App.jsx](src/App.jsx) and the nav.
- Content-heavy pages often pull arrays from local data modules (e.g., [src/pages/Conceptualizacion/bucleData.js](src/pages/Conceptualizacion/bucleData.js), [src/pages/Conceptualizacion/exampleData.js](src/pages/Conceptualizacion/exampleData.js)) and map to reusable components.
- Reusable UI components live in [src/components](src/components) (e.g., cards, navigation, footer). Keep them stateless where possible.
- Global styling is plain CSS in [src/styles](src/styles). Shared utility classes are defined in [src/styles/common.css](src/styles/common.css) and imported by pages.
- Animations and transitions use `framer-motion` (see [src/pages/Conceptualizacion/QueEsUnBucle.jsx](src/pages/Conceptualizacion/QueEsUnBucle.jsx)); match existing motion patterns when adding animated content.
- Modal UI uses `reactjs-popup` in [src/components/SettingsModal.jsx](src/components/SettingsModal.jsx), opened from the nav settings dropdown.
- Code/pseudocode blocks use `react-syntax-highlighter` with the Prism `oneDark` theme in [src/components/CardExample.jsx](src/components/CardExample.jsx) and [src/components/CardExaPseudo.jsx](src/components/CardExaPseudo.jsx).

## Assets
- Images live in [src/assets/img](src/assets/img); fonts in [src/assets/font](src/assets/font).
- Static media can be placed in [public/MULTIMEDIA](public/MULTIMEDIA).

## Tooling and workflows
- Dev server: `npm run dev` (Vite). Build: `npm run build`. Preview: `npm run preview`. Lint: `npm run lint`.
- Vite is configured with the React Compiler Babel plugin in [vite.config.js](vite.config.js).

## Conventions to follow
- Prefer data-driven rendering (arrays → `.map`) for repeated UI (cards, exercises, examples).
- Keep navigation links and dropdown states centralized in `Nav`/`ButtonNav` rather than duplicating menu logic per page.
