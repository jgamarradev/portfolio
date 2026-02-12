'use client'

import { useState, useEffect } from 'react'
import { useI18n } from '@/lib/i18n/context'
import { Project, ProjectCategory } from '@/types'
import { getProjects, getProjectCategories } from '@/lib/api/wordpress'
import { getAssetPath } from '@/lib/utils/images'

// Fallback: datos estáticos locales para cuando la API no esté disponible
import portfolioFallback from '@/data/portfolio.json'

export default function Portfolio() {
  const { t, language } = useI18n()
  const [projects, setProjects] = useState<Project[]>([])
  const [categories, setCategories] = useState<ProjectCategory[]>([])
  const [activeCategory, setActiveCategory] = useState<string>('todos')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const [projectsData, categoriesData] = await Promise.all([
          getProjects(),
          getProjectCategories(),
        ])

        // Si la API devuelve datos, usarlos
        if (projectsData.length > 0) {
          setProjects(projectsData)
          setCategories(categoriesData)
        } else {
          // Fallback a datos estáticos locales
          loadFallbackData()
        }
      } catch (err) {
        console.error('Error loading portfolio from WP API:', err)
        // Fallback a datos estáticos locales si la API falla
        loadFallbackData()
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    function loadFallbackData() {
      const fallback: Project[] = portfolioFallback.map((item) => ({
        id: item.id,
        title: item.title,
        descriptionEs: item.descriptionEs,
        descriptionEn: item.descriptionEn,
        image: `/img/${item.image}`,
        url: item.url,
        categories: [],
        order: item.id,
      }))
      setProjects(fallback)
    }

    fetchData()
  }, [])

  // Filtrar proyectos por categoría activa
  const filteredProjects = activeCategory === 'todos'
    ? projects
    : projects.filter(p =>
        p.categories.some(c => c.slug === activeCategory)
      )

  return (
    <section id="portfolio" className="container">
      <h1 className="title-portfolio">
        {t('portfolioTitle')}
      </h1>

      {/* Filtros de categoría (solo se muestran si hay categorías desde WP) */}
      {categories.length > 0 && (
        <div className="portfolio-filters">
          <button
            className={activeCategory === 'todos' ? 'active' : ''}
            onClick={() => setActiveCategory('todos')}
          >
            {t('portfolioFilterAll')}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={activeCategory === cat.slug ? 'active' : ''}
              onClick={() => setActiveCategory(cat.slug)}
            >
              {language === 'es' ? cat.nameEs : cat.nameEn}
            </button>
          ))}
        </div>
      )}

      {/* Estado de carga */}
      {loading && (
        <div className="portfolio-loading">
          <p>{t('portfolioLoading')}</p>
        </div>
      )}

      {/* Mensaje de error (discreto, ya que se usa fallback) */}
      {error && !loading && projects.length > 0 && (
        <p className="portfolio-error-notice">
          {t('portfolioError')}
        </p>
      )}

      {/* Grid de proyectos */}
      {!loading && (
        <div className="grid_portfolio">
          {filteredProjects.map((project) => {
            // Determinar si la imagen es una URL completa (WP) o una ruta local (fallback)
            const isExternalImage = project.image.startsWith('http')
            const backgroundImage = isExternalImage
              ? project.image
              : getAssetPath(project.image)

            return (
              <div key={project.id} className="item-portfolio">
                <div
                  className="portfolio-container"
                  style={{
                    background: `linear-gradient(to right, rgba(4, 67, 172, 0.6), rgba(4, 67, 172, 0.6)), url('${backgroundImage}') center / cover no-repeat`,
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
            )
          })}
        </div>
      )}
    </section>
  )
}

