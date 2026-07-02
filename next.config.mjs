/** @type {import('next').NextConfig} */

// GitHub Pages serves this project site from a sub-path:
//   https://<user>.github.io/tlc-uoa/
// basePath makes Next emit every route and asset under that prefix. next/image,
// next/link, and _next/* assets pick it up automatically; the one place it must
// be applied by hand is plain <a href> links to files in /public (see lib/content.ts),
// which read it back via NEXT_PUBLIC_BASE_PATH.
//
// Hosting from the domain root instead (e.g. a custom domain)? Set basePath to "".
const basePath = "/tlc-uoa";

const nextConfig = {
  // Emit a fully static site to ./out: plain HTML/CSS/JS, no Node runtime.
  output: "export",

  // Static export cannot use the on-demand Image Optimization server.
  images: { unoptimized: true },

  // Emit each route as a directory with index.html, for clean sub-path URLs.
  trailingSlash: true,

  basePath,

  // Expose the base path to client code that builds its own asset URLs.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
