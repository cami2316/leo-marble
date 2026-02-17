'use client'

import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, MessageCircle, Mail } from 'lucide-react'

const portfolioPreview = [
  {
    title: 'LEO BATH 04',
    image: '/images/portfolio/LEOBATH04.jpg',
  },
  {
    title: 'LEO WALL 01',
    image: '/images/portfolio/LEOWALL01.jpg',
  },
  {
    title: 'LEO WALL 02',
    image: '/images/portfolio/LEOWALL02.jpg',
  },
  {
    title: 'LEO BATH 05',
    image: '/images/portfolio/LEOBATH05.jpg',
  },
  {
    title: 'LEO FLOOR 01',
    image: '/images/portfolio/LEOFLOOR01.jpg',
  },
  {
    title: 'LEO BATH 06',
    image: '/images/portfolio/LEOBATH06.jpg',
  },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-[#111111] text-white">

        <div className="absolute inset-0">
          <Image
            src="/images/hero/LEOBATH02.jpg"
            alt="Professional tile and marble installation"
            fill
            priority
            className="object-cover scale-105"
            sizes="100vw"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#111111]/95 via-[#111111]/85 to-[#111111]/95" />
        </div>

        <div className="relative container mx-auto px-4 pt-48 pb-32 min-h-screen flex items-center">
          <div className="max-w-4xl">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t(siteConfig.heroTitle)}
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl leading-relaxed">
              {t(siteConfig.heroSubtitle)}
            </p>

            {/* Trust Bar */}
            <div className="mb-10 p-4 bg-white/10 backdrop-blur-sm rounded-2xl inline-block">
              <p className="text-sm md:text-base text-white/90">
                {t(siteConfig.trustBar)}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">

              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 bg-[#C9CCD1] text-[#111111] px-8 py-4 rounded-full font-semibold hover:bg-white transition shadow-lg"
              >
                <Phone className="w-5 h-5" />
                {t(siteConfig.cta.callNow)}
              </a>

              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#20BA5A] transition shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                {t(siteConfig.cta.whatsapp)}
              </a>

              <a
                href={siteConfig.emailLink}
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition"
              >
                <Mail className="w-5 h-5" />
                {t(siteConfig.cta.email)}
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* TRUST STATS */}
      <section className="py-20 bg-[#F2F2F2] relative">
        
        {/* Marble Background Pattern */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-3xl p-8 text-center shadow-xl bg-white/80 backdrop-blur-sm border border-[#C9CCD1]/30"
              >
                <div className="text-4xl font-bold text-[#111111] mb-3">
                  {stat.value}
                </div>

                <p className="uppercase tracking-widest text-sm text-[#111111]/70">
                  {t(stat.label)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white relative">

        {/* Subtle marble pattern */}
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
            <p className="uppercase tracking-[0.35em] text-[#111111] mb-3">
              {t(siteConfig.nav.services)}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
              {t({ en: 'Professional Services', es: 'Servicios Profesionales' })}
            </h2>

            <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto">
              {t({ en: 'Expert installation with precision cutting and flawless finishing for luxury interiors.', es: 'Instalación profesional con cortes precisos y acabados impecables para interiores de lujo.' })}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {siteConfig.services.map((service, index) => (
              <div
                key={index}
                className="group rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-[#111111] mb-3">
                    {t(service.title)}
                  </h3>

                  <p className="text-[#111111]/80 text-base leading-relaxed">
                    {t(service.description)}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-[#F2F2F2] relative">
        
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/portfolio/LEOBATH07.jpg"
              alt="Professional tile and marble installation"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.35em] text-[#111111] mb-3">
              {t({ en: 'About Us', es: 'Acerca de Nosotros' })}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-6">
              {siteConfig.companyName}
            </h2>

            <p className="text-lg text-[#111111]/80 mb-8 leading-relaxed">
              {t(siteConfig.about)}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.phoneLink}
                className="flex items-center gap-2 bg-[#111111] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C9CCD1] hover:text-[#111111] transition"
              >
                <Phone className="w-5 h-5" />
                {t(siteConfig.cta.callNow)}
              </a>

              <Link
                href="/portfolio"
                className="flex items-center gap-2 border-2 border-[#111111] text-[#111111] px-6 py-3 rounded-full font-semibold hover:bg-[#111111] hover:text-white transition"
              >
                {t(siteConfig.cta.viewPortfolio)}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* DIFFERENTIALS */}
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
            <p className="uppercase tracking-[0.35em] text-[#111111] mb-3">
              {t({ en: 'Why Choose Us', es: 'Por Qué Elegirnos' })}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
              {t({ en: 'What Sets Us Apart', es: 'Lo Que Nos Distingue' })}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {siteConfig.differentials.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 bg-[#F2F2F2] rounded-2xl shadow-md hover:shadow-lg transition">
                <span className="mt-1 h-3 w-3 rounded-full bg-[#C9CCD1] flex-shrink-0" />
                <p className="text-[#111111] font-medium">
                  {t(item.title)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
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
            <p className="uppercase tracking-[0.35em] text-[#111111] mb-3">
              {t(siteConfig.nav.portfolio)}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-4">
              {t({ en: 'Featured Projects', es: 'Proyectos Destacados' })}
            </h2>

            <p className="text-lg text-[#111111]/80 max-w-2xl mx-auto">
              {t({ en: 'Signature projects showcasing our installation standards and attention to detail.', es: 'Proyectos destacados que muestran nuestros estándares de instalación y atención al detalle.' })}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {portfolioPreview.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-80">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/90 via-[#111111]/40 to-transparent opacity-60 group-hover:opacity-90 transition duration-500" />
                </div>
              </div>
            ))}

          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex bg-[#111111] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#C9CCD1] hover:text-[#111111] transition shadow-lg"
            >
              {t(siteConfig.cta.viewPortfolio)}
            </Link>
          </div>

        </div>
      </section>

      {/* AREAS WE SERVE */}
      <section className="py-20 bg-white relative">

        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/BACKGROUND/Leo Marble backgorund.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">

          <p className="uppercase tracking-[0.35em] text-[#111111] mb-3">
            {t({ en: 'Service Areas', es: 'Áreas de Servicio' })}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-[#111111] mb-8">
            {t({ en: 'Serving Central Florida', es: 'Atendiendo el Centro de Florida' })}
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {siteConfig.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-6 py-3 bg-[#F2F2F2] text-[#111111] rounded-full font-semibold shadow-md"
              >
                {area}
              </span>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#111111] text-white relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/portfolio/LEOWALL07.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t({ en: 'Ready to Start Your Project?', es: '¿Listo para Empezar tu Proyecto?' })}
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            {t(siteConfig.contact.heading)}
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
              href={siteConfig.emailLink}
              className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#111111] transition text-lg"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>

          </div>

          <div className="mt-10 pt-10 border-t border-white/20">
            <p className="text-white/80">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#C9CCD1] transition">{siteConfig.email}</a>
              {' • '}
              <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#C9CCD1] transition">{siteConfig.instagram.handle}</a>
            </p>
          </div>

        </div>
      </section>
    </>
  )
}
