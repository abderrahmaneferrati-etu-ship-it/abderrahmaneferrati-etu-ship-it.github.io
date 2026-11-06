# Abderrahmane FERRATI - engineering portfolio

Bilingual FR/EN static portfolio hosted on GitHub Pages. No build step or runtime dependencies.

## Files
- `index.html`: semantic homepage and native dialog shells.
- `content.js`: editable profile, confirmed availability, bilingual case studies and evidence arrays.
- `script.js`: interface translations, language persistence, accessible menu, hash routing and media rendering.
- `styles.css`: retained Asher Vale-inspired editorial design and responsive refinements.
- `cv-fr.pdf`, `cv-en.pdf`: synchronized one-page CV downloads.
- `portrait.jpg`, `project-*.svg`, `favicon.svg`: preserved original assets. Cover illustrations are conceptual.

## Edit content
Update both `fr` and `en` values in `content.js`. Availability starts in mid-January 2027, for 5-6 months or longer, with open geographic mobility. ENSET starts in 2024; preparatory classes span 2022-2024. Update the French HTML fallback and PDF downloads when changing these facts.

Each project has an `evidence` array, initially empty. Add only authentic documents that you own or are authorized to publish. No employer-sensitive documents are included.

```js
{ type: 'image', src: 'assets/project/photo.jpg',
  alt: {fr: 'Description précise', en: 'Precise description'},
  caption: {fr: 'Contexte, méthode et statut du visuel', en: 'Context, method and status of the image'} }
{ type: 'pdf', src: 'assets/project/report.pdf',
  caption: {fr: 'Extrait autorisé du rapport', en: 'Authorized report extract'} }
{ type: 'video', src: 'assets/project/demo.mp4', poster: 'assets/project/poster.jpg',
  caption: {fr: 'Simulation commentée', en: 'Narrated simulation'} }
```

Images open in a native fullscreen dialog; PDFs use a direct accessible document link; videos use native controls. Empty arrays produce no empty gallery or placeholders.

## Preview and deploy
Run `python -m http.server 4183` in this folder, then visit `http://localhost:4183/`. Publish the root of `main` using GitHub Pages. `.nojekyll` keeps the deployment buildless.

Links such as `/?lang=en#project-pv` open case studies directly. Refresh, browser back/forward and language changes preserve the selected project. Hash views share the homepage canonical document; social crawlers that do not execute JavaScript see the static French metadata. Sitemap lists the two language URLs, not artificial server routes.

The full name and portrait occupy separate layout areas. The surname is always FERRATI. Design inspired by [Asher Vale by Asad Khaleel](https://www.framer.com/marketplace/templates/asher-vale/); custom static implementation.
