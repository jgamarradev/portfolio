# Migración Técnica: HTML/JS → Next.js/TypeScript

## 📋 Resumen

Este documento explica **cómo** se migró el proyecto, no solo **qué** se migró.

---

## ✅ TypeScript: SÍ, se usó completamente

### Configuración TypeScript

**Archivo:** `tsconfig.json`

**Configuración:**
- ✅ Modo estricto activado (`"strict": true`)
- ✅ Todos los archivos son `.ts` o `.tsx` (no `.js`)
- ✅ Tipos definidos en `types/index.ts`
- ✅ Path aliases configurados (`@/*`)

### Archivos TypeScript

- `app/layout.tsx` - Layout principal
- `app/page.tsx` - Página principal
- `components/**/*.tsx` - Todos los componentes
- `lib/**/*.ts` - Utilidades y contexto
- `types/index.ts` - Tipos compartidos

**Ventajas:**
- ✅ Type safety en tiempo de compilación
- ✅ Autocompletado mejorado
- ✅ Detección temprana de errores
- ✅ Mejor documentación del código

---

## 🎨 Estilos: NO se migraron literalmente

### Estrategia de Migración

**NO copiamos los CSS originales tal cual.** En su lugar:

1. **Tailwind CSS** para layout y utilidades
2. **CSS personalizado** en `globals.css` para estilos específicos del diseño original
3. **Adaptación** de los estilos originales a la nueva estructura

### Comparación

#### Proyecto Original
```css
/* Múltiples archivos CSS separados */
styles/
├── style.css (importa todo)
├── hero.css
├── about.css
├── header-nav.css
├── grid-styles.css
├── contact.css
└── ... (13 archivos CSS)
```

#### Proyecto Next.js
```css
/* Un solo archivo globals.css */
app/
└── globals.css (todo en uno, con Tailwind)
```

### Ejemplo de Migración

#### Original (hero.css):
```css
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  background: url("../img/banner_bg.jpg");
  background-size: cover;
}

.banner-name {
  text-transform: uppercase;
  font-size: 4rem;
  background: linear-gradient(90deg, #76f4ff, #00ff47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

#### Migrado (globals.css + Tailwind):
```css
/* En globals.css - estilos específicos */
.hero {
  height: 80vh;
  display: flex;
  align-items: center;
  background-image: url('/img/banner_bg.jpg');
  background-size: cover;
}

