'use client'

import { siteConfig } from '@/lib/siteConfig'
import { useLanguage } from '@/lib/LanguageContext'
import { Phone, MessageCircle, Mail } from 'lucide-react'

export default function FloatingContactButtons() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      
      {/* WhatsApp Button */}
      <a
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="group bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label={t(siteConfig.cta.whatsapp)}
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Phone Button */}
      <a
        href={siteConfig.phoneLink}
        className="group bg-[#111111] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label={t(siteConfig.cta.callNow)}
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Email Button */}
      <a
        href={siteConfig.emailLink}
        className="group bg-[#C9CCD1] text-[#111111] p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label={t(siteConfig.cta.email)}
      >
        <Mail className="w-6 h-6" />
      </a>

    </div>
  )
}
