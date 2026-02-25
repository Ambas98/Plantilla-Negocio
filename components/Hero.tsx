'use client'

import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import Link from 'next/link'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.1 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } },
}

export default function Hero() {
  const hasHeroImage = Boolean(siteConfig.heroImage)

  const sectionStyle = hasHeroImage
    ? {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${siteConfig.heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : undefined

  const headingColor = hasHeroImage ? '#ffffff' : siteConfig.colors.primary
  const taglineColor = hasHeroImage ? '#e5e7eb' : siteConfig.colors.secondary
  const descColor   = hasHeroImage ? '#d1d5db' : siteConfig.colors.text
  const ctaLinkColor = hasHeroImage ? '#ffffff' : siteConfig.colors.textLight

  return (
    <section
      className={`min-h-screen flex items-center justify-center pt-20 ${
        hasHeroImage ? '' : 'bg-gradient-to-br from-gray-50 to-gray-100'
      }`}
      style={sectionStyle}
    >
      <motion.div
        className="container mx-auto px-4 py-20 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: headingColor }}
          variants={itemVariants}
        >
          {siteConfig.businessName}
        </motion.h1>

        <motion.p
          className="text-2xl md:text-3xl mb-8 font-medium"
          style={{ color: taglineColor }}
          variants={itemVariants}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.p
          className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ color: descColor }}
          variants={itemVariants}
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <a
            href={`tel:${siteConfig.contact.phone}`}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: siteConfig.colors.primary }}
          >
            <FaPhone aria-hidden="true" />
            Llamar ahora
          </a>

          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
        </motion.div>

        <motion.div className="mt-14" variants={itemVariants}>
          <Link
            href="/nosotros"
            className="inline-flex flex-col items-center gap-1 text-sm uppercase tracking-widest hover:opacity-70 transition-opacity"
            style={{ color: ctaLinkColor }}
          >
            <span>Conocer más</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
              aria-hidden="true"
              className="text-xl"
            >
              ↓
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
