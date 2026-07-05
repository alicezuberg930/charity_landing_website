import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = process.env.SITE_URL || 'https://anhsangtuthien.com'
const staticRoutes = [
    '/',
    '/design',
    '/photoshoot',
    '/video',
    '/chao-tinh-thuong',
    '/chuong-trinh-thuong-nien',
    '/ho-tro-hoan-canh',
    '/tiep-suc-tri-thuc',
    '/rule',
    '/criteria',
    '/structure',
    '/contact',
    '/news',
]

export const sitemapGenerator = (): Plugin => {
    return {
        name: 'sitemap-generator',
        apply: 'build',
        writeBundle() {
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes.map((route) => `<url>
<loc>${siteUrl}${route}</loc>
</url>`).join('\n')}
</urlset>`.trim()

            fs.mkdirSync(path.join(__dirname, 'dist'), { recursive: true })
            fs.writeFileSync(path.join(__dirname, 'dist', 'sitemap.xml'), sitemap)
        },
    }
}

// https://vite.dev/config/
export default defineConfig({
  envPrefix: ['VITE_', 'REACT_APP_'],
  plugins: [react(), tailwindcss(), sitemapGenerator()],
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
          ui: ['@base-ui/react', 'lucide-react', 'class-variance-authority', 'clsx', 'tailwind-merge', 'next-themes'],
          animation: ['framer-motion'],
          utils: ['moment'],
          editor: ['ckeditor5', '@ckeditor/ckeditor5-react'],
          charts: ['recharts', 'react-organizational-chart'],
          components: ['sonner', 'vaul', 'react-resizable-panels', 'embla-carousel-react', 'input-otp']
        },
      },
    },
  }
})