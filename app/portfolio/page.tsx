'use client'

import Image from 'next/image'
import Link from 'next/link'
import Gallery from '@/components/Gallery'
import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'

export default function Portfolio() {
  const { t } = useLanguage()

  const portfolioItems = [
    {
      id: 1,
      title: 'Modern Bathroom Installation',
      category: 'Bathroom' as const,
      imageSrc: '/images/portfolio/LEOBATH01.jpg',
      alt: 'Professional bathroom tile installation',
    },
    {
      id: 2,
      title: 'Luxury Shower Design',
      category: 'Bathroom' as const,
      imageSrc: '/images/portfolio/LEOBATH04.jpg',
      alt: 'Custom shower tile work',
    },
    {
      id: 3,
      title: 'Contemporary Bathroom',
      category: 'Bathroom' as const,
      imageSrc: '/images/portfolio/LEOBATH05.jpg',
      alt: 'Modern bathroom installation',
    },
    {
      id: 4,
      title: 'Premium Bathroom Remodel',
      category: 'Bathroom' as const,
      imageSrc: '/images/portfolio/LEOBATH06.jpg',
      alt: 'Luxury bathroom renovation',
    },
    {
      id: 5,
      title: 'Elegant Bathroom Design',
      category: 'Bathroom' as const,
      imageSrc: '/images/portfolio/LEOBATH07.jpg',
      alt: 'Premium bathroom finishes',
    },
    {
      id: 6,
      title: 'Premium Flooring Installation',
      category: 'Flooring' as const,
      imageSrc: '/images/portfolio/LEOFLOOR01.jpg',
      alt: 'Professional floor tile installation',
    },
    {
      id: 7,
      title: 'Decorative Wall Feature',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL01.jpg',
      alt: 'Custom wall tile design',
    },
    {
      id: 8,
      title: 'Statement Wall Installation',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL02.jpg',
      alt: 'Premium wall tile work',
    },
    {
      id: 9,
      title: 'Modern Wall Design',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL04.jpg',
      alt: 'Contemporary wall installation',
    },
    {
      id: 10,
      title: 'Luxury Wall Feature',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL05.jpg',
      alt: 'Elegant wall details',
    },
    {
      id: 11,
      title: 'Custom Wall Project',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL06.jpg',
      alt: 'Custom wall tile',
    },
    {
      id: 12,
      title: 'Designer Wall Installation',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL07.jpg',
      alt: 'Premium wall finishes',
    },
    {
      id: 13,
      title: 'Contemporary Wall Feature',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL08.jpg',
      alt: 'Modern wall design',
    },
    {
      id: 14,
      title: 'Statement Wall Design',
      category: 'Wall' as const,
      imageSrc: '/images/portfolio/LEOWALL09.jpg',
      alt: 'Luxury wall installation',
    },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative pt-48 pb-28 bg-brand-charcoal text-white overflow-hidden">

        <div className="absolute inset-0">
          <Image
            src="/images/portfolio/LEOBATH04.jpg"
            alt="Luxury remodeling portfolio"
            fill
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/90 via-brand-charcoal/70 to-brand-charcoal/90" />
        </div>

        <div className="relative container mx-auto px-4 max-w-3xl">
          <p className="uppercase tracking-[0.45em] text-brand-accent text-sm mb-5">
            {t({ en: 'Portfolio', es: 'Portafolio' })}
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            {t({ 
              en: 'Spaces Transformed Through Craftsmanship', 
              es: 'Espacios Transformados con Artesanía' 
            })}
          </h1>

          <p className="text-lg text-white/90">
            {t({ 
              en: 'Explore finished projects that showcase our installation standards, design precision, and commitment to premium results.',
              es: 'Explore proyectos terminados que muestran nuestros estándares de instalación, precisión en diseño y compromiso con resultados premium.' 
            })}
          </p>
        </div>

      </section>

      {/* INTRO */}
      <section className="py-20 bg-brand-white text-center">

        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-semibold text-brand-charcoal mb-6">
            {t({ en: 'Signature Project Gallery', es: 'Galería de Proyectos' })}
          </h2>

          <p className="text-lg text-brand-charcoal">
            {t({ 
              en: 'Browse our completed flooring installations and bathroom remodels. Each project reflects careful planning, premium materials, and refined finishing.',
              es: 'Explore nuestras instalaciones de pisos y remodelaciones de baños completadas. Cada proyecto refleja planificación cuidadosa, materiales premium y acabados refinados.' 
            })}
          </p>
        </div>

      </section>

      {/* GALLERY */}
      <section className="pb-20 bg-brand-white">
        <div className="container mx-auto px-4">
          <Gallery items={portfolioItems} />
        </div>
      </section>

      {/* DIFFERENTIATOR SECTION */}
      <section className="py-20 bg-brand-white">

        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 text-center">

          {siteConfig.stats.map((stat) => (
            <div
              key={stat.label.en}
              className="rounded-3xl p-8 shadow-premium border border-brand-charcoal/10"
            >
              <div className="text-4xl font-semibold text-brand-primary mb-3">
                {stat.value}
              </div>

              <p className="uppercase tracking-widest text-sm text-brand-charcoal/70">
                {t(stat.label)}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-brand-charcoal text-white text-center">

        <div className="container mx-auto px-4 max-w-2xl">

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            {t({ 
              en: 'Ready To Start Your Own Transformation?', 
              es: '¿Listo para Comenzar tu Propia Transformación?' 
            })}
          </h2>

          <p className="text-lg text-white/80 mb-10">
            {t({ 
              en: 'Schedule a complimentary consultation and receive a detailed remodeling estimate tailored to your home.',
              es: 'Agenda una consulta gratis y recibe un presupuesto detallado de remodelación adaptado a tu hogar.' 
            })}
          </p>

          <Link
            href="/contact"
            className="inline-block bg-brand-primary px-10 py-4 rounded-full font-semibold hover:bg-brand-accent transition shadow-lg"
          >
            {t(siteConfig.cta.contactUs)}
          </Link>

        </div>

      </section>
    </>
  )
}
