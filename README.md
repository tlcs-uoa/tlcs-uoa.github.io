# Teaching and Learning Circles

Landing page for the University of Auckland (Waipapa Taumata Rau) Teaching and
Learning Circles programme. Built with Next.js as a fully static site and hosted
on GitHub Pages.

**Live site:** https://zachsaunders88.github.io/tlc-uoa/

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000. In `next dev` the base path is empty, so the site
serves from the root.

## How it's built and deployed

The site is a static export (`output: "export"` in `next.config.mjs`): `npm run
build` writes plain HTML/CSS/JS to `out/`, with no server runtime required.

Deployment is automatic. The workflow in `.github/workflows/deploy.yml` runs on
every push to `main`: it builds the site and publishes `out/` to GitHub Pages.
No manual step is needed once Pages is enabled (**Settings → Pages → Source:
GitHub Actions**).

## The base path

GitHub Pages serves this project site from a sub-path, `/tlc-uoa/`, so
`next.config.mjs` sets `basePath: "/tlc-uoa"`. Next applies that prefix to routes,
`next/link`, and `_next/*` assets automatically. Two cases it does **not** cover
are handled by hand, both via the `asset()` helper in `lib/content.ts`:

- plain `<a href>` links to files in `/public` (the resource-pack PDF), and
- `next/image` with `unoptimized` (the logos in the nav and footer).

`.nojekyll` in `public/` keeps GitHub from stripping the `_next/` directory.

**Moving to a custom domain?** Set `basePath` to `""` in `next.config.mjs` and add
the domain in the Pages settings. Everything downstream reads the base path from
there, so no other code changes are needed.

## Content

All page copy lives in `lib/content.ts`, condensed from the TLC resource pack
(`public/TLC-Resource-Pack.pdf`). Two placeholders remain to fill in before a
public launch:

- `LINKS.registerUrl` — the real register-interest URL (currently `#register`)
- `LINKS.registerDeadline` — the expression-of-interest deadline (currently `[date]`)

The brand palette in `tailwind.config.ts` and the Inter typeface match the
University brand; **Fraunces** is used for display headings.
