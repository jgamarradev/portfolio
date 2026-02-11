# Guía de Build y Desarrollo

## 🔄 Desarrollo vs Producción

### Desarrollo (Lo que estás haciendo ahora)

**NO necesitas hacer build para desarrollo.**

Cuando ejecutas:
```bash
npm run dev
```

Next.js:
- ✅ Compila el código automáticamente
- ✅ Hot reload (recarga automática al cambiar código)
- ✅ Muestra errores en tiempo real
- ✅ Optimizaciones de desarrollo

**El build NO es necesario** para trabajar en desarrollo. Solo necesitas:
1. `npm install` (una vez)
2. `npm run dev` (cada vez que trabajas)

### Producción (Para desplegar)

**SÍ necesitas hacer build para producción.**

Cuando quieras:
- Desplegar a GitHub Pages
- Probar cómo se verá en producción
- Generar los archivos estáticos

Ejecuta:
```bash
npm run build
```

Esto:
- ✅ Compila todo el código
- ✅ Optimiza para producción
- ✅ Genera la carpeta `out/` con archivos estáticos
- ✅ Minifica CSS y JavaScript
- ✅ Optimiza imágenes (si no están deshabilitadas)

## 📁 Carpetas Generadas

### Durante Desarrollo (`npm run dev`)
- `.next/` - Archivos temporales de compilación
- Se regenera automáticamente

### Durante Build (`npm run build`)
- `out/` - Archivos estáticos listos para desplegar
- Esta carpeta se sube a GitHub Pages

## 🚀 Cuándo Hacer Build

### ✅ Hacer Build:
- Antes de desplegar a GitHub Pages
- Para probar la versión de producción localmente
- Para verificar que todo funciona correctamente
- Antes de hacer commit final

### ❌ NO hacer Build:
- Durante desarrollo normal
- Solo para probar cambios
- Cuando trabajas en el código

## 📋 Comandos Útiles

```bash
# Desarrollo (usa este para trabajar)
npm run dev

# Build para producción
npm run build

# Ver build localmente (después de build)
npm start

# Limpiar carpetas de build
rm -rf .next out
# O en PowerShell:
Remove-Item -Recurse -Force .next, out
```

## ⚠️ Notas Importantes

1. **No necesitas build para desarrollo:** `npm run dev` es suficiente
2. **Build solo para producción:** Cuando vayas a desplegar
3. **GitHub Actions hace el build:** Automáticamente cuando haces push
4. **Carpeta `out/`:** Se genera solo con `npm run build`, no con `npm run dev`

## 🔍 Verificar Build

Si quieres probar cómo se verá en producción:

```bash
# 1. Hacer build
npm run build

# 2. Verificar que se creó la carpeta out/
ls out  # o dir out en Windows

# 3. Probar localmente (opcional)
npm start
```

## ✅ Estado Actual

**Para desarrollo:** ✅ Ya está funcionando con `npm run dev`
**Para producción:** ⏳ Build se hará automáticamente en GitHub Actions cuando hagas push

**Conclusión:** No necesitas hacer build ahora, solo cuando vayas a desplegar o quieras probar la versión de producción.

