# Portfolio image uploads

Put final site images in this folder. Files placed here are referenced from the
site with paths beginning `/images/`.

Suggested filenames:

- `hero-portrait.jpg` — homepage editorial image; portrait crop around 4:5.
- `about-portrait.jpg` — personal portrait; portrait crop around 3:4.
- `project-one.jpg` — main feature project; wide crop around 16:10.
- `project-two.jpg` — supporting project; portrait crop around 4:5.
- `experiment-one.jpg` — supporting experiment; portrait crop around 4:5.

Export photographs as AVIF or WebP when practical, with JPEG as a fallback.
Aim for roughly 1600–2200px on the longest edge and keep each image below 500KB.

After adding an image, update its `image` value in:

- `src/content/site.js` for hero and About images.
- `src/content/projects.js` for project images.

Example:

```js
image: "/images/hero-portrait.jpg",
```