.banner-name {
  text-transform: uppercase;
  font-size: 4rem;
  background: linear-gradient(90deg, #76f4ff, #00ff47);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

```tsx
/* En el componente - Tailwind para layout */
<section className="hero min-h-screen flex items-center pt-20">
  <div className="container max-w-7xl mx-auto px-4">
    <h1 className="banner-name text-4xl md:text-6xl font-bold">
      {t('heroTitle')}
    </h1>
  </div>
</section>
```

### Cambios Realizados

1. **Consolidación:** 13 archivos CSS → 1 archivo `globals.css`
2. **Tailwind:** Layout, spacing, responsive → clases de Tailwind
3. **CSS personalizado:** Gradientes, animaciones, estilos únicos → `globals.css`
4. **Rutas:** `../img/` → `/img/` (rutas absolutas desde public/)
5. **Media queries:** Algunas mantenidas, otras reemplazadas por Tailwind breakpoints

### Lo que se MANTUVO igual

- ✅ Gradientes de texto (banner-name, banner-quote)
- ✅ Colores específicos (#00ee42, #033faf, etc.)
- ✅ Animaciones y transiciones
- ✅ Estilos del language switcher
- ✅ Estilos del portfolio grid
- ✅ Estilos del contact section

### Lo que se CAMBIÓ

- ❌ Bootstrap CSS completo → Solo iconos (Bootstrap Icons)
- ❌ Múltiples archivos → Un solo archivo
- ❌ Clases de Bootstrap → Tailwind utilities
- ❌ Media queries complejas → Tailwind breakpoints (donde aplica)

### Recursos Externos (Bootstrap Icons, Font Awesome)

**Problema:** Next.js 13+ App Router no permite usar `<head>` directamente en el layout, y `@import` en CSS no funciona correctamente para recursos externos.

**Original:**
```html
<head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" />
</head>
```

**Migrado (Componente ExternalStyles):**
```tsx
// components/ExternalStyles.tsx
'use client'
import { useEffect } from 'react'

export default function ExternalStyles() {
  useEffect(() => {
    // Inyecta los links dinámicamente en el <head>
    const bootstrapIconsLink = document.createElement('link')
    bootstrapIconsLink.rel = 'stylesheet'
    bootstrapIconsLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css'
    bootstrapIconsLink.id = 'bootstrap-icons-stylesheet'
    document.head.appendChild(bootstrapIconsLink)
    // ... similar para Font Awesome
  }, [])
  return null
}
```

**Cambios:**
- ❌ `<link>` en `<head>` → ✅ Componente cliente que inyecta dinámicamente
- ❌ `@import` en CSS → ✅ Manipulación del DOM vía useEffect
- ✅ Compatible con Next.js 13+ App Router
- ✅ Evita duplicados verificando si los links ya existen

**Uso:**
```tsx
// app/layout.tsx
<ExternalStyles />
```

---

## 💻 JavaScript: NO se migró literalmente

### Estrategia de Migración

**NO copiamos el JavaScript original.** Lo **reescribimos completamente** usando:

1. **React Hooks** en lugar de jQuery
2. **TypeScript** en lugar de JavaScript vanilla
3. **Librerías modernas** en lugar de las antiguas
4. **Componentes React** en lugar de manipulación DOM directa

### Comparación Detallada

#### 1. Menú Hamburguesa

**Original (jQuery):**
```javascript
$(".nav-burguer > i.bi.bi-list").click(function () {
  $(this).hide();
  $(".nav-burguer > i.bi-chevron-contract").show();
  $(".nav-menu").show();
});
```

**Migrado (React Hooks):**
```typescript
const [isMenuOpen, setIsMenuOpen] = useState(false)

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen)
}

// Cerrar menú al hacer clic en enlace (solo móvil)
const handleLinkClick = () => {
  if (window.innerWidth <= 575) {
    setIsMenuOpen(false)
  }
}

// Cerrar menú al redimensionar a desktop
useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth > 575) {
      setIsMenuOpen(false)
    }
  }
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])

// Renderizado condicional
<i className={`bi bi-list ${isMenuOpen ? 'hidden' : ''}`}></i>
<i className={`bi bi-chevron-contract ${isMenuOpen ? '' : 'hidden'}`}></i>
<div className={`nav-menu ${isMenuOpen ? 'block' : 'hidden'}`}>
```

**Cambios:**
- ❌ jQuery → ✅ React useState
- ❌ Manipulación DOM → ✅ Renderizado condicional
- ❌ Selectores CSS → ✅ Estado React
- ✅ Cierre automático del menú al hacer clic en enlaces
- ✅ Cierre automático al redimensionar a desktop
- ✅ Mejoras de accesibilidad (soporte de teclado)

#### 2. Sistema i18n

**Original (JavaScript vanilla):**
```javascript
// translations.js - objeto JavaScript
const translations = {
  es: { navPortfolio: "Portafolio", ... },
  en: { navPortfolio: "Portfolio", ... }
}

// i18n.js - manipulación DOM directa
function updateTextElements(lang) {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = translations[lang][key];
  });
}
```

**Migrado (React Context API):**
```typescript
// Context API con TypeScript
interface I18nContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof Translations) => string
}

// Hook personalizado
const { t, language } = useI18n()

// Uso en componentes
<p>{t('navPortfolio')}</p>
```

**Cambios:**
- ❌ Manipulación DOM → ✅ React Context
- ❌ JavaScript → ✅ TypeScript
- ❌ Atributos data-i18n → ✅ Hook useI18n()
- ❌ localStorage manual → ✅ Integrado en Context

#### 3. Carousel de Testimonios

**Original (Owl Carousel + jQuery):**
```javascript
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  items: 1,
  dots: true,
  loop: true,
});
```

**Migrado (Swiper.js + React):**
```typescript
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

<Swiper
  modules={[Autoplay]}
  autoplay={{ delay: 5000 }}
  loop={true}
  slidesPerView={1}
>
  {testimonials.map(testimonial => (
    <SwiperSlide key={testimonial.id}>
      <TestimonialCard {...testimonial} />
    </SwiperSlide>
  ))}
</Swiper>
```

**Cambios:**
- ❌ Owl Carousel → ✅ Swiper.js (más moderno y mantenido)
- ❌ jQuery → ✅ React components
- ❌ HTML estático → ✅ Mapeo dinámico desde JSON

#### 4. Typed.js

**Original (JavaScript vanilla):**
```javascript
// En i18n.js - inicialización manual
$typed.typed({
  strings: typedStrings,
  typeSpeed: 40,
  backSpeed: 30,
  loop: true,
});
```

**Migrado (React Hooks):**
```typescript
const typedElement = useRef<HTMLSpanElement>(null)
const typedInstance = useRef<Typed | null>(null)

useEffect(() => {
  if (typedElement.current) {
    typedInstance.current = new Typed(typedElement.current, {
      strings: [t('heroSubtitle1'), ...],
      typeSpeed: 40,
      backSpeed: 30,
      loop: true,
    })
  }
  return () => {
    if (typedInstance.current) {
      typedInstance.current.destroy()
    }
  }
}, [language, t])
```

**Cambios:**
- ❌ jQuery wrapper → ✅ Typed.js directo
- ❌ Inicialización global → ✅ useEffect hook
- ❌ Sin limpieza → ✅ Cleanup en return

#### 5. Tabs de Skills

**Original (Bootstrap tabs + jQuery):**
```html
<ul class="nav nav-pills">
  <li><button data-bs-toggle="pill" href="#tab-1">Experience</button></li>
  <li><button data-bs-toggle="pill" href="#tab-2">Education</button></li>
</ul>
<div id="tab-1" class="tab-pane fade show active">...</div>
```

**Migrado (React State):**
```typescript
const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience')

<button onClick={() => setActiveTab('experience')}>
  Experience
</button>
{activeTab === 'experience' && <ExperienceContent />}
{activeTab === 'education' && <EducationContent />}
```

**Cambios:**
- ❌ Bootstrap tabs → ✅ React state
- ❌ jQuery toggle → ✅ useState hook
- ❌ HTML estático → ✅ Renderizado condicional

### Librerías Reemplazadas

| Original | Migrado | Razón |
|----------|---------|-------|
| jQuery | React Hooks | Más moderno, type-safe |
| Owl Carousel | Swiper.js | Mejor mantenido, más features |
| Waypoints.js | Intersection Observer (no usado) | API nativa del navegador |
| react-typed | typed.js directo | Compatible con React 18 |
| Bootstrap JS | React components | Sin dependencias externas |

### Estructura de Código

#### Original
```
scripts/
├── index.js (jQuery)
├── i18n.js (manipulación DOM)
├── translations.js (objeto JS)
├── skills-tab.js (manipulación DOM)
└── ... (8 archivos JS)
```

#### Migrado
```
components/
├── Header/Header.tsx (React + hooks)
├── Hero/Hero.tsx (React + typed.js)
├── Skills/Skills.tsx (React state)
└── ... (componentes React)

lib/
├── i18n/context.tsx (Context API)
└── utils/images.ts (helpers)

data/
└── *.json (datos estructurados)
```

---

## 📊 Resumen de Cambios

### TypeScript
- ✅ **100% TypeScript** - Todos los archivos son `.ts` o `.tsx`
- ✅ Tipos definidos para todos los datos
- ✅ Type safety en todo el proyecto

### Estilos
- ⚠️ **NO migrados literalmente** - Adaptados y consolidados
- ✅ Tailwind CSS para layout y utilidades
- ✅ CSS personalizado para estilos únicos
- ✅ 13 archivos → 1 archivo

### JavaScript
- ⚠️ **NO migrado literalmente** - Completamente reescrito
- ✅ jQuery eliminado completamente
- ✅ React Hooks en lugar de manipulación DOM
- ✅ TypeScript en lugar de JavaScript
- ✅ Librerías modernas

---

## 🎯 Ventajas de la Migración

### TypeScript
- ✅ Detección de errores en tiempo de compilación
- ✅ Autocompletado mejorado
- ✅ Mejor documentación del código
- ✅ Refactoring más seguro

### Estilos
- ✅ Menos código (consolidación)
- ✅ Mejor mantenibilidad
- ✅ Tailwind para desarrollo rápido
- ✅ CSS personalizado solo donde es necesario

### JavaScript
- ✅ Código más limpio y mantenible
- ✅ Sin dependencias de jQuery
- ✅ Componentes reutilizables
- ✅ Mejor performance
- ✅ Type safety

---

## 🔍 Conclusión

**NO se migró literalmente nada.** Todo fue:
- ✅ **Adaptado** (estilos)
- ✅ **Reescrito** (JavaScript)
- ✅ **Mejorado** (TypeScript, React, librerías modernas)

El resultado es un código más moderno, mantenible y type-safe, manteniendo la misma funcionalidad y apariencia visual.

---

## 📚 Documentación Relacionada

Para más detalles sobre correcciones específicas:
- **[Correcciones de Estructuras](./CORRECCIONES-ESTRUCTURAS.md)** - Correcciones de Header, Hero, Contact
- **[Corrección Menú Móvil e Iconos](./CORRECCION-NAV-MOBILE-ICONOS.md)** - Detalles sobre el menú hamburguesa y Bootstrap Icons

