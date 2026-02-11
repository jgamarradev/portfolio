# Guía de Instalación

## 📋 Prerrequisitos

- Node.js 18+ instalado
- npm o yarn disponible
- Git configurado

## 🚀 Instalación Rápida

### 1. Instalar Dependencias

```bash
cd portfolio-nextjs
npm install
```

### 2. Copiar Imágenes

Ver la guía completa en [Configuración de Imágenes](./images-setup.md)

```powershell
# PowerShell (Windows)
Copy-Item -Path "..\repo-portfolio\img\*" -Destination "public\img\" -Recurse -Force
Copy-Item -Path "..\repo-portfolio\curriculum\*" -Destination "public\curriculum\" -Recurse -Force
```

### 3. Iniciar Servidor de Desarrollo

```bash
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

---

## ✅ Verificación de Instalación

### Comprobar Dependencias

```bash
npm list --depth=0
```

### Verificar Estructura de Carpetas

```
portfolio-nextjs/
├── app/
├── components/
├── public/
│   ├── img/          # ✅ Debe contener todas las imágenes
│   └── curriculum/   # ✅ Debe contener el PDF del CV
├── data/
├── locales/
└── package.json
```

---

## 📦 Dependencias Principales

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **typed.js** - Animación de texto
- **Swiper.js** - Carousel
- **react-scroll** - Navegación suave

---

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Build para producción
npm start            # Servidor de producción local

# Calidad de Código
npm run lint         # Ejecutar ESLint
```

---

## 📝 Notas Importantes

1. **Primera vez:** Ejecutar `npm install` antes de cualquier comando
2. **Imágenes:** Son necesarias para que el sitio funcione correctamente
3. **BasePath:** Configurado para `/portfolio` (ajustar si el repo tiene otro nombre)

---

## 🐛 Problemas Comunes

### npm no está disponible

- Verificar que Node.js esté instalado: `node --version`
- Reiniciar la terminal después de instalar Node.js
- Verificar que Node.js esté en el PATH del sistema

### Las imágenes no cargan

- Ver [Configuración de Imágenes](./images-setup.md) para troubleshooting completo

### Error de TypeScript

- Verificar que todas las dependencias estén instaladas
- Ejecutar `npm install` nuevamente

---

## 📚 Próximos Pasos

Una vez instalado correctamente:

1. ✅ Verificar que el sitio carga en `http://localhost:3000`
2. ✅ Verificar que todas las imágenes se muestran
3. ✅ Probar el cambio de idioma (ES/EN)
4. ✅ Revisar la [documentación de desarrollo](../development/build.md)
