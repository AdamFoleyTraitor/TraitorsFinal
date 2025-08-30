import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  root: '.',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),          // @/...
      '@shared': fileURLToPath(new URL('./shared', import.meta.url)),
      '@components': fileURLToPath(new URL('./components', import.meta.url)),
      '@hooks': fileURLToPath(new URL('./hooks', import.meta.url)),
      '@pages': fileURLToPath(new URL('./pages', import.meta.url)),
      '@lib': fileURLToPath(new URL('./lib', import.meta.url)),
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: { input: 'index.html' }
  },
  plugins: [react()],
})
resolve: {
  alias: {
    '@':        fileURLToPath(new URL('.', import.meta.url)),
    '@shared':  fileURLToPath(new URL('./shared', import.meta.url)),
    '@components': fileURLToPath(new URL('./components', import.meta.url)),
    '@hooks':   fileURLToPath(new URL('./hooks', import.meta.url)),
    '@pages':   fileURLToPath(new URL('./pages', import.meta.url)),
    '@lib':     fileURLToPath(new URL('./lib', import.meta.url)),
    '@assets':  fileURLToPath(new URL('./public', import.meta.url)),   // <— or './attached_assets' if that’s where the PNGs actually are
  },
},
