# Configuración de Imágenes

## 📋 Pasos Iniciales

Una vez que hayas instalado las dependencias con `npm install`, necesitas copiar las imágenes desde el proyecto original.

### Comandos para Copiar Imágenes

#### PowerShell (Windows)
```powershell
# Desde la carpeta portfolio (raíz del proyecto)
Copy-Item -Path "repo-portfolio\img\*" -Destination "portfolio-nextjs\public\img\" -Recurse -Force
Copy-Item -Path "repo-portfolio\curriculum\*" -Destination "portfolio-nextjs\public\curriculum\" -Recurse -Force
```

#### Bash (Linux/Mac)
```bash
# Desde la carpeta portfolio (raíz del proyecto)
cp -r repo-portfolio/img/* portfolio-nextjs/public/img/
cp -r repo-portfolio/curriculum/* portfolio-nextjs/public/curriculum/
```

### Verificación Inicial

Después de copiar, deberías tener:
- `portfolio-nextjs/public/img/` con todas las imágenes (about-1.jpg, banner_image.png, etc.)
- `portfolio-nextjs/public/curriculum/juanGamarraDevCvSpanish.pdf`

---

## 📁 Estructura Requerida

```
public/
├── img/
│   ├── header_logo.png
│   ├── banner_image.png
│   ├── banner_bg.jpg
│   ├── menu_bg.jpg
│   ├── about-1.jpg
│   ├── about-2.jpg
│   ├── established.png
│   ├── polymerfilms.png
│   ├── xperi.png
│   ├── projectcoldcase.png
│   ├── dts.png
│   ├── tivo.png
│   ├── martinhomeexteriors.png
│   ├── allaboutpeds.png
│   ├── the_first_descendant.jpg
│   ├── sky3pr.png
│   ├── insyspr.png
│   ├── intelutions.png
│   ├── testimonial-1.jpg
│   ├── testimonial-2.jpg
│   ├── testimonial-3.jpg
│   └── opengraph-web.png
└── curriculum/
    └── juanGamarraDevCvSpanish.pdf
```

---

## 🔧 Uso Correcto de Imágenes

### En Componentes React

```tsx
import Image from 'next/image'

<Image
  src="/img/banner_image.png"  // Ruta desde public/
  alt="Descripción"
  width={600}
  height={600}
  priority  // Para imágenes above-the-fold
/>
```

### En CSS

```css
.hero {
  background-image: url('/img/banner_bg.jpg');  // Ruta desde public/
}
```

### En Estilos Inline

```tsx
<div style={{
  backgroundImage: `url('/img/nombre.png')`
}}>
```

---

## ⚠️ Notas Importantes

1. **Rutas absolutas:** Siempre usar `/img/` no `./img/` o `img/`
2. **BasePath:** Next.js maneja automáticamente el `basePath` en producción
3. **Desarrollo:** En desarrollo, las rutas funcionan sin `basePath`
4. **Producción:** En producción, Next.js agrega `/portfolio` automáticamente

---

## 🐛 Troubleshooting

### Las imágenes no aparecen en desarrollo

1. Verificar que las imágenes estén en `public/img/`
2. Verificar que las rutas sean absolutas (`/img/...`)
3. Reiniciar el servidor de desarrollo: `npm run dev`

### Las imágenes no aparecen en producción (GitHub Pages)

1. Verificar que `basePath` en `next.config.js` coincida con el nombre del repo
2. Verificar que las imágenes estén en el build (`out/img/`)
3. Verificar la consola del navegador para errores 404

### Error 404 en imágenes

- Verificar la ruta exacta (case-sensitive)
- Verificar que el archivo exista en `public/img/`
- Limpiar caché del navegador

---

## ✅ Verificación Completa

Después de copiar las imágenes, verificar:

1. **Estructura de carpetas:**
   ```bash
   ls portfolio-nextjs/public/img/
   ```

2. **En el navegador:**
   - Abrir DevTools → Network
   - Recargar la página
   - Verificar que las imágenes se carguen (status 200)

3. **En el código:**
   - Buscar todas las referencias a `/img/`
   - Verificar que las rutas sean correctas

---

## 🔍 Helper para Rutas de Imágenes

**Archivo:** `lib/utils/images.ts`

Funciones disponibles:
- `getImagePath()` - Para usar en componentes React
- `getImageUrl()` - Para usar en CSS inline

Estas funciones ayudan a manejar correctamente las rutas con `basePath` en producción.
