'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, MessageCircle, Instagram } from 'lucide-react'

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#111111] text-white pt-48 pb-28">

        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/LEOBATH05.jpg"
            alt="Professional marble installation craftsmanship"
            fill
            priority
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/80 to-[#111111]/95" />
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          <p className="uppercase tracking-[0.4em] text-[#C9CCD1] text-sm mb-5">
            {t({ en: 'Our Story', es: 'Nuestra Historia' })}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {siteConfig.companyName}
          </h1>

          <p className="text-xl text-white/90">
            {t({ en: '25+ years of craftsmanship. Built on precision and trust.', es: '25+ años de artesanía. Construido con precisión y confianza.' })}
          </p>
        </div>

      </section>

      {/* STORY SECTION */}
      <section className="py-20 bg-white relative">
        
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
              {t({ en: 'Experience That Speaks', es: 'Experiencia que Habla' })}
            </h2>

            <div className="space-y-5 text-[#111111]/80 text-lg leading-relaxed">

              <p>
                {t(siteConfig.about)}
              </p>

              <div className="grid grid-cols-2 gap-6 py-6">
                <div className="text-center p-6 bg-[#F2F2F2] rounded-2xl">
                  <div className="text-4xl font-bold text-[#111111] mb-2">{siteConfig.yearsExperience}</div>
                  <p className="text-sm uppercase tracking-wider text-[#111111]/70">
                    {t({ en: 'Years Experience', es: 'Años de Experiencia' })}
                  </p>
                </div>
                <div className="text-center p-6 bg-[#F2F2F2] rounded-2xl">
                  <div className="text-4xl font-bold text-[#111111] mb-2">{siteConfig.projectsTotal}</div>
                  <p className="text-sm uppercase tracking-wider text-[#111111]/70">
                    {t({ en: 'Total Projects', es: 'Proyectos Total' })}
                  </p>
                </div>
              </div>

            </div>

          </div>

          <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/portfolio/LEOWALL05.jpg"
              alt="Premium tile installation"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* EXPERIENCE BREAKDOWN */}
      <section className="py-20 bg-[#F2F2F2] relative">
        
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#111111] mb-12">
            {t({ en: 'Professional Track Record', es: 'Trayectoria Profesional' })}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#111111] mb-3">{siteConfig.projectsUSA}</div>
              <p className="text-[#111111] font-semibold mb-2">
                {t({ en: 'Projects in USA', es: 'Proyectos en EE.UU.' })}
              </p>
              <p className="text-sm text-[#111111]/70">
                {t({ en: 'Since 2014', es: 'Desde 2014' })}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#111111] mb-3">{siteConfig.projectsBrazil}</div>
              <p className="text-[#111111] font-semibold mb-2">
                {t({ en: 'Projects in Brazil', es: 'Proyectos en Brasil' })}
              </p>
              <p className="text-sm text-[#111111]/70">
                {t({ en: 'Prior experience', es: 'Experiencia previa' })}
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-5xl font-bold text-[#111111] mb-3">{siteConfig.establishedYear}</div>
              <p className="text-[#111111] font-semibold mb-2">
                {t({ en: 'Established in FL', es: 'Establecida en FL' })}
              </p>
              <p className="text-sm text-[#111111]/70">
                {t({ en: 'Licensed & Insured', es: 'Con Licencia' })}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-white relative">

        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4">

          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.35em] text-[#111111]/70 text-sm mb-3">
              {t({ en: 'Our Commitment', es: 'Nuestro Compromiso' })}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
              {t({ en: 'What Drives Our Work', es: 'Lo Que Impulsa Nuestro Trabajo' })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.differentials.map((item, index) => (
              <div key={index} className="p-6 bg-[#F2F2F2] rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex gap-4">
                  <span className="mt-1 h-3 w-3 rounded-full bg-[#C9CCD1] flex-shrink-0" />
                  <p className="text-[#111111] font-medium leading-relaxed">
                    {t(item.title)}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 bg-[#111111] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t({ en: 'Work With Leo', es: 'Trabaja con Leo' })}
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t({ en: 'Get a professional estimate for your tile or marble project.', es: 'Obtén un presupuesto profesional para tu proyecto de tile o mármol.' })}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={siteConfig.phoneLink}
              className="flex items-center gap-2 bg-white text-[#111111] px-8 py-4 rounded-full font-semibold hover:bg-[#C9CCD1] transition shadow-lg text-lg"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.phoneFormatted}
            </a>

            <a
              href={siteConfig.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20BA5A] transition shadow-lg text-lg"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>

            <a
              href={siteConfig.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition text-lg"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
