import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Build to dist/ (clean separation from source).
// `npm run publish` copies the build to the repo root so GitHub Pages
// serves it directly from devshivamthakur.github.io.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  server: {
    port: 5173,
    open: false
  }
});
