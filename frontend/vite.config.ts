import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'
import { slugify } from './src/lib/utils.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const siteUrl = process.env.SITE_URL || 'https://www.anhsangtuthien.com'
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

type SitemapEntry = {
  loc: string
  lastmod?: string
  changefreq?: string
  priority?: string
}

const escapeXml = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;')

const formatDate = (value?: string) => {
  if (!value) return undefined
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return undefined
  return date.toISOString().split('T')[0]
}

const getRouteMetadata = (route: string): Pick<SitemapEntry, 'changefreq' | 'priority'> => {
  if (route === '/') return { changefreq: 'weekly', priority: '1.0' }
  if (route.startsWith('/chao-tinh-thuong/') || route.startsWith('/chuong-trinh-thuong-nien/') || route.startsWith('/ho-tro-hoan-canh/') || route.startsWith('/tiep-suc-tri-thuc/')) {
    return { changefreq: 'monthly', priority: '0.8' }
  }
  if (route.includes('/chao-tinh-thuong') || route.includes('/chuong-trinh-thuong-nien') || route.includes('/ho-tro-hoan-canh') || route.includes('/tiep-suc-tri-thuc')) {
    return { changefreq: 'weekly', priority: '0.9' }
  }
  return { changefreq: 'monthly', priority: '0.7' }
}

const fetchPostRoutesByCategory = async (category: string): Promise<SitemapEntry[]> => {
  try {
    const response = await fetch(`https://webtinhthuong.onrender.com/api/v1/posts?category=${category}`)
    const payload = await response.json() as { data?: any[] }
    const posts = payload.data ?? []

    return posts.map((post: any) => {
      const route = `/${post.category}/${slugify(post.title)}-${post._id}`
      return {
        loc: `${siteUrl}${route}`,
        lastmod: formatDate(post.updatedAt ?? post.createdAt),
        ...getRouteMetadata(route),
      }
    })
  } catch {
    return []
  }
}

const getPostRoutes = async () => {
  const allDynamicRoutes: SitemapEntry[] = []
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
      const sitemapRoutes: SitemapEntry[] = [
        ...staticRoutes.map((route) => ({
          loc: `${siteUrl}${route}`,
          ...getRouteMetadata(route),
        })),
        ...(postRoutes.length > 0 ? postRoutes : []),
      ]

      const sitemap = `<?xml version='1.0' encoding='UTF-8'?><urlset xmlns='http://www.sitemaps.org/schemas/sitemap/0.9'>
      ${sitemapRoutes.map((entry) => {
        const lines = [`<url>`, `<loc>${escapeXml(entry.loc)}</loc>`]
        if (entry.lastmod) {
          lines.push(`<lastmod>${escapeXml(entry.lastmod)}</lastmod>`)
        }
        if (entry.changefreq) {
          lines.push(`<changefreq>${escapeXml(entry.changefreq)}</changefreq>`)
        }
        if (entry.priority) {
          lines.push(`<priority>${escapeXml(entry.priority)}</priority>`)
        }
        lines.push('</url>')
        return lines.join('\n')
      }).join('\n')}
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