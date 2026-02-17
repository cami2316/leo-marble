'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { name: siteConfig.nav.home, href: '/' },
    { name: siteConfig.nav.services, href: '/services' },
    { name: siteConfig.nav.portfolio, href: '/portfolio' },
    { name: siteConfig.nav.about, href: '/about' },
    { name: siteConfig.nav.contact, href: '/contact' },
  ]

  return (
    <header
      className={`
        fixed w-full top-0 z-50 transition-all duration-500
        ${isScrolled
          ? 'bg-brand-charcoal/90 backdrop-blur-lg shadow-lg py-2'
          : 'bg-transparent py-4'}
      `}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="relative flex items-center">
          <Image
            src="/logo/LOGO TRANSPARENTE.png"
            alt={siteConfig.companyName}
            width={isScrolled ? 170 : 200}
            height={60}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  relative font-medium tracking-wide transition
                  ${pathname === link.href
                    ? 'text-brand-accent'
                    : 'text-white hover:text-brand-accent'}
                `}
              >
                {t(link.name)}

                {/* Active underline */}
                {pathname === link.href && (
                  <span className="absolute left-0 -bottom-2 w-full h-[2px] bg-brand-accent" />
                )}
              </Link>
            </li>
          ))}

          {/* Language Toggle */}
          <LanguageToggle />

          {/* CTA */}
          <Link
            href="/contact"
            className="
              bg-[#C9CCD1]
              text-[#111111]
              px-6 py-3
              rounded-full
              font-semibold
              tracking-wide
              hover:bg-brand-accent hover:text-white
              transition-all
              shadow-md hover:shadow-xl
            "
          >
            {t(siteConfig.cta.contactUs)}
          </Link>

        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {isMenuOpen
              ? <path d="M6 18L18 6M6 6l12 12" />
              : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>

      </nav>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute w-full bg-brand-charcoal backdrop-blur-lg
          transition-all duration-500 overflow-hidden
          ${isMenuOpen ? 'max-h-[500px] py-6' : 'max-h-0'}
        `}
      >
        <ul className="flex flex-col items-center gap-6">

          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-lg hover:text-brand-accent transition"
              >
                {t(link.name)}
              </Link>
            </li>
          ))}

          {/* Language Toggle Mobile */}
          <LanguageToggle />

          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            className="
              bg-[#C9CCD1]
              text-[#111111]
              px-8 py-3
              rounded-full
              font-semibold
              hover:bg-brand-accent hover:text-white
              transition
            "
          >
            {t(siteConfig.cta.contactUs)}
          </Link>

        </ul>
      </div>
    </header>
  )
}
