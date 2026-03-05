import { MetadataRoute } from 'next'

// ACLARACIÓN TEMPLATE: En desarrollo usa http://localhost:3000.
// Setear NEXT_PUBLIC_SITE_URL en .env.local (o en Vercel) antes de deploy.
export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${base}/sitemap.xml`,
  }
}
