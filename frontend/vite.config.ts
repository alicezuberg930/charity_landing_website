import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'REACT_APP_'],
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['@tanstack/react-router'],
          query: ['@tanstack/react-query'],
          ui: ['@base-ui/react', 'lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          animation: ['framer-motion'],
          carousel: ['embla-carousel-react'],
          editor: ['ckeditor5', '@ckeditor/ckeditor5-react'],
          charts: ['recharts'],
        },
      },
    },
  }
})
