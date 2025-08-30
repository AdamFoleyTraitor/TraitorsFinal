import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: '.',                          // tell Vite to look at the repo root
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html'             // tell Vite your entry is index.html in root
    }
  },
  plugins: [react()]
})
