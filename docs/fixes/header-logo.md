# Corrección del Header y Logo - Problema de Desbordamiento

## Fecha: 2025-12-14

## Problema Reportado

El logo del header se veía enorme y se desbordaba cubriendo todo el sitio.

## Causa del Problema

1. **Estilo inline de Next.js Image**: El componente `Image` tenía `style={{ width: 'auto', height: 'auto' }}` que sobrescribía el CSS original
2. **Dimensiones incorrectas**: Se usaba `width={120}` cuando el CSS original especifica `width: 204px` para el contenedor
3. **CSS no aplicado correctamente**: El CSS de `.logo-container img` no se estaba aplicando con suficiente especificidad

## Correcciones Realizadas

### 1. Componente Header.tsx

#### Antes:
```tsx
<Image
  src="/img/header_logo.png"
  alt="header_logo"
  width={120}
  height={40}
  priority
  style={{ width: 'auto', height: 'auto' }}  // ❌ Problema
/>
```

#### Después:
```tsx
<Image
  src="/img/header_logo.png"
  alt="header_logo"
  width={204}  // ✅ Coincide con CSS original
  height={40}
  priority
  // ✅ Removido style inline
/>
```

### 2. globals.css

#### Agregado:
```css
/* Fix for logo container - ensure image respects container width */
.logo-container {
  width: 204px;
  overflow: hidden;
}

.logo-container img {
  width: 100% !important;
  height: auto !important;
  max-width: 100%;
}
```

### 3. Visibilidad del Menú

#### Problema:
El menú estaba oculto por defecto incluso en desktop.

#### Solución:
```css
/* Menu visibility for desktop - nav-menu should be visible by default on desktop */
@media (min-width: 576px) {
  .nav-menu {
    display: block !important;
  }
  
  .nav-menu.hidden {
    display: block !important;
  }
}

/* On mobile, nav-menu is hidden by default and shown when menu is open */
@media (max-width: 575px) {
  .nav-menu {
    display: none;
  }
  
  .nav-menu.block {
    display: block !important;
  }
}
```

## Estructura Original vs Next.js

### Original (HTML):
```html
<div class="logo-container">
  <img src="./img/header_logo.png" alt="header_logo">
</div>
```

### CSS Original:
```css
.logo-container {
  width: 204px;
}

.logo-container img {
  width: 100%;
  height: auto;
}
```

### Next.js (Corregido):
```tsx
<div className="logo-container">
  <Image
    src="/img/header_logo.png"
    alt="header_logo"
    width={204}
    height={40}
    priority
  />
</div>
```

## Verificación

### ✅ Correcciones Aplicadas:
1. ✅ Removido estilo inline `width: auto, height: auto`
2. ✅ Cambiado width de 120 a 204 (coincide con CSS)
3. ✅ Agregado CSS con `!important` para asegurar que se aplique
4. ✅ Agregado `overflow: hidden` al contenedor
5. ✅ Corregida visibilidad del menú en desktop

### 📐 Dimensiones Correctas:
- **Contenedor**: `width: 204px`
- **Imagen**: `width: 100%` (del contenedor) = 204px
- **Altura**: `height: auto` (proporcional)

## Estado

✅ **PROBLEMA RESUELTO**

El logo ahora respeta el tamaño del contenedor (204px) y no se desborda. El menú está visible por defecto en desktop y se oculta/muestra correctamente en móvil.
