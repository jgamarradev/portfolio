# Guía de Despliegue en GitHub Pages

## 📋 Prerrequisitos

1. Tener un repositorio en GitHub
2. Tener permisos de escritura en el repositorio
3. Node.js y npm instalados

## 🚀 Pasos para Desplegar

### 1. Configurar el Repositorio

Asegúrate de que tu repositorio se llame `portfolio` (o ajusta `basePath` en `next.config.js` si tiene otro nombre).

### 2. Configurar GitHub Pages

1. Ve a **Settings** → **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. Guarda los cambios

### 3. Subir el Código

```bash
# Asegúrate de estar en la rama main (o master)
git checkout main

# Agrega todos los archivos
git add .

# Haz commit
git commit -m "Migración a Next.js completa"

# Sube a GitHub
git push origin main
```

### 4. Verificar el Despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verifica que el workflow "Deploy to GitHub Pages" se esté ejecutando
3. Espera a que termine (puede tomar 2-5 minutos)
4. Una vez completado, tu sitio estará disponible en:
   - `https://[tu-usuario].github.io/portfolio/`

## ⚙️ Configuración Actual

- **Base Path:** `/portfolio` (ajusta en `next.config.js` si tu repo tiene otro nombre)
- **Output:** Static export (carpeta `out/`)
- **Imágenes:** Sin optimización (requerido para GitHub Pages)

## 🔧 Ajustar Base Path

Si tu repositorio tiene un nombre diferente a `portfolio`, edita `next.config.js`:

```javascript
basePath: process.env.NODE_ENV === 'production' ? '/tu-nombre-repo' : '',
assetPrefix: process.env.NODE_ENV === 'production' ? '/tu-nombre-repo' : '',
```

## 📝 Notas

- El despliegue es automático en cada push a `main`
- Los cambios pueden tardar unos minutos en aparecer
- Si el workflow falla, revisa los logs en la pestaña **Actions**

## 🐛 Troubleshooting

### El sitio no se despliega
- Verifica que GitHub Pages esté configurado para usar **GitHub Actions**
- Revisa los logs del workflow en **Actions**
- Asegúrate de que la rama principal sea `main` (o cambia en el workflow)

### Las imágenes no cargan
- Verifica que las imágenes estén en `public/img/`
- Asegúrate de que `basePath` esté configurado correctamente
- Las rutas deben ser relativas: `/img/nombre-imagen.png`

### El sitio se ve roto
- Verifica que `basePath` coincida con el nombre del repositorio
- Limpia la caché del navegador
- Revisa la consola del navegador para errores

