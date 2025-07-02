
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // '@' zeigt nun auf dein src-Verzeichnis
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
