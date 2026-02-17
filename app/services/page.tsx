'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, MessageCircle } from 'lucide-react'

export default function Services() {
  const { t } = useLanguage()

  return (
    <>
      {/* HERO */}
      <section className="relative pt-48 pb-28 bg-[#111111] text-white overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/LEOWALL04.jpg"
            alt="Professional tile and marble services"
            fill
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/95" />
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          <p className="uppercase tracking-[0.45em] text-[#C9CCD1] text-sm mb-5">
            {t(siteConfig.nav.services)}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t({ en: 'Professional Tile & Marble Installation Services', es: 'Servicios Profesionales de Instalación de Tile y Mármol' })}
          </h1>

          <p className="text-lg text-white/90">
            {t({ en: 'Expert installation with precision cutting and flawless finishing for residential and commercial projects.', es: 'Instalación profesional con cortes precisos y acabados impecables para proyectos residenciales y comerciales.' })}
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white relative">
        
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4">

          {siteConfig.services.map((service, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-16 items-center mb-24 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
            >

              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <p className="uppercase tracking-[0.35em] text-[#111111]/70 mb-4 text-sm">
                  {t({ en: 'Service', es: 'Servicio' })} {index + 1}
                </p>

                <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-6">
                  {t(service.title)}
                </h2>

                <p className="text-[#111111]/80 text-lg mb-8 leading-relaxed">
                  {t(service.description)}
                </p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href={siteConfig.phoneLink}
                    className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C9CCD1] hover:text-[#111111] transition"
                  >
                    <Phone className="w-5 h-5" />
                    {t(siteConfig.cta.callNow)}
                  </a>

                  <a
                    href={siteConfig.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 border-2 border-[#111111] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </div>
              </div>

              <div className={`relative h-[480px] rounded-3xl overflow-hidden shadow-2xl ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover"
                />
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ADDITIONAL SERVICES */}
      <section className="py-20 bg-[#F2F2F2] relative">
        
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4">
          
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-4">
              {t({ en: 'Complete Installation Solutions', es: 'Soluciones Completas de Instalación' })}
            </h2>
            <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto">
              {t({ en: 'From ceramic to natural stone, we handle all types of tile and marble installations.', es: 'Desde cerámica hasta piedra natural, manejamos todo tipo de instalaciones de tile y mármol.' })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { en: 'Floor Tile Installation', es: 'Instalación de Tile en Pisos' },
              { en: 'Wall Tile Installation', es: 'Instalación de Tile en Paredes' },
              { en: 'Shower & Bathroom Tile', es: 'Tile para Duchas y Baños' },
              { en: 'Kitchen Backsplash', es: 'Backsplash de Cocina' },
              { en: 'Marble Flooring', es: 'Pisos de Mármol' },
              { en: 'Custom Tile Patterns', es: 'Patrones Personalizados' },
              { en: 'Tile Repair & Restoration', es: 'Reparación y Restauración' },
              { en: 'Natural Stone Installation', es: 'Instalación de Piedra Natural' },
              { en: 'Porcelain & Ceramic Tile', es: 'Porcelanato y Cerámica' },
            ].map((item, index) => (
              <div key={index} className="flex gap-3 p-5 bg-white rounded-xl shadow-md">
                <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#C9CCD1] flex-shrink-0" />
                <p className="text-[#111111] font-medium">{t(item)}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111111] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t({ en: 'Ready to Transform Your Space?', es: '¿Listo para Transformar tu Espacio?' })}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {t(siteConfig.cta.freeEstimate)}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 bg-white text-[#111111] px-8 py-4 rounded-full font-semibold hover:bg-[#C9CCD1] transition shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneFormatted}
            </a>

            <Link
              href="/contact"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition text-lg"
            >
              {t(siteConfig.cta.contactUs)}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
