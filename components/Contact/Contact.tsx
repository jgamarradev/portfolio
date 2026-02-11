'use client'

import { useI18n } from '@/lib/i18n/context'

export default function Contact() {
  const { t } = useI18n()

  return (
    <section className="container">
      <div id="contact" className="w3-container w3-padding-large w3-grey">
        <h4 className="contact">
          <b>{t('contactTitle')}</b>
        </h4>
        <div className="contact-container">
          <a href="https://wa.me/+584128918141" target="_blank" rel="noopener noreferrer">
            <p><i className="bi bi-phone"></i></p>
            <p>+58 412 891 81 41</p>
          </a>

          <a href="mailto:juangamarra.developer@gmail.com" target="_blank" rel="noopener noreferrer">
            <p><i className="bi bi-envelope"></i></p>
            <p>juangamarra.developer@gmail.com</p>
          </a>

          <a href="https://maps.app.goo.gl/eAHmTbPgh5wyyo8s8" target="_blank" rel="noopener noreferrer">
            <p>
              <i className="bi bi-geo-alt-fill"></i>
            </p>
            <p>Carabobo, VE</p>
          </a>
        </div>
      </div>
    </section>
  )
}

