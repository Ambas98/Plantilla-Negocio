'use client'

import { motion, type Variants } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaClock, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const daysOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'] as const
const daysNames: Record<string, string> = {
  monday:    'Lunes',
  tuesday:   'Martes',
  wednesday: 'Miércoles',
  thursday:  'Jueves',
  friday:    'Viernes',
  saturday:  'Sábado',
  sunday:    'Domingo',
}

export default function About() {
  return (
    <section className="py-20 bg-white" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            id="about-heading"
            className="text-4xl font-bold mb-4"
            style={{ color: siteConfig.colors.primary }}
          >
            Sobre Nosotros
          </h2>

          {/* Story */}
          {siteConfig.about.story && (
            <p
              className="text-lg leading-relaxed max-w-3xl mx-auto"
              style={{ color: siteConfig.colors.textLight }}
            >
              {siteConfig.about.story}
            </p>
          )}

          {/* Mission */}
          {siteConfig.about.mission && (
            <p
              className="mt-4 text-base italic max-w-2xl mx-auto"
              style={{ color: siteConfig.colors.secondary }}
            >
              &ldquo;{siteConfig.about.mission}&rdquo;
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Información de contacto */}
          <motion.div
            className="space-y-8"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt
                className="text-2xl mt-1 shrink-0"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: siteConfig.colors.text }}>
                  Ubicación
                </h3>
                <p style={{ color: siteConfig.colors.textLight }}>{siteConfig.contact.address}</p>
                <a
                  href={siteConfig.location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm mt-2 inline-block hover:opacity-70 transition-opacity"
                  style={{ color: siteConfig.colors.primary }}
                >
                  Ver en mapa →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaPhone
                className="text-2xl mt-1 shrink-0"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: siteConfig.colors.text }}>
                  Teléfono
                </h3>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: siteConfig.colors.textLight }}
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaEnvelope
                className="text-2xl mt-1 shrink-0"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-semibold text-lg mb-1" style={{ color: siteConfig.colors.text }}>
                  Email
                </h3>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:opacity-70 transition-opacity break-all"
                  style={{ color: siteConfig.colors.textLight }}
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Horarios */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FaClock
                className="text-2xl"
                style={{ color: siteConfig.colors.primary }}
                aria-hidden="true"
              />
              <h3 className="font-semibold text-lg" style={{ color: siteConfig.colors.text }}>
                Horarios de Atención
              </h3>
            </div>
            <dl className="space-y-2">
              {daysOrder.map((day) => {
                const hours = siteConfig.hours[day]
                const isClosed = hours === 'Cerrado'
                return (
                  <div key={day} className="flex justify-between py-2 border-b border-gray-100">
                    <dt className="font-medium text-sm" style={{ color: siteConfig.colors.text }}>
                      {daysNames[day]}
                    </dt>
                    <dd
                      className="text-sm font-medium"
                      style={{ color: isClosed ? '#EF4444' : siteConfig.colors.textLight }}
                    >
                      {hours}
                    </dd>
                  </div>
                )
              })}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
