'use client'

import { useEffect, useRef } from 'react'
import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'
import Typed from 'typed.js'

export default function Hero() {
  const { t, language } = useI18n()
  const typedElement = useRef<HTMLSpanElement>(null)
  const typedInstance = useRef<Typed | null>(null)

  useEffect(() => {
    if (typedElement.current) {
      // Clean up previous instance
      if (typedInstance.current) {
        typedInstance.current.destroy()
      }

      // Create new instance
      typedInstance.current = new Typed(typedElement.current, {
        strings: [
          t('heroSubtitle1'),
          t('heroSubtitle2'),
          t('heroSubtitle3'),
          t('heroSubtitle4'),
        ],
        typeSpeed: 40,
        backSpeed: 30,
        smartBackspace: false,
        loop: true,
      })
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy()
      }
    }
  }, [language, t])

  return (
    <section className="hero">
      <div className="container-fluid">
        <div className="container">
          <div className="row two-columns">
            <div className="left-column">
              <h1 className="banner-name">
                {t('heroTitle')}
              </h1>
              <div className="type-wrap">
                <span
                  ref={typedElement}
                  className="typed"
                  style={{ whiteSpace: 'pre' }}
                />
              </div>
              <div className="banner-text">
                <p>
                  {t('heroDescription').split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < t('heroDescription').split('\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>
              <div className="download-cv">
                <a
                  href="/curriculum/juanGamarraDevCvSpanish.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('heroDownloadCV')}
                </a>
              </div>
            </div>
            <div className="right-column">
              <div className="banner-img">
                <Image
                  src="/img/banner_image.png"
                  alt="hero_picture"
                  width={600}
                  height={600}
                  priority
                />
              </div>
            </div>
          </div>
          <div className="banner-quote">
            <p>
              {t('heroQuote')}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

