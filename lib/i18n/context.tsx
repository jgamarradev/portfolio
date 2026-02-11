'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import esTranslations from '@/locales/es/common.json'
import enTranslations from '@/locales/en/common.json'

type Language = 'es' | 'en'

type Translations = typeof esTranslations

interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const translations: Record<Language, Translations> = {
  es: esTranslations,
  en: enTranslations,
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'es' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang)
      document.documentElement.lang = lang
    }
  }

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.lang = language
    }
  }, [language, mounted])

  const t = (key: keyof Translations): string => {
    return translations[language][key] || key
  }

  // Siempre proporcionar el contexto, incluso antes de montar
  return (
    <I18nContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

