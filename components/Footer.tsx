'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, Mail, Instagram } from 'lucide-react'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#111111] text-white relative">

      {/* CTA IMAGE SECTION */}
      <div className="relative">

        <div className="relative h-[420px] overflow-hidden">
          <Image
            src="/images/portfolio/LEOWALL08.jpg"
            alt="Professional marble installation"
            fill
            className="object-cover scale-105"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/95" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-2xl px-6">

            <p className="uppercase tracking-[0.4em] text-[#C9CCD1] text-sm mb-4">
              {t(siteConfig.tagline)}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              {t({ en: 'Transform Your Space With Expert Craftsmanship', es: 'Transforma tu Espacio con Artesanía Experta' })}
            </h2>

            <Link
              href="/contact"
              className="inline-block bg-[#C9CCD1] text-[#111111] px-9 py-4 rounded-full font-semibold tracking-wide hover:bg-white transition duration-300 shadow-lg hover:shadow-xl"
            >
              {t(siteConfig.cta.contactUs)}
            </Link>

          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="container mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* BRAND */}
          <div className="space-y-5">

            <Image
              src="/logo/LOGOTRANSPARENTE.png"
              alt={siteConfig.companyName}
              width={180}
              height={60}
            />

            <p className="text-sm text-white/80 leading-relaxed">
              {t(siteConfig.niche)} {t({ en: 'across', es: 'en' })} {t(siteConfig.region)}.
            </p>

            <p className="text-sm text-[#C9CCD1] font-medium">
              {t(siteConfig.tagline)}
            </p>

          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-wide">
              {t({ en: 'Navigation', es: 'Navegación' })}
            </h4>

            <ul className="space-y-3 text-white/80">
              <li><Link href="/" className="hover:text-[#C9CCD1] transition">{t(siteConfig.nav.home)}</Link></li>
              <li><Link href="/services" className="hover:text-[#C9CCD1] transition">{t(siteConfig.nav.services)}</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#C9CCD1] transition">{t(siteConfig.nav.portfolio)}</Link></li>
              <li><Link href="/about" className="hover:text-[#C9CCD1] transition">{t(siteConfig.nav.about)}</Link></li>
              <li><Link href="/contact" className="hover:text-[#C9CCD1] transition">{t(siteConfig.nav.contact)}</Link></li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-wide">
              {t(siteConfig.nav.contact)}
            </h4>

            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href={siteConfig.phoneLink} className="hover:text-[#C9CCD1] transition">
                  {siteConfig.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={siteConfig.emailLink} className="hover:text-[#C9CCD1] transition">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="w-4 h-4" />
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#C9CCD1] transition"
                >
                  {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICE AREAS */}
          <div>
            <h4 className="text-lg font-semibold mb-5 tracking-wide">
              {t({ en: 'Service Areas', es: 'Áreas de Servicio' })}
            </h4>

            <ul className="space-y-3 text-white/80">
              {siteConfig.serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/20 mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">

          <p>
            © {new Date().getFullYear()} {siteConfig.companyName}. {t({ en: 'All rights reserved.', es: 'Todos los derechos reservados.' })}
          </p>

          <p>
            {t({ en: `Licensed & Insured • Serving ${siteConfig.region.en} since ${siteConfig.establishedYear}`, es: `Con Licencia • Sirviendo ${siteConfig.region.es} desde ${siteConfig.establishedYear}` })}
          </p>

        </div>

      </div>

    </footer>
  )
}

