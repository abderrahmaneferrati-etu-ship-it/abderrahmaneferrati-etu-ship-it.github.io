# Abderrahmane FERRATI — Portfolio

A responsive French / English portfolio for electrical engineering and industrial systems control.

The editorial layout is inspired by [Asher Vale by Asad Khaleel](https://www.framer.com/marketplace/templates/asher-vale/): off-white background, oversized typography, a fully visible name beside the portrait, image-led project gallery, and full-screen navigation. This site uses a custom static implementation for GitHub Pages.

**Website:** https://abderrahmaneferrati-etu-ship-it.github.io/

The surname is displayed as **FERRATI** throughout the portfolio. The heading and portrait occupy separate layout areas on desktop and mobile.

## Features

- Complete French and English versions, selected using the FR / EN buttons.
- Shareable language URLs: `?lang=fr` and `?lang=en`.
- Language preference is remembered on the visitor's device.
- Matching French CV and English résumé downloads.
- Four accessible project dialogs with technical details and keyboard dismissal.
- Four original SVG engineering illustrations, clearly identified as illustrative visuals.
- Full-screen navigation with keyboard focus management.
- Mobile layout, keyboard navigation, reduced-motion support, and accessible language announcements.
- Static HTML, CSS, and JavaScript; no build step or server-side services.

## Editing

- `index.html`: page structure and default French content.
- `script.js`: both language dictionaries and language-switch behavior. Keep matching translation keys in both dictionaries.
- `styles.css`: layout, typography, and responsive styles.
- `portrait.jpg`: portrait extracted from the supplied French CV.
- `project-*.svg`: original conceptual engineering illustrations, not photographs or actual project renders.
- `cv-fr.pdf` and `cv-en.pdf`: the supplied résumés, unchanged.

The photovoltaic production and demand-coverage figures are simulation estimates from the supplied résumés. The demonstration dashboard is described as in development.

## Hosting

GitHub Pages publishes the `main` branch from the repository root. The `.nojekyll` file keeps this a plain static site. Uploading or committing changes to `main` triggers a Pages deployment.

To preview locally with Python:

```sh
python -m http.server 4173
```

Open http://localhost:4173/ in a browser.

Fonts are loaded from Google Fonts, with local sans-serif fallbacks.
