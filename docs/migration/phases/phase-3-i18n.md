# Fase 3: Sistema de Internacionalización (i18n)

## 📋 Objetivo

Implementar un sistema completo de internacionalización que soporte Español e Inglés, reemplazando el sistema JavaScript vanilla del proyecto original.

## ✅ Implementación

### Paso 3.1: Configurar Sistema i18n

**Decisión técnica:**
Se eligió usar **Context API de React** en lugar de `next-i18next` porque:
- `next-i18next` no tiene soporte completo para App Router de Next.js 13+
- Context API es más flexible y funciona perfectamente con App Router
- Permite control total sobre el comportamiento

**Archivo:** `lib/i18n/context.tsx`

**Componentes creados:**
1. **`I18nProvider`** - Provider que envuelve la aplicación
2. **`useI18n`** - Hook personalizado para acceder a traducciones

**Funcionalidades:**
- ✅ Persistencia en localStorage
- ✅ Actualización del atributo `lang` del HTML
- ✅ Cambio dinámico de idioma sin recargar página
- ✅ Soporte para SSR (Server-Side Rendering)

### Paso 3.2: Migrar Traducciones a JSON

**Archivos creados:**
- `locales/es/common.json` - Todas las traducciones en español
- `locales/en/common.json` - Todas las traducciones en inglés

**Estructura de traducciones:**
```json
{
  "navPortfolio": "Portafolio",
  "heroTitle": "Juan Gamarra",
  "heroSubtitle1": "Desarrollador Web",
  ...
}
```

**Claves migradas:**
- Navegación (3 claves)
- Hero section (7 claves)
- About section (9 claves)
- Portfolio (2 claves)
- Skills (3 claves)
- Testimonials (1 clave)
- Contact (1 clave)

**Total:** ~26 claves de traducción

### Paso 3.3: Implementar Language Switcher

**Archivo:** `components/LanguageSwitcher/LanguageSwitcher.tsx`

**Características:**
- ✅ Toggle switch visual (ES/EN)
- ✅ Integrado en el Header
- ✅ Estado sincronizado con el contexto
- ✅ Estilos personalizados en `globals.css`

**Funcionamiento:**
- Checkbox estilizado que actúa como switch
- Al cambiar, actualiza el idioma en el contexto
- El contexto actualiza todos los componentes automáticamente

### Paso 3.4: Integración en Layout

**Archivo:** `app/layout.tsx`

**Cambios realizados:**
- `I18nProvider` envuelve `{children}`
- Metadata configurada para SEO multi-idioma
- Atributo `lang` dinámico en el HTML

## 🔧 Funcionamiento Técnico

### Flujo de Traducción

1. **Inicialización:**
   ```typescript
   // Al cargar la página
   - Lee localStorage para idioma guardado
   - Si no existe, usa 'es' por defecto
   - Actualiza document.documentElement.lang
   ```

2. **Uso en Componentes:**
   ```typescript
   const { t, language, setLanguage } = useI18n()
   // t('key') retorna la traducción en el idioma actual
   ```

3. **Cambio de Idioma:**
   ```typescript
   setLanguage('en')
   // - Actualiza el estado
   // - Guarda en localStorage
   // - Actualiza el HTML lang attribute
   // - Todos los componentes se re-renderizan automáticamente
   ```

### Persistencia

- **localStorage key:** `language`
- **Valores válidos:** `'es'` | `'en'`
- **Duración:** Persiste entre sesiones del navegador

### Actualización de Meta Tags

El sistema actualiza automáticamente:
- `document.documentElement.lang`
- Meta tags de Open Graph (locale)
- Title y description (si se implementa)

## 🎯 Ventajas sobre el Sistema Original

1. **Type Safety:** TypeScript valida las claves de traducción
2. **React Integration:** Integrado nativamente con React
3. **Performance:** Solo re-renderiza componentes que usan traducciones
4. **Mantenibilidad:** Traducciones centralizadas en JSON
5. **Escalabilidad:** Fácil agregar más idiomas en el futuro

## 📝 Notas Importantes

1. **Typed.js:** Se reinicializa cuando cambia el idioma para mostrar los subtítulos correctos
2. **Portfolio:** Las descripciones tienen versiones separadas en ES/EN en el JSON
3. **Metadata:** El layout tiene metadata estática, pero se puede hacer dinámica si es necesario

## ✅ Resultado

Sistema i18n completamente funcional que:
- ✅ Soporta ES y EN
- ✅ Persiste la preferencia del usuario
- ✅ Actualiza todos los textos dinámicamente
- ✅ Mantiene compatibilidad con SSR
- ✅ Es fácil de mantener y extender

