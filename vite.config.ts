import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project sites are served from /<repo-name>/ in production.
  base: process.env.NODE_ENV === 'production' ? '/craftworld-elemmir/' : '/',
  build: {
    outDir: 'docs',
  },
})
