import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Vite config for React + Tailwind + Vercel deployment
export default defineConfig({
  base: './', // fixes relative asset paths on deploy
  plugins: [react()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    rollupOptions: {} // use Rollup for production
  },
})
