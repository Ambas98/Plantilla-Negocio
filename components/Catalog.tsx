'use client'

import { useState } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaWhatsapp } from 'react-icons/fa'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

export default function Catalog() {
  const [activeCategory, setActiveCategory] = useState<string>(
    siteConfig.catalog[0]?.category ?? ''
  )

  const currentCategory = siteConfig.catalog.find(
    (cat) => cat.category === activeCategory
  )

  return (
    <section className="py-20 bg-gray-50" aria-labelledby="catalog-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            id="catalog-heading"
            className="text-4xl font-bold mb-3"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.menuLabel}
          </h2>
          <p style={{ color: siteConfig.colors.textLight }}>
            Conocé toda nuestra oferta
          </p>
        </motion.div>

        {/* Category tabs */}
        {siteConfig.catalog.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            role="tablist"
            aria-label="Categorías del menú"
          >
            {siteConfig.catalog.map((cat) => {
              const isActive = cat.category === activeCategory
              return (
                <button
                  key={cat.category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(cat.category)}
                  className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 border-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{
                    backgroundColor: isActive ? siteConfig.colors.secondary : 'transparent',
                    borderColor: siteConfig.colors.secondary,
                    color: isActive ? '#ffffff' : siteConfig.colors.secondary,
                  }}
                >
                  {cat.category}
                </button>
              )
            })}
          </motion.div>
        )}

        {/* Items grid */}
        <AnimatePresence mode="wait">
          {currentCategory && (
            <motion.div
              key={activeCategory}
              className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              role="tabpanel"
            >
              {currentCategory.items.map((item, itemIdx) => (
                <motion.article
                  key={itemIdx}
                  variants={fadeUp}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex justify-between items-start gap-4 mb-2">
                    <h3
                      className="text-lg font-semibold leading-snug"
                      style={{ color: siteConfig.colors.text }}
                    >
                      {item.name}
                    </h3>
                    <span
                      className="text-xl font-bold shrink-0"
                      style={{ color: siteConfig.colors.primary }}
                    >
                      ${parseInt(item.price).toLocaleString('es-AR')}
                    </span>
                  </div>
                  {item.description && (
                    <p className="text-sm leading-relaxed" style={{ color: siteConfig.colors.textLight }}>
                      {item.description}
                    </p>
                  )}
                </motion.article>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA */}
        <motion.div
          className="text-center mt-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95 shadow-md"
            style={{ backgroundColor: '#25D366' }}
          >
            <FaWhatsapp aria-hidden="true" />
            Hacer Pedido por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
