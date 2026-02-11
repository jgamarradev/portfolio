'use client'

import { useI18n } from '@/lib/i18n/context'
import Image from 'next/image'
import portfolioData from '@/data/portfolio.json'
import { Project } from '@/types'
import { getAssetPath } from '@/lib/utils/images'

export default function Portfolio() {
  const { t, language } = useI18n()
  const projects = portfolioData as Project[]

  return (
    <section id="portfolio" className="container">
      <h1 className="title-portfolio">
        {t('portfolioTitle')}
      </h1>
      <div className="grid_portfolio">
        {projects.map((project) => (
          <div key={project.id} className={`item-portfolio`} id={`portfolio-${project.id}`}>
            <div
              className="portfolio-container"
              style={{
                background: `linear-gradient(to right, rgba(4, 67, 172, 0.6), rgba(4, 67, 172, 0.6)), url('${getAssetPath(`/img/${project.image}`)}') center / cover no-repeat`,
              }}
            >
              <div className="project-description">
                <p>
                  {language === 'es' ? project.descriptionEs : project.descriptionEn}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t('portfolioViewWebsite')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

