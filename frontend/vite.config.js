/**
 * Vite Configuration (CommonJS format)
 * This minimal config tells Vite to use PostCSS which processes Tailwind CSS
 * Combined with postcss.config.js, this ensures all Tailwind styles are compiled
 * We don't need the React plugin since Vite handles JSX automatically in React projects
 */
module.exports = {
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    port: 5173,
    strictPort: false,
  },
}