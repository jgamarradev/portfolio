# Utilidad: Manejo de Imágenes (images.ts)

## 📋 Descripción

El archivo `lib/utils/images.ts` contiene funciones helper para manejar correctamente las rutas de imágenes, especialmente considerando el `basePath` necesario para GitHub Pages.

## 📍 Ubicación

```
lib/utils/images.ts
```

## 🎯 Propósito

Cuando Next.js se despliega en GitHub Pages con un `basePath` (ej: `/portfolio`), las rutas de imágenes necesitan ser manejadas correctamente. Estas funciones helper aseguran que las imágenes funcionen tanto en desarrollo como en producción.

## 🔧 Funciones Disponibles

### 1. `getImagePath(path: string): string`

Obtiene la ruta correcta de una imagen considerando el entorno.

**Parámetros:**
- `path`: Ruta de la imagen (ej: `/img/logo.png` o `img/logo.png`)

**Retorna:** `string` - Ruta formateada correctamente

**Lógica:**
- En el cliente: Retorna la ruta con `/` al inicio si no lo tiene
- En el servidor: Retorna la ruta tal cual (Next.js maneja el basePath automáticamente)

**Ejemplo:**
```typescript
import { getImagePath } from '@/lib/utils/images'

const imagePath = getImagePath('img/logo.png')
// Cliente: '/img/logo.png'
// Servidor: 'img/logo.png' (Next.js agregará basePath)
```

### 2. `getImageUrl(path: string): string`

Obtiene la URL completa de una imagen incluyendo el basePath cuando es necesario.

**Parámetros:**
- `path`: Ruta de la imagen (ej: `/img/logo.png` o `img/logo.png`)

**Retorna:** `string` - URL completa con basePath si es producción

**Lógica:**
- En producción: Agrega `/portfolio` al inicio
- En desarrollo: Retorna la ruta normal

**Ejemplo:**
```typescript
import { getImageUrl } from '@/lib/utils/images'

const imageUrl = getImageUrl('/img/logo.png')
// Desarrollo: '/img/logo.png'
// Producción: '/portfolio/img/logo.png'
```

## 📝 Código Completo

```typescript
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
```

## 🎨 Casos de Uso

### 1. En Componentes React

```typescript
import Image from 'next/image'
import { getImagePath } from '@/lib/utils/images'

export default function MyComponent() {
  const imagePath = getImagePath('/img/hero.jpg')
  
  return (
    <Image
      src={imagePath}
      alt="Hero"
      width={1200}
      height={600}
    />
  )
}
```

### 2. En Estilos CSS Inline

```typescript
import { getImageUrl } from '@/lib/utils/images'

export default function Hero() {
  const bgImage = getImageUrl('/img/hero-bg.jpg')
  
  return (
    <div style={{ backgroundImage: `url(${bgImage})` }}>
      {/* Contenido */}
    </div>
  )
}
```

### 3. En Background Images (CSS)

```typescript
import { getImageUrl } from '@/lib/utils/images'

const bgImage = getImageUrl('/img/background.jpg')

// Usar en className o style
<div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
```

## ⚠️ Notas Importantes

### 1. **Next.js Image Component**
- El componente `Image` de Next.js maneja automáticamente el `basePath`
- Para `Image`, usar rutas normales: `/img/logo.png`
- Las funciones helper son útiles para casos especiales

### 2. **CSS Background Images**
- Para `background-image` en CSS, usar `getImageUrl()`
- Esto asegura que funcione en producción con basePath

### 3. **Rutas Absolutas vs Relativas**
- Las funciones normalizan las rutas automáticamente
- Funcionan con o sin `/` al inicio

### 4. **Entorno de Producción**
- El basePath está hardcodeado como `/portfolio`
- Si el repositorio cambia de nombre, actualizar en `next.config.js` y aquí

## 🔄 Relación con next.config.js

El `basePath` en `next.config.js`:
```javascript
basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
```

Debe coincidir con el valor en `getImageUrl()`:
```typescript
const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : ''
```

## ✅ Estado Actual

- ✅ Funciones implementadas y funcionando
- ✅ Compatible con desarrollo y producción
- ✅ Maneja correctamente el basePath
- ⚠️ BasePath hardcodeado (considerar variable de entorno en el futuro)

## 🔮 Mejoras Futuras

1. **Variable de Entorno:** Usar `process.env.NEXT_PUBLIC_BASE_PATH` en lugar de hardcodear
2. **Type Safety:** Agregar tipos más estrictos
3. **Validación:** Validar que las rutas sean válidas
4. **Optimización:** Cache de rutas procesadas

---

*Última actualización: Diciembre 2024*
