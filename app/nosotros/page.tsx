import type { Metadata } from 'next'
import { siteConfig } from '@/config/client-config'
import About from '@/components/About'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: siteConfig.about.story.slice(0, 160),
}

export default function NosotrosPage() {
  return (
    <main className="pt-20">
      <About />
    </main>
  )
}
