# Portfolio Next.js

Portafolio personal migrado de HTML estático a Next.js con TypeScript y Tailwind CSS.

## ✅ Estado del Proyecto

- ✅ **Fase 1:** Setup inicial completado
- ✅ **Fase 2:** Todos los componentes migrados
- ✅ **Fase 3:** Sistema i18n (ES/EN) implementado
- ✅ **Fase 6:** SEO y Metadata configurados
- ✅ **Fase 8:** GitHub Actions para despliegue automático
- ✅ **Correcciones:** Menú móvil y Bootstrap Icons funcionando correctamente

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Instalar dependencias
npm install

# Copiar imágenes (desde la carpeta portfolio)
Copy-Item -Path "repo-portfolio\img\*" -Destination "portfolio-nextjs\public\img\" -Recurse -Force
Copy-Item -Path "repo-portfolio\curriculum\*" -Destination "portfolio-nextjs\public\curriculum\" -Recurse -Force

# Ejecutar en desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📁 Estructura del Proyecto

```
portfolio-nextjs/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página principal
│   ├── globals.css        # Estilos globales
│   ├── robots.ts          # robots.txt dinámico
│   └── sitemap.ts         # sitemap.xml dinámico
├── components/             # Componentes React
│   ├── Header/            # Navegación y menú
│   ├── Hero/              # Sección hero con typed.js
│   ├── About/             # Sección sobre mí
│   ├── Portfolio/        # Grid de proyectos
│   ├── Skills/            # Habilidades y experiencia
│   ├── Testimonials/     # Testimonios con Swiper
│   ├── Contact/           # Información de contacto
│   ├── LanguageSwitcher/  # Selector de idioma
│   └── ExternalStyles/   # Carga de Bootstrap Icons y Font Awesome
├── lib/                    # Utilidades
│   ├── i18n/              # Sistema de internacionalización
│   └── utils/             # Utilidades generales (images.ts)
├── data/                   # Datos estáticos (JSON)
│   ├── portfolio.json
│   ├── experience.json
│   ├── education.json
│   └── testimonials.json
├── locales/                # Traducciones
│   ├── es/common.json
│   └── en/common.json
├── public/                 # Assets estáticos
│   ├── img/               # Imágenes
│   └── curriculum/        # CV en PDF
├── types/                  # Tipos TypeScript
├── styles/                 # Estilos CSS originales
└── .github/workflows/      # GitHub Actions
```

## 🛠️ Tecnologías

- **Next.js 14** - Framework React
- **React 18** - Biblioteca UI
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **typed.js** - Animación de texto
- **Swiper.js** - Carousel de testimonios
- **react-scroll** - Navegación suave

## 🌐 Características

- ✅ **i18n:** Soporte para Español e Inglés
- ✅ **Responsive:** Diseño adaptativo
- ✅ **SEO:** Metadata, Open Graph, sitemap
- ✅ **Performance:** Optimizado para producción
- ✅ **CI/CD:** Despliegue automático con GitHub Actions

## 📦 Despliegue

El proyecto está configurado para desplegarse automáticamente en GitHub Pages.

Ver [Guía de Despliegue](./docs/deployment/github-pages.md) para instrucciones detalladas.

## 📝 Documentación

### 📚 Índice Completo
- **[docs/README.md](./docs/README.md)** - Índice completo de toda la documentación

### 🚀 Guías de Inicio
- **[Instalación](./docs/getting-started/installation.md)** - Guía de instalación y configuración
- **[Configuración de Imágenes](./docs/getting-started/images-setup.md)** - Cómo copiar y configurar imágenes
- **[Análisis del Proyecto](./docs/getting-started/project-analysis.md)** - Análisis del proyecto original

### 💻 Desarrollo
- **[Build y Desarrollo](./docs/development/build.md)** - Comandos y guías de desarrollo
- **[Troubleshooting](./docs/development/troubleshooting.md)** - Solución de problemas comunes

### 🔄 Migración por Fases
- **[Overview de Migración](./docs/migration/overview.md)** - Vista general del proceso
- **[Fase 1: Setup Inicial](./docs/migration/phases/phase-1-setup.md)** - Preparación y configuración
- **[Fase 2: Componentes](./docs/migration/phases/phase-2-components.md)** - Migración de componentes
- **[Fase 3: i18n](./docs/migration/phases/phase-3-i18n.md)** - Sistema de internacionalización
- **[Fase 4-5: Estilos y Funcionalidades](./docs/migration/phases/phase-4-5-styles-features.md)** - CSS y JavaScript
- **[Fase 6: SEO](./docs/migration/phases/phase-6-seo.md)** - Metadata y optimización SEO
- **[Fase 8: Deployment](./docs/migration/phases/phase-8-deployment.md)** - GitHub Pages y CI/CD
- **[Detalles Técnicos](./docs/migration/technical-details.md)** - Cómo se migró TypeScript, estilos y JavaScript

### 🔧 Correcciones y Fixes
- **[Header y Logo](./docs/fixes/header-logo.md)** - Corrección del logo del header
- **[Menú Móvil e Iconos](./docs/fixes/mobile-menu-icons.md)** - Corrección del menú hamburguesa y Bootstrap Icons
- **[Skills Tabs](./docs/fixes/skills-tabs.md)** - Corrección de los tabs de experiencia/educación
- **[Colores y Cursor](./docs/fixes/colors-cursor.md)** - Restauración de colores blancos y cursor pointer
- **[Verificación de Estructuras](./docs/fixes/structure-verification.md)** - Verificación completa de HTML/CSS

### 🚀 Deployment
- **[GitHub Pages](./docs/deployment/github-pages.md)** - Configuración y despliegue en GitHub Pages

### 📊 Análisis
- **[Análisis de Documentación](./docs/ANALISIS-DOCUMENTACION.md)** - Análisis completo de la documentación del proyecto

## 🔗 Enlaces

- **Repositorio:** [GitHub](https://github.com/jgamarradev/portfolio)
- **Sitio en vivo:** [GitHub Pages](https://jgamarradev.github.io/portfolio/)

