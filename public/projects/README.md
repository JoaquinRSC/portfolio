# Project screenshots

Drop **sanitized** screenshots here to show proof of private projects without
exposing code or data. Blur or remove anything sensitive first: real prices,
client names, account credentials, personal info, API keys.

## How to add them

1. Capture the app UI (anonymized) and save as PNG/JPG/WebP in this folder.
2. Suggested naming: `<project>-1.png`, `<project>-2.png`, ...
   e.g. `skin-tracker-1.png`, `csfloat-1.png`, `mp-tracker-1.png`
3. List the paths in `src/data/projects.js` under each project's `screenshots`:

   ```js
   screenshots: ['/projects/skin-tracker-1.png', '/projects/skin-tracker-2.png'],
   ```

The card shows the first image as the preview, and clicking opens a lightbox to
browse them all. While `screenshots` is empty, the card falls back to the
abstract mockup, so nothing breaks until images are added.

## Tips

- Aim for a 16:9-ish crop for the card preview to look clean.
- Keep files reasonably sized (< ~400 KB each); compress if needed.
- A short flow of 2–4 shots per project tells the story well.
