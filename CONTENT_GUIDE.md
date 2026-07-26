# Portfolio content, images, and deployment guide

This site keeps editable content separate from its React components. Most future
updates should only require changing files in `src/content/` and adding optimized
images to `public/images/`.

## Where to update content

### Homepage and About

Edit `src/content/site.js` for:

- Hero introduction
- Hero image
- Homepage About preview
- Full About-page copy
- Current interests and personal details

### Projects and experiments

Edit `src/content/projects.js`.

Each project supports:

- Number
- Title and year
- Category and status
- Short description
- Technologies
- Image and alternative text
- Project or case-study link
- Featured placement and accent color

The Work page and homepage Selected Work section both use this file.

### Notes and articles

Edit `src/content/notes.js`.

Each note supports:

- Slug
- Title
- Display date and ISO date
- Category
- Optional reading time
- Short excerpt
- Link

The homepage, Notes page, and Archive all use this file.

Store each full article as Markdown in `src/content/articles/`, using the note
slug as its filename:

```text
src/content/articles/personal-branding-for-myself.md
```

Then import the Markdown file and connect it to the same slug in
`src/content/articleRegistry.js`. All articles share the reusable
`src/pages/NotePage.jsx` layout.

The first Markdown heading may repeat the article title; the page renderer
removes that first heading because the title is already displayed in the
article header.

### Currently / Lately

Edit `src/content/currently.js`. Keep this list brief—four to six items works
best for the current layout.

### Archive dates

Notes enter the Archive automatically using their `isoDate`. Projects use the
numeric `archiveYear` stored directly on each project in
`src/content/projects.js`.

Keep `year` as the reader-facing label, which may be a range such as
`"2025–2026"`. Keep `archiveYear` as a single number representing the year under
which the project should appear:

```js
year: "2025–2026",
archiveYear: 2026,
```

## Adding images

Create `public/images/` if it does not already exist and put final site images
there. Images in that folder are referenced with paths beginning `/images/`.

Suggested filenames:

- `hero-portrait.webp` — homepage editorial image; portrait crop around 4:5
- `about-portrait.webp` — personal portrait; portrait crop around 3:4
- `project-one.webp` — main feature project; wide crop around 16:10
- `project-two.webp` — supporting project; portrait crop around 4:5
- `experiment-one.webp` — supporting experiment; portrait crop around 4:5

AVIF or WebP is preferred, with JPEG as a fallback. Aim for roughly 1600–2200px
on the longest edge and keep each image below 500KB where practical.

After adding an image, update its `image` value:

- `src/content/site.js` for hero and About images
- `src/content/projects.js` for project images

Example:

```js
image: "/images/hero-portrait.webp",
```

Always replace the corresponding `imageAlt` text with a concise description of
the real image. Do not describe purely decorative details.

## Previewing changes locally

Install dependencies once:

```bash
npm install
```

Start the local site:

```bash
npm run dev
```

Open the local address printed in the terminal. Check:

- Home, Work, Notes, About, and Archive
- Desktop and mobile widths
- Navigation and keyboard focus
- Image crops and alternative text
- Links and email address
- The Archive ordering

Stop the development server with `Ctrl+C`.

## Preparing a production build

Before publishing, run:

```bash
npm run build
```

This creates `dist/` and also generates `dist/404.html`, which allows GitHub
Pages to serve direct links such as `/work` and `/notes`.

Optionally preview the production output:

```bash
npm run preview
```

Do not manually edit or commit `dist/`; it is generated and ignored by Git.

## Publishing to GitHub Pages

The site is configured for:

`https://eun-chae-s.github.io/`

First save and push the source changes:

```bash
git status
git add .
git commit -m "Update portfolio content"
git push origin master
```

Then publish the production build:

```bash
npm run deploy
```

The deploy command automatically:

1. Runs the production build through `predeploy`
2. Publishes `dist/` to the `gh-pages` branch

If this is the first deployment with this workflow, confirm in the GitHub
repository settings that Pages is configured to deploy from the `gh-pages`
branch and its root directory.

After deployment, allow GitHub Pages a few minutes to update, then verify:

- `https://eun-chae-s.github.io/`
- `https://eun-chae-s.github.io/work`
- `https://eun-chae-s.github.io/notes`
- `https://eun-chae-s.github.io/about`
- `https://eun-chae-s.github.io/archive`

Use a hard refresh if an older cached version appears.

## Files that should not be committed

These are generated or machine-specific:

- `node_modules/`
- `dist/`
- `.DS_Store`
- `.env*` files containing private values

Never place secrets, private keys, API tokens, or unpublished personal data in
`src/content/` or `public/`; everything shipped there becomes publicly
accessible.
