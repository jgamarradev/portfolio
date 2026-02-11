'use client'

import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useI18n } from '@/lib/i18n/context'
import LanguageSwitcher from '@/components/LanguageSwitcher/LanguageSwitcher'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useI18n()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Cerrar el menú cuando se hace clic en un enlace (solo en móvil)
  const handleLinkClick = () => {
    // Verificar si estamos en móvil (ancho <= 575px)
    if (window.innerWidth <= 575) {
      closeMenu()
    }
  }

  // Cerrar el menú cuando se redimensiona la ventana a desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 575) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header>
      <div className="header-container">
        <div className="brand-logo">
          <div className="logo-container">
            <Image
              src="/img/header_logo.png"
              alt="header_logo"
              width={204}
              height={40}
              priority
            />
          </div>
          <div
            className="nav-burguer"
            onClick={toggleMenu}
            role="button"
            aria-label="Toggle menu"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleMenu()
              }
            }}
          >
            <i className={`bi bi-list ${isMenuOpen ? 'hidden' : ''}`}></i>
            <i className={`bi bi-chevron-contract ${isMenuOpen ? '' : 'hidden'}`}></i>
          </div>
        </div>
        <div
          className={`nav-menu ${isMenuOpen ? 'block' : 'hidden'}`}
        >
          <nav>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleLinkClick}
            >
              {t('navPortfolio')}
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={handleLinkClick}
            >
              {t('navAbout')}
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              className="contact-button"
              onClick={handleLinkClick}
            >
              <p>{t('navContact')}</p>
            </Link>
            <LanguageSwitcher />
          </nav>
        </div>
      </div>
    </header>
  )
}

