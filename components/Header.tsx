'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/config/client-config'
import { FaBars, FaTimes } from 'react-icons/fa'

const menuItems = [
  { label: 'Inicio',    href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: siteConfig.menuLabel, href: '/menu' },
  { label: 'Galería',  href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setIsMenuOpen(false) }, [pathname])

  const isActive = (href: string) => pathname === href

  return (
    <header
      className={`fixed top-0 left-0 right-0 bg-white z-50 transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-4" aria-label="Navegación principal">
        <div className="flex justify-between items-center">
          {/* Logo / Nombre del negocio */}
          <Link
            href="/"
            className="text-2xl font-bold transition-opacity hover:opacity-80"
            style={{ color: siteConfig.colors.primary }}
          >
            {siteConfig.businessName}
          </Link>

          {/* Menu desktop */}
          <ul className="hidden md:flex space-x-8" role="list">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-1 text-sm font-medium transition-opacity hover:opacity-70"
                  style={{
                    color: isActive(item.href) ? siteConfig.colors.primary : siteConfig.colors.text,
                  }}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: siteConfig.colors.primary }}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Botón mobile */}
          <button
            className="md:hidden p-2 rounded-md transition-colors hover:bg-gray-100"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FaTimes className="text-xl" style={{ color: siteConfig.colors.text }} />
            ) : (
              <FaBars className="text-xl" style={{ color: siteConfig.colors.text }} />
            )}
          </button>
        </div>

        {/* Menu mobile animado */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.ul
              role="list"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 space-y-1 border-t border-gray-100 mt-3">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(item.href) ? 'bg-gray-50' : 'hover:bg-gray-50'
                      }`}
                      style={{
                        color: isActive(item.href) ? siteConfig.colors.primary : siteConfig.colors.text,
                      }}
                      aria-current={isActive(item.href) ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
