import { MetadataRoute } from 'next'

// ACLARACIÓN TEMPLATE: En desarrollo usa http://localhost:3000.
// Setear NEXT_PUBLIC_SITE_URL en .env.local (o en Vercel) antes de deploy.
// Ejemplo: NEXT_PUBLIC_SITE_URL=https://minegocio.com.ar
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

  return [
    { url: base,                  changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/nosotros`,    changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/menu`,        changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/galeria`,     changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contacto`,    changeFrequency: 'monthly', priority: 0.7 },
  ]
}
