import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { slugify } from './src/lib/utils.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
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
const postCategories = ['chao-tinh-thuong', 'chuong-trinh-thuong-nien', 'ho-tro-hoan-canh', 'tiep-suc-tri-thuc']

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/'/g, '&quot;')
  .replace(/'/g, '&apos;')

const fetchPostRoutesByCategory = async (category: string): Promise<string[]> => {
  try {
    const response = await fetch(`https://webtinhthuong.onrender.com/api/v1/posts?category=${category}`)
    const payload = await response.json() as { data: any }
    const posts = payload.data ?? []
    return posts.map((post: any) => `/${post.category}/${slugify(post.title)}-${post._id}`)
  } catch {
    return []
  }
}

const getPostRoutes = async () => {
  const allDynamicRoutes: string[] = []
  for (const category of postCategories) {
    const routes = await fetchPostRoutesByCategory(category)
    allDynamicRoutes.push(...routes)
  }
  return allDynamicRoutes
}

export const sitemapGenerator = (): Plugin => {
  return {
    name: 'sitemap-generator',
    apply: 'build',
    async writeBundle() {
      const postRoutes = await getPostRoutes()
      const sitemapRoutes = [
        ...staticRoutes,
        ...(postRoutes.length > 0 ? postRoutes : []),
      ]

      const sitemap = `<?xml version='1.0' encoding='UTF-8'?>
<urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
${sitemapRoutes.map((route) => `<url>
<loc>${escapeXml(`https://www.anhsangtuthien.com/${route}`)}</loc>
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