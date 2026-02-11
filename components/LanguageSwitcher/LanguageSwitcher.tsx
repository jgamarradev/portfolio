'use client'

import { useI18n } from '@/lib/i18n/context'

export default function LanguageSwitcher() {
  const { language, setLanguage } = useI18n()

  const handleToggle = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  return (
    <div className="language-switch-container">
      <div className="switch">
        <input
          id="language-toggle"
          className="check-toggle check-toggle-round-flat"
          type="checkbox"
          checked={language === 'en'}
          onChange={handleToggle}
        />
        <label htmlFor="language-toggle"></label>
        <span className="on">ES</span>
        <span className="off">EN</span>
      </div>
    </div>
  )
}

