import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Custom plugin to ensure GitHub Pages SPA routing and direct refresh support
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist');
      const indexPath = path.join(distDir, 'index.html');
      if (!fs.existsSync(indexPath)) return;

      const indexHtml = fs.readFileSync(indexPath, 'utf-8');

      // 1. Generate 404.html fallback for GitHub Pages
      fs.writeFileSync(path.join(distDir, '404.html'), indexHtml);

      // 2. Generate subroute index.html files for direct access & 200 OK responses
      const routes = ['work', 'process', 'about', 'contact', 'start-project'];
      for (const route of routes) {
        const routeDir = path.join(distDir, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        fs.writeFileSync(path.join(routeDir, 'index.html'), indexHtml);
      }
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/photokaro/',
  plugins: [react(), githubPagesSpaPlugin()],
  server: {
    port: 3000,
    open: false,
  },
});

