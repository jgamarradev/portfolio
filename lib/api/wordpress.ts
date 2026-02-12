import { Project, ProjectCategory, WPProjectRaw, WPCategoryRaw } from '@/types'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL || ''

/**
 * Limpia el HTML que WordPress agrega al excerpt
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

/**
 * Obtiene la URL de la imagen desde el endpoint de media de WP.
 * Se usa como fallback cuando _embed no devuelve la imagen (ej: error 401).
 */
async function getMediaUrl(mediaId: number): Promise<string> {
  if (!mediaId) return ''
  try {
    const res = await fetch(`${WP_API_URL}/media/${mediaId}`)
    if (!res.ok) return ''
    const media: { source_url?: string } = await res.json()
    return media.source_url || ''
  } catch {
    return ''
  }
}

/**
 * Extrae la URL de la imagen desde _embedded.
 * La respuesta de _embed puede contener un media válido (con source_url)
 * o un error (con code/message) cuando hay 401.
 */
function getEmbeddedImageUrl(embedded: WPProjectRaw['_embedded']): string {
  const media = embedded?.['wp:featuredmedia']
  if (!media || media.length === 0) return ''

  const firstMedia = media[0]
  // Si tiene source_url, es un media válido
  if ('source_url' in firstMedia) {
    return firstMedia.source_url
  }
  // Si tiene 'code', es un error (ej: rest_forbidden)
  return ''
}

/**
 * Obtener todos los proyectos desde WordPress
 */
export async function getProjects(): Promise<Project[]> {
  if (!WP_API_URL) {
    console.error('NEXT_PUBLIC_WP_API_URL no está configurada')
    return []
  }

  const res = await fetch(
    `${WP_API_URL}/proyectos?per_page=100&_embed&orderby=meta_value_num&meta_key=proyecto_orden&order=asc`
  )

  if (!res.ok) {
    throw new Error(`Error fetching projects: ${res.status}`)
  }

  const data: WPProjectRaw[] = await res.json()

  // Mapear los proyectos, resolviendo imágenes que necesiten fallback
  const projects = await Promise.all(
    data.map(async (item): Promise<Project> => {
      // Intentar obtener imagen desde _embedded primero
      let imageUrl = getEmbeddedImageUrl(item._embedded)

      // Fallback: obtener imagen directamente del endpoint de media
      if (!imageUrl && item.featured_media) {
        imageUrl = await getMediaUrl(item.featured_media)
      }

      // Extraer categorías de los términos embebidos
      const embeddedTerms = item._embedded?.['wp:term']
      const categoryTerms = Array.isArray(embeddedTerms) && embeddedTerms.length > 0
        ? embeddedTerms[0]
        : []

      return {
        id: item.id,
        title: item.title.rendered,
        descriptionEs: stripHtml(item.excerpt.rendered),
        descriptionEn: item.meta.descripcion_en || '',
        image: imageUrl,
        url: item.meta.proyecto_url || '',
        order: item.meta.proyecto_orden || 0,
        categories: categoryTerms.map((term) => ({
          id: term.id,
          nameEs: term.name,
          nameEn: term.nombre_en || term.name,
          slug: term.slug,
        })),
      }
    })
  )

  return projects
}

/**
 * Obtener todas las categorías de proyecto
 */
export async function getProjectCategories(): Promise<ProjectCategory[]> {
  if (!WP_API_URL) {
    console.error('NEXT_PUBLIC_WP_API_URL no está configurada')
    return []
  }

  const res = await fetch(
    `${WP_API_URL}/categorias-proyecto?per_page=100`
  )

  if (!res.ok) {
    throw new Error(`Error fetching categories: ${res.status}`)
  }

  const data: WPCategoryRaw[] = await res.json()

  return data.map((term): ProjectCategory => ({
    id: term.id,
    nameEs: term.name,
    nameEn: term.nombre_en || term.name,
    slug: term.slug,
    count: term.count,
  }))
}
