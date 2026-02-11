# Fase 8: GitHub Pages y CI/CD

## 📋 Objetivo

Configurar el despliegue automático en GitHub Pages usando GitHub Actions, para que cada push a la rama principal despliegue automáticamente el sitio.

## ✅ Configuraciones Realizadas

### Paso 8.1: Configurar next.config.js para GitHub Pages

**Archivo:** `next.config.js`

**Configuraciones aplicadas:**
```javascript
{
  output: 'export',           // Static export (requerido para GitHub Pages)
  images: {
    unoptimized: true,        // Requerido porque GitHub Pages no soporta optimización
  },
  basePath: '/portfolio',     // Ruta base del repositorio
  assetPrefix: '/portfolio',   // Prefijo para assets
  reactStrictMode: true,      // Modo estricto de React
}
```

**Explicación:**
- **`output: 'export'`:** Genera archivos estáticos HTML/CSS/JS en la carpeta `out/`
- **`images.unoptimized: true`:** Desactiva la optimización de imágenes (GitHub Pages no la soporta)
- **`basePath`:** Ruta base del sitio (debe coincidir con el nombre del repositorio)
- **`assetPrefix`:** Prefijo para todos los assets (CSS, JS, imágenes)

**Nota importante:** Si el repositorio tiene otro nombre, cambiar `/portfolio` por el nombre correcto.

### Paso 8.2: Crear Workflow de GitHub Actions

**Archivo:** `.github/workflows/deploy.yml`

**Workflow completo:**
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Cambiar a 'master' si es necesario

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - Checkout código
      - Setup Node.js 20
      - Instalar dependencias (npm ci)
      - Build del proyecto (npm run build)
      - Setup Pages
      - Upload artifact (carpeta out/)
      - Deploy a GitHub Pages
```

**Pasos del workflow:**

1. **Checkout:** Descarga el código del repositorio
2. **Setup Node.js:** Configura Node.js 20 con cache de npm
3. **Install dependencies:** `npm ci` (instalación limpia y rápida)
4. **Build:** `npm run build` genera la carpeta `out/` con archivos estáticos
5. **Setup Pages:** Configura GitHub Pages
6. **Upload artifact:** Sube la carpeta `out/` como artifact
7. **Deploy:** Despliega el artifact a GitHub Pages

**Características:**
- ✅ Ejecuta automáticamente en cada push a `main`
- ✅ Usa Node.js 20 (LTS)
- ✅ Cache de npm para builds más rápidos
- ✅ Concurrency control para evitar despliegues simultáneos
- ✅ Permisos mínimos necesarios

### Paso 8.3: Configurar basePath y assetPrefix

**Ya configurado en Paso 8.1**

**Verificación:**
- `basePath` y `assetPrefix` están configurados en `next.config.js`
- Se aplican solo en producción (`NODE_ENV === 'production'`)
- En desarrollo, las rutas son normales (sin prefijo)

**Impacto:**
- Todas las rutas internas funcionan correctamente
- Assets (CSS, JS, imágenes) se cargan desde la ruta correcta
- Enlaces externos no se ven afectados

## 🚀 Proceso de Despliegue

### Flujo Automático

1. **Push a GitHub:**
   ```bash
   git push origin main
   ```

2. **GitHub Actions se activa:**
   - Detecta el push a `main`
   - Inicia el workflow automáticamente

3. **Build:**
   - Instala dependencias
   - Ejecuta `npm run build`
   - Genera carpeta `out/` con archivos estáticos

4. **Deploy:**
   - Sube `out/` como artifact
   - GitHub Pages lo despliega automáticamente

5. **Sitio disponible:**
   - URL: `https://[usuario].github.io/portfolio/`
   - Tiempo estimado: 2-5 minutos

### Configuración Manual Requerida

**Una sola vez en GitHub:**

1. Ir a **Settings** → **Pages**
2. En **Source**, seleccionar **GitHub Actions**
3. Guardar

Esto habilita GitHub Pages para usar el workflow automático.

## 📝 Archivos de Documentación

### DEPLOY.md

Guía completa de despliegue que incluye:
- Prerrequisitos
- Pasos detallados
- Configuración del repositorio
- Troubleshooting común
- Ajustes de basePath

## ⚙️ Variables de Entorno

**No se requieren variables de entorno** para el despliegue básico.

Si en el futuro se necesitan:
- Crear `.env.production` para variables de producción
- GitHub Secrets para información sensible

## 🔧 Troubleshooting

### Problemas Comunes

1. **El sitio no se despliega:**
   - Verificar que GitHub Pages esté configurado para usar **GitHub Actions**
   - Revisar logs en la pestaña **Actions**
   - Verificar que la rama sea `main` (o ajustar en workflow)

2. **Las imágenes no cargan:**
   - Verificar que las imágenes estén en `public/img/`
   - Verificar que `basePath` coincida con el nombre del repo
   - Las rutas deben ser relativas: `/img/nombre.png`

3. **El sitio se ve roto:**
   - Limpiar caché del navegador
   - Verificar `basePath` en `next.config.js`
   - Revisar consola del navegador para errores

4. **Workflow falla:**
   - Revisar logs en **Actions** → **Deploy to GitHub Pages**
   - Verificar que `package.json` tenga todos los scripts necesarios
   - Verificar que no haya errores de TypeScript

## ✅ Resultado

Sistema de CI/CD completamente configurado:
- ✅ Despliegue automático en cada push
- ✅ Build optimizado para producción
- ✅ Configuración correcta para GitHub Pages
- ✅ Documentación completa
- ✅ Workflow robusto y confiable

## 📊 Ventajas

1. **Automatización:** No requiere intervención manual
2. **Velocidad:** Despliegue en 2-5 minutos
3. **Confiabilidad:** Builds reproducibles
4. **Historial:** Logs de cada despliegue en GitHub Actions
5. **Rollback:** Fácil volver a versiones anteriores

