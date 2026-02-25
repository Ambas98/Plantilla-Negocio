'use client'

import { siteConfig } from '@/config/client-config'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  )
}
