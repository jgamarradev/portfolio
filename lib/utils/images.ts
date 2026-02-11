/**
 * Helper para obtener rutas de imágenes correctas
 * Maneja basePath para producción (GitHub Pages)
 */
export function getImagePath(path: string): string {
  // En desarrollo, las rutas son relativas desde public/
  // En producción, Next.js maneja el basePath automáticamente
  // Pero para imágenes en CSS, necesitamos manejarlo manualmente
  if (typeof window !== 'undefined') {
    // Cliente: usar rutas relativas
    return path.startsWith('/') ? path : `/${path}`
  }
  // Servidor: retornar como está (Next.js manejará basePath)
  return path
}

/**
 * Para usar en estilos CSS inline o background-image
 */
export function getImageUrl(path: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
  return `${basePath}${path.startsWith('/') ? path : `/${path}`}`
}

