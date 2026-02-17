'use client'

import Image from 'next/image'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, MessageCircle, Mail, Instagram, MapPin } from 'lucide-react'

export default function Contact() {
  const { t } = useLanguage()

  return (
    <>
      {/* HERO */}
      <section className="relative pt-48 pb-28 bg-[#111111] text-white overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/LEOBATH04.jpg"
            alt="Contact Leo Marble Installation"
            fill
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/95" />
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          <p className="uppercase tracking-[0.45em] text-[#C9CCD1] text-sm mb-5">
            {t(siteConfig.nav.contact)}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t({ en: 'Get in Touch', es: 'Contáctenos' })}
          </h1>
          <p className="text-xl text-[#C9CCD1] leading-relaxed max-w-2xl">
            {t({ 
              en: 'Ready to transform your space? Contact us today for a free estimate.',
              es: 'Listo para transformar su espacio? Contáctenos hoy para un presupuesto gratis.' 
            })}
          </p>
        </div>

      </section>

      {/* CONTACT METHODS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Phone */}
            <div className="text-center p-8 bg-[#F2F2F2] rounded-xl hover:shadow-xl transition">
              <Phone className="w-12 h-12 text-[#111111] mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">
                {t({ en: 'Call Us', es: 'Llámenos' })}
              </h3>
              <a 
                href={siteConfig.phoneLink}
                className="text-[#111111] hover:text-[#C9CCD1] transition text-lg font-medium"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* WhatsApp */}
            <div className="text-center p-8 bg-[#F2F2F2] rounded-xl hover:shadow-xl transition">
              <MessageCircle className="w-12 h-12 text-[#25D366] mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">WhatsApp</h3>
              <a 
                href={siteConfig.whatsappLink}
                className="text-[#111111] hover:text-[#C9CCD1] transition text-lg font-medium"
              >
                {siteConfig.phone}
              </a>
            </div>

            {/* Email */}
            <div className="text-center p-8 bg-[#F2F2F2] rounded-xl hover:shadow-xl transition">
              <Mail className="w-12 h-12 text-[#111111] mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">
                {t({ en: 'Email Us', es: 'Envíenos un Email' })}
              </h3>
              <a 
                href={siteConfig.emailLink}
                className="text-[#111111] hover:text-[#C9CCD1] transition break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Instagram */}
            <div className="text-center p-8 bg-[#F2F2F2] rounded-xl hover:shadow-xl transition">
              <Instagram className="w-12 h-12 text-[#E4405F] mx-auto mb-4" />
              <h3 className="font-display text-xl font-semibold mb-3">Instagram</h3>
              <a 
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#111111] hover:text-[#C9CCD1] transition text-lg font-medium"
              >
                {siteConfig.instagram.handle}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="py-20 bg-[#F2F2F2]">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-[#111111]" />
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              {t({ en: 'Service Areas', es: 'Áreas que Servimos' })}
            </h2>
          </div>

          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            {t({ 
              en: 'Proudly serving Central Florida with premium tile and marble installation.',
              es: 'Sirviendo con orgullo a Central Florida con instalación premium de azulejos y mármol.' 
            })}
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {siteConfig.serviceAreas.map((area, index) => (
              <span 
                key={index}
                className="px-5 py-2 bg-white rounded-full text-[#111111] font-medium shadow-md"
              >
                {area}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* IMAGES + CTA */}
      <section className="relative py-20 bg-[#111111] text-white overflow-hidden">

        <div className="absolute inset-0 grid grid-cols-2">
          <Image
            src="/images/portfolio/LEOWALL09.jpg"
            alt="Marble Installation"
            fill
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
            {t({ 
              en: 'Ready to Start Your Project?',
              es: '¿Listo para Comenzar su Proyecto?' 
            })}
          </h2>
          
          <p className="text-xl text-[#C9CCD1] mb-10 leading-relaxed">
            {t({ 
              en: 'Contact us today for a free, no-obligation estimate.',
              es: 'Contáctenos hoy para un presupuesto gratis, sin compromiso.' 
            })}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <a
              href={siteConfig.phoneLink}
              className="bg-white text-[#111111] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#C9CCD1] transition"
            >
              {t({ en: 'Call Now', es: 'Llamar Ahora' })}
            </a>

            <a
              href={siteConfig.whatsappLink}
              className="bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#1da851] transition"
            >
              {t({ en: 'Message on WhatsApp', es: 'Mensaje por WhatsApp' })}
            </a>

            <a
              href={siteConfig.emailLink}
              className="bg-[#C9CCD1] text-[#111111] px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition"
            >
              {t({ en: 'Send Email', es: 'Enviar Email' })}
            </a>

          </div>
        </div>

      </section>

    </>
  )
}
