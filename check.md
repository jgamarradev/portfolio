# Checklist de Migración - Portafolio Juan Gamarra

> **Propósito**: Documentación completa del proyecto HTML estático original para verificar que todo esté correctamente migrado al proyecto Next.js.

---

## Índice

1. [Resumen del Proyecto](#1-resumen-del-proyecto)
2. [Estructura del Proyecto](#2-estructura-del-proyecto)
3. [Componentes y Secciones](#3-componentes-y-secciones)
4. [SEO - Verificación Completa](#4-seo---verificación-completa)
5. [Internacionalización (i18n)](#5-internacionalización-i18n)
6. [Assets e Imágenes](#6-assets-e-imágenes)
7. [Dependencias Externas](#7-dependencias-externas)
8. [Scripts y Funcionalidad](#8-scripts-y-funcionalidad)
9. [Estilos CSS](#9-estilos-css)
10. [Checklist de Migración Next.js](#10-checklist-de-migración-nextjs)

---

## 1. Resumen del Proyecto

| Aspecto | Detalle |
|--------|---------|
| **Tipo** | Portfolio personal estático (HTML/CSS/JS) |
| **Deploy original** | GitHub Pages: `https://jgamarradev.github.io/portfolio/` |
| **Idiomas** | Español (ES) e Inglés (EN) |
| **Persona** | Juan Gamarra - Desarrollador Web Fullstack |
| **Experiencia** | +5 años |
| **Sin build system** | No hay `package.json` - archivos estáticos puros |

---

## 2. Estructura del Proyecto

```
repo-portfolio/
├── index.html              # Página única (SPA-style)
├── robots.txt              # SEO: Directivas para crawlers
├── sitemap.xml             # SEO: Mapa del sitio
├── curriculum/
│   └── juanGamarraDevCvSpanish.pdf
├── img/                    # 25 imágenes
├── scripts/
│   ├── i18n.js             # Sistema de idiomas
│   ├── index.js            # Navegación y carrusel
│   ├── owl.carousel.min.js
│   ├── skills-tab.js       # Tabs Experience/Education
│   ├── translations.js     # Textos ES/EN
│   ├── typed_library.js    # Placeholder
│   ├── typed.js            # Animación de texto
│   └── waypoints.min.js
└── styles/
    ├── style.css           # CSS principal (importa módulos)
    ├── about.css
    ├── bootstrap.min.css
    ├── contact.css
    ├── globals.css
    ├── grid-styles.css
    ├── header-nav.css
    ├── hero.css
    ├── language-switch.css
    ├── owl.carousel.min.css
    ├── skill.css
    ├── testimonials.css
    └── typed.css
```

---

## 3. Componentes y Secciones

### 3.1 Header

- **Logo**: `img/header_logo.png`
- **Navegación**:
  - Portafolio → `#portfolio`
  - Acerca de Mí → `#about-me` (id real en HTML: `#about`)
  - Contacto → `#contact` (con clase `.contact-button`)
- **Menú móvil**: Iconos Bootstrap (`bi-list`, `bi-chevron-contract`)
- **Selector de idioma**: Toggle ES/EN con `#language-toggle`
- **Estilos**: `header-nav.css`, `hero.css` (parte del header)

### 3.2 Hero

- **Nombre**: "Juan Gamarra"
- **Typed.js**: 4 cadenas rotativas (ver sección i18n)
- **Descripción**: Texto con `data-i18n="heroDescription"`
- **CTA**: Descarga de CV → `./curriculum/juanGamarraDevCvSpanish.pdf`
- **Imagen**: `img/banner_image.png`
- **Frase**: `data-i18n="heroQuote"`
- **Fondo**: `img/banner_bg.jpg`, `img/menu_bg.jpg` (header)

### 3.3 About (Acerca de Mí)

- **ID**: `#about` (también referenciado como `#about-me` en nav)
- **Métricas**: +5 años experiencia, +100 clientes, +100 proyectos
- **Descripción** con `data-i18n`
- **Cualidades**: Comprometido, Responsable, Dinámico (con iconos Font Awesome)
- **Imágenes**: `img/about-1.jpg`, `img/about-2.jpg`
- **Link**: "Leer más" → `#testimonial`

### 3.4 Portfolio

- **ID**: `#portfolio`
- **Título**: `data-i18n="portfolioTitle"`
- **12 proyectos** en grid:

| # | Imagen | Proyecto | URL |
|---|--------|----------|-----|
| 1 | established.png | Established | https://established.inc/ |
| 2 | polymerfilms.png | Polymerfilms | https://polymerfilms.com |
| 3 | xperi.png | Xperi | https://xperi.com |
| 4 | projectcoldcase.png | Project Cold Case | https://projectcoldcase.org/ |
| 5 | dts.png | DTS | https://dts.com |
| 6 | tivo.png | TiVo | https://www.tivo.com |
| 7 | martinhomeexteriors.png | Martin Home Exteriors | https://martinhomeexteriors.com |
| 8 | allaboutpeds.png | All About Peds | https://allaboutpeds.com |
| 9 | the_first_descendant.jpg | The First Descendant | https://hdr10plus.org/the-first-descendant/ |
| 10 | sky3pr.png | Sky3PR | https://sky3pr.com |
| 11 | insyspr.png | InsysPR | https://insyspr.com |
| 12 | intelutions.png | Intelutions | https://intelutions.net |

- Cada item tiene `data-i18n` para descripción y "Ver Website"

### 3.5 Skills / Expertise

- **ID**: `#skill`
- **Título**: `data-i18n="skillsTitle"`
- **Habilidades** (14): Javascript/TypeScript, React/Vue, Sass/Less, jQuery/Bootstrap, Gulp/Webpack, Node/Express, PHP/Laravel, SQL/MySQL, Git, Docker, WordPress, Metodologías Ágiles, Azure DevOps, Zapier
- **Tabs**:
  - **Experience**: 6 trabajos (Freelancer, Roots, Mindshare, Capital Minds, etc.)
  - **Education**: Universidad de Carabobo + certificaciones LinkedIn
- **Script**: `skills-tab.js` (alterna entre tabs)

### 3.6 Testimonials

- **ID**: `#testimonial`
- **Título**: `data-i18n="testimonialsTitle"`
- **Carrusel** Owl Carousel con 3 testimonios:
  1. **Lane Cooper** - Editorial Director at BizTechReports
  2. **Lourdes Carrerá** - Mercadeo, Relaciones Públicas
  3. **Jesús Cabrera** - Software Developer
- **Imágenes**: `testimonial-1.jpg`, `testimonial-2.jpg`, `testimonial-3.jpg`

### 3.7 Contact

- **ID**: `#contact`
- **Título**: `data-i18n="contactTitle"`
- **Información**:
  - Teléfono/WhatsApp: +58 412 891 81 41 → `https://wa.me/+584128918141`
  - Email: juangamarra.developer@gmail.com → `mailto:`
  - Ubicación: Carabobo, VE → `https://maps.app.goo.gl/eAHmTbPgh5wyyo8s8`
- **Iconos**: Bootstrap Icons (bi-phone, bi-envelope, bi-geo-alt-fill)

---

## 4. SEO - Verificación Completa

### 4.1 robots.txt

**Ubicación**: `/robots.txt` (raíz del sitio)

```
User-agent: *
Allow: /

Sitemap: https://jgamarradev.github.io/portfolio/sitemap.xml
```

**⚠️ Para Next.js**:
- Crear `public/robots.txt` O usar `next.config.js` con rewrites
- **Actualizar URL del Sitemap** si el dominio cambia (ej: juangamarra.dev, Vercel, etc.)

### 4.2 sitemap.xml

**Ubicación**: `/sitemap.xml` (raíz)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://jgamarradev.github.io/portfolio/</loc>
    <lastmod>2024-12-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

**⚠️ Para Next.js**:
- Si hay múltiples rutas (ES/EN), incluir todas en el sitemap
- Considerar `next-sitemap` o sitemap dinámico
- Actualizar `loc` con el dominio final

### 4.3 Meta Tags en `<head>`

| Tag | Valor/Contenido |
|-----|-----------------|
| `charset` | UTF-8 |
| `viewport` | width=device-width, initial-scale=1.0 |
| `title` | Juan Gamarra - Desarrollador Web Fullstack - Portafolio |
| `meta name="description"` | 5 años creando experiencias web memorables... |
| `link rel="canonical"` | https://jgamarradev.github.io/portfolio/ |
| `meta property="og:locale"` | es_VE (cambia a en_US en i18n) |
| `og:type` | website |
| `og:title` | Juan Gamarra - Desarrollador Web - Fullstack Portafolio |
| `og:description` | (igual que meta description) |
| `og:url` | https://jgamarradev.github.io/portfolio/ |
| `og:site_name` | Juan Gamarra - Desarrollador Web Fullstack - Portafolio |
| `og:image` | https://jgamarradev.github.io/portfolio/img/opengraph-web.png |
| `og:image:width` | 1200 |
| `og:image:height` | 630 |
| `og:image:type` | image/png |
| `twitter:card` | summary_large_image |
| `twitter:title` | (igual que og:title) |
| `twitter:description` | (igual que og:description) |
| `twitter:image` | (igual que og:image) |
| `google-site-verification` | zTyColk3VTYRuY_JGlSriM6TO5qWq21kMa63m0lWgJ8 |

**⚠️ i18n**: En el proyecto original, i18n.js actualiza dinámicamente: `title`, `meta description`, `og:title`, `og:description`, `og:locale`, `twitter:title`, `twitter:description`.

### 4.4 Imagen Open Graph

- **Archivo**: `img/opengraph-web.png`
- **Dimensiones**: 1200x630px (recomendado para OG/Twitter)
- **Debe estar en la URL pública** del sitio Next.js

### 4.5 Elementos que podrían faltar en Next.js

- [ ] `hreflang` para alternativas ES/EN (si las rutas cambian por idioma)
- [ ] `robots` meta en páginas específicas (si aplica)
- [ ] Schema.org JSON-LD (Person, WebSite) - **no está en el original** pero es recomendable añadir en Next

---

## 5. Internacionalización (i18n)

### 5.1 Sistema

- **localStorage key**: `language` (`es` | `en`)
- **Default**: `es`
- **Atributo HTML**: `data-i18n="key"` en elementos
- **Archivo**: `scripts/translations.js` (objeto `translations`)

### 5.2 Claves de traducción (data-i18n)

| Categoría | Claves |
|-----------|--------|
| Nav | `navPortfolio`, `navAbout`, `navContact` |
| Hero | `heroTitle`, `heroSubtitle1-4`, `heroDescription`, `heroDownloadCV`, `heroQuote` |
| About | `aboutYears`, `aboutExperience`, `aboutDescription1`, `aboutCommitted`, `aboutResponsible`, `aboutDynamic`, `aboutReadMore`, `aboutHappyClients`, `aboutHappyClientsDesc`, `aboutProjectsCompleted`, `aboutProjectsDesc` |
| Portfolio | `portfolioTitle`, `portfolio1Desc` - `portfolio12Desc`, `portfolioViewWebsite` |
| Skills | `skillsTitle`, `tabExperience`, `tabEducation` |
| Experience | `jobTitle`, `jobPeriod1-6`, `jobCompany1-6` |
| Education | `eduTelecom`, `eduTelecomPeriod`, `eduTelecomUni`, `eduSpecialist1-2`, `eduDeveloper1-3`, `eduWordPress`, `eduSEO`, `eduLinkedIn` |
| Testimonials | `testimonialsTitle` |
| Contact | `contactTitle` |
| Meta | `metaTitle`, `metaDescription`, `metaOGTitle`, `metaOGDescription` |

### 5.3 Typed.js - Cadenas por idioma

- ES: "Desarrollador Web", "Desarrollador Front end", "Desarrollador Back end", "Experto Wordpress"
- EN: "Web Developer", "Front end Developer", "Back end Developer", "WordPress Expert"

### 5.4 Comportamiento

- `document.documentElement.lang` se actualiza (`es`/`en`)
- Meta tags se actualizan en tiempo real al cambiar idioma
- Typed.js se reinicializa con las cadenas del idioma activo
- Checkbox: unchecked = ES, checked = EN

---

## 6. Assets e Imágenes

### 6.1 Imágenes del proyecto

| Archivo | Uso |
|---------|-----|
| about-1.jpg, about-2.jpg | Sección About |
| allaboutpeds.png | Portfolio #8 |
| banner_bg.jpg | Fondo (hero/global) |
| banner_image.png | Imagen principal hero |
| dts.png | Portfolio #5 |
| established.png | Portfolio #1 |
| header_logo.png | Logo del header |
| insyspr.png | Portfolio #11 |
| intelutions.png | Portfolio #12 |
| martinhomeexteriors.png | Portfolio #7 |
| menu_bg.jpg | Fondo del header |
| opengraph-web.png | OG/Twitter share image |
| polymerfilms.png | Portfolio #2 |
| projectcoldcase.png | Portfolio #4 |
| sky3pr.png | Portfolio #10 |
| testimonial-1.jpg, 2, 3 | Testimonios |
| the_first_descendant.jpg | Portfolio #9 |
| tivo.png | Portfolio #6 |
| wideframe.jpg | (verificar uso) |
| xperi.png | Portfolio #3 |

### 6.2 Curriculum

- `curriculum/juanGamarraDevCvSpanish.pdf` - Enlace de descarga en Hero

---

## 7. Dependencias Externas (CDN)

| Recurso | URL |
|---------|-----|
| jQuery 3.7.1 | https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js |
| Bootstrap Icons 1.11.3 | https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css |
| Font Awesome 5.10.0 | https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css |
| Google Font - Libre Franklin | https://fonts.googleapis.com/css2?family=Libre+Franklin... |

**Nota**: Bootstrap CSS se usa localmente (`bootstrap.min.css`). No hay Bootstrap JS (los tabs se manejan con `skills-tab.js`).

---

## 8. Scripts y Funcionalidad

### 8.1 Orden de carga de scripts

1. `typed_library.js` - Placeholder
2. `owl.carousel.min.js` - Carrusel testimonios
3. `waypoints.min.js` - Animaciones al scroll
4. `skills-tab.js` - Tabs Experience/Education
5. `translations.js` - Datos de traducción (debe cargar antes de i18n)
6. `i18n.js` - Sistema de idiomas (inicializa Typed)
7. `typed.js` - Plugin Typed.js (jQuery)
8. `index.js` - Menú hamburguesa, waypoints, owl carousel

### 8.2 index.js - Funcionalidad

- **Menú móvil**: Toggle entre `bi-list` y `bi-chevron-contract`, muestra/oculta `.nav-menu`
- **Waypoints**: Anima `.progress-bar` cuando está al 80% del viewport
- **Owl Carousel**: Testimonios con autoplay, 1 item, dots, loop

### 8.3 skills-tab.js

- Alterna entre `#tab-1` (Experience) y `#tab-2` (Education)
- Usa `data-bs-toggle="pill"` en HTML pero la lógica es vanilla JS
- Inicializa mostrando tab 1

---

## 9. Estilos CSS

### 9.1 Importaciones en style.css

```css
@import url("./globals.css");
@import url("./hero.css");
@import url("./about.css");
@import url("./header-nav.css");
@import url("./typed.css");
@import url("./grid-styles.css");
@import url("./owl.carousel.min.css");
@import url("./skill.css");
@import url("./testimonials.css");
@import url("./contact.css");
```

### 9.2 Hojas adicionales (enlazadas en HTML)

- `bootstrap.min.css`
- `language-switch.css`

---

## 10. Checklist de Migración Next.js

### SEO

- [ ] `robots.txt` en `public/` o generado dinámicamente
- [ ] `sitemap.xml` con URLs correctas (actualizar dominio)
- [ ] Meta tags básicos: title, description, canonical
- [ ] Open Graph: og:title, og:description, og:image, og:url, og:locale, etc.
- [ ] Twitter Cards: twitter:card, twitter:title, twitter:description, twitter:image
- [ ] Imagen OG 1200x630 en `/img/opengraph-web.png` o equivalente
- [ ] `google-site-verification` si se usa Google Search Console
- [ ] `hreflang` si hay rutas separadas por idioma (ej: /es, /en)
- [ ] Canonical URL actualizada al dominio final

### Componentes y contenido

- [ ] Header con logo, navegación, menú móvil, selector idioma
- [ ] Hero con nombre, Typed.js (o alternativa), descripción, botón CV
- [ ] Sección About con métricas, descripción, imágenes
- [ ] Portfolio con 12 proyectos e imágenes
- [ ] Skills con 14 habilidades listadas
- [ ] Tabs Experience (6 trabajos) y Education (certificaciones)
- [ ] Testimonios: 3 items con carrusel
- [ ] Contact con teléfono, email, ubicación (enlaces correctos)

### i18n

- [ ] Sistema ES/EN con persistencia (localStorage o cookie)
- [ ] Todas las claves de `translations.js` implementadas
- [ ] Meta tags dinámicos por idioma (title, description, og, twitter)
- [ ] Atributo `lang` en `<html>` según idioma
- [ ] Typed.js o equivalente con cadenas en ambos idiomas

### Assets

- [ ] Todas las imágenes de `/img/` migradas
- [ ] CV PDF accesible para descarga
- [ ] Logo header, banner, opengraph

### Funcionalidad

- [ ] Menú hamburguesa responsive
- [ ] Carrusel de testimonios
- [ ] Tabs Experience/Education
- [ ] Animación typed en hero
- [ ] Navegación suave a anclas (#portfolio, #about, #contact, #testimonial, #skill)
- [ ] Enlaces externos (portfolio, WhatsApp, email, maps) funcionando

### URLs a actualizar en migración

Si el dominio cambia de `jgamarradev.github.io/portfolio/` a otro:

- `robots.txt` → Sitemap URL
- `sitemap.xml` → loc
- `canonical`
- `og:url`
- `og:image`
- `twitter:image`
- Cualquier enlace absoluto interno

---

**Última actualización**: Febrero 2025  
**Proyecto fuente**: repo-portfolio (HTML estático)  
**Destino**: Proyecto Next.js
