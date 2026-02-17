'use client'

import { useLanguage } from '@/lib/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 bg-brand-charcoal/30 backdrop-blur-sm rounded-full p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`
          px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
          ${language === 'en' 
            ? 'bg-white text-brand-charcoal shadow-md' 
            : 'text-white hover:text-brand-accent'}
        `}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('es')}
        className={`
          px-4 py-2 rounded-full font-medium text-sm transition-all duration-300
          ${language === 'es' 
            ? 'bg-white text-brand-charcoal shadow-md' 
            : 'text-white hover:text-brand-accent'}
        `}
        aria-label="Cambiar a Español"
      >
        ES
      </button>
    </div>
  )
}
