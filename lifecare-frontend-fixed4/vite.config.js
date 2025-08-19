import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure proper build for Vercel (ESM mode)
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: './index.html'
    }
  }
})
