import type { Metadata } from 'next'
import { siteConfig } from '@/config/client-config'
import Contact from '@/components/Contact'

export const metadata: Metadata = {
  title: 'Contacto',
  description: `Contactá a ${siteConfig.businessName}. ${siteConfig.contact.address}. Tel: ${siteConfig.contact.phone}`,
}

export default function ContactoPage() {
  return (
    <main className="pt-20">
      <Contact />
    </main>
  )
}
