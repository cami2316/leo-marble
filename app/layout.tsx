import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingContactButtons from '@/components/FloatingContactButtons'
import { LanguageProvider } from '@/lib/LanguageContext'
import { siteConfig } from '@/lib/siteConfig'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500', '600'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl || 'http://localhost:3000'),
  
  title: {
    default: `${siteConfig.companyName} | ${siteConfig.heroTitle.en}`,
    template: `%s | ${siteConfig.companyName}`,
  },

  description: siteConfig.heroSubtitle.en,

  keywords: [
    'tile installation Orlando',
    'marble installation Central Florida',
    'tile contractor Orlando FL',
    'marble flooring Tampa',
    'shower tile installer Florida',
    'porcelain tile installation Orlando',
    'Carrara marble installer Florida',
  ],

  openGraph: {
    title: siteConfig.companyName,
    description: siteConfig.heroSubtitle.en,
    url: siteConfig.siteUrl,
    siteName: siteConfig.companyName,
    images: [
      {
        url: siteConfig.defaultImage,
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        <LanguageProvider>
          
          {/* HEADER */}
          <Header />

          {/* PAGE CONTENT */}
          <main className="min-h-screen flex flex-col">
            {children}
          </main>

          {/* FOOTER */}
          <Footer />

          {/* FLOATING CONTACT BUTTONS */}
          <FloatingContactButtons />

        </LanguageProvider>
      </body>
    </html>
  )
}
