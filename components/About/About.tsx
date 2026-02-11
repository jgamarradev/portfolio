'use client'

import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'
import { Link } from 'react-scroll'

export default function About() {
  const { t } = useI18n()

  return (
    <div id="about" className="container-xxl">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-5">
              <div className="years flex-shrink-0 text-center me-4">
                <h1 className="display-1 mb-0">+5</h1>
                <h5 className="mb-0">{t('aboutYears')}</h5>
              </div>
              <h3 className="lh-base mb-0">
                {t('aboutExperience')}
              </h3>
            </div>
            <p className="mb-4">
              {t('aboutDescription1')}
            </p>
            <p className="mb-3">
              <i className="far fa-check-circle me-3"></i>
              <span>{t('aboutCommitted')}</span>
            </p>
            <p className="mb-3">
              <i className="far fa-check-circle me-3"></i>
              <span>{t('aboutResponsible')}</span>
            </p>
            <p className="mb-3">
              <i className="far fa-check-circle me-3"></i>
              <span>{t('aboutDynamic')}</span>
            </p>
            <div className="download-cv mt-0 pt-4">
              <Link
                to="testimonial"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
              >
                {t('aboutReadMore')}
              </Link>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="row g-3 mb-4">
              <div className="col-sm-6">
                <Image
                  className="img-fluid rounded"
                  src="/img/about-1.jpg"
                  alt="About 1"
                  width={300}
                  height={300}
                />
              </div>
              <div className="col-sm-6">
                <Image
                  className="img-fluid rounded"
                  src="/img/about-2.jpg"
                  alt="About 2"
                  width={300}
                  height={300}
                />
              </div>
            </div>
            <div className="d-flex align-items-center mb-3">
              <h5 className="border-end pe-3 me-3 mb-0">
                {t('aboutHappyClients')}
              </h5>
              <h2 className="fw-bold mb-0" data-toggle="counter-up">+100</h2>
            </div>
            <p className="mb-4">
              {t('aboutHappyClientsDesc')}
            </p>
            <div className="d-flex align-items-center mb-3">
              <h5 className="border-end pe-3 me-3 mb-0">
                {t('aboutProjectsCompleted')}
              </h5>
              <h2 className="fw-bold mb-0" data-toggle="counter-up">+100</h2>
            </div>
            <p className="mb-0">
              {t('aboutProjectsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

