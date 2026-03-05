import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { siteConfig } from '@/config/client-config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { SchemaOrg } from '@/components/SchemaOrg'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: siteConfig.colors.primary,
}

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in production (e.g. https://tudominio.com)
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: siteConfig.businessName,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.seo?.keywords || '',
  openGraph: {
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: siteConfig.seo?.ogImage
      ? [{ url: siteConfig.seo.ogImage, width: 1200, height: 630 }]
      : [{ url: '/images/og-default.jpg', width: 1200, height: 630 }],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.businessName,
    description: siteConfig.description,
    images: siteConfig.seo?.ogImage ? [siteConfig.seo.ogImage] : ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <style>{`
          :root {
            --primary-color: ${siteConfig.colors.primary};
            --secondary-color: ${siteConfig.colors.secondary};
            --background-color: ${siteConfig.colors.background};
            --text-color: ${siteConfig.colors.text};
            --text-light-color: ${siteConfig.colors.textLight};
          }
        `}</style>
        <SchemaOrg />
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="skip-to-content">
          Saltar al contenido
        </a>
        <Header />
        <div id="main-content">
          {children}
        </div>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
