/**
 * Base path del proyecto - debe coincidir con el nombre del repo en GitHub Pages
 * Se usa en producción para prefijo de rutas que Next.js no maneja automáticamente:
 * - CSS url()
 * - href de enlaces a assets
 * - inline styles con background-image
 * - metadata (icons, og:image)
 *
 * NOTA: next/image SÍ aplica basePath automáticamente, no necesita este prefijo.
 */
export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/portfolio' : ''

/**
 * Genera ruta completa para assets públicos (CSS url, href, inline styles, metadata)
 * NO usar con el componente next/image (ya aplica basePath automáticamente)
 */
export function getAssetPath(path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${BASE_PATH}${cleanPath}`
}

