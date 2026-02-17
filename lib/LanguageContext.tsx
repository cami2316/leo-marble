'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'es'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: any) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language
    if (savedLang === 'en' || savedLang === 'es') {
      setLanguageState(savedLang)
    }
  }, [])

  // Helper function to translate
  const t = (key: any): string => {
    if (typeof key === 'string') return key
    if (typeof key === 'object' && key !== null) {
      return key[language] || key.en || ''
    }
    return ''
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
