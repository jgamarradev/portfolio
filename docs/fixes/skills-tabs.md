# Corrección de Tabs en Skills (Experiencia/Educación)

## Fecha: 2025-12-14

## Problema Reportado

El tab de Educación no se mostraba correctamente cuando se hacía clic en el switch entre Experiencia y Educación.

## Causa del Problema

El componente estaba usando renderizado condicional (`&&`) para mostrar/ocultar los tabs, lo que causaba que:
1. Cuando se cambiaba de tab, el anterior se desmontaba completamente del DOM
2. Solo un tab existía en el DOM a la vez
3. Esto no coincidía con el comportamiento original donde ambos tabs existen siempre y solo se muestran/ocultan con CSS

## Solución Implementada

### Cambio en Skills.tsx

#### Antes (Renderizado Condicional):
```tsx
<div className="tab-content">
  {activeTab === 'experience' && (
    <div id="tab-1" className="tab-pane fade show p-0 active">
      {/* contenido */}
    </div>
  )}
  {activeTab === 'education' && (
    <div id="tab-2" className="tab-pane fade show p-0">
      {/* contenido */}
    </div>
  )}
</div>
```

#### Después (Ambos Tabs Siempre en DOM):
```tsx
<div className="tab-content">
  <div 
    id="tab-1" 
    className={`tab-pane fade show p-0 ${activeTab === 'experience' ? 'active' : ''}`}
    style={{ display: activeTab === 'experience' ? 'block' : 'none' }}
  >
    {/* contenido experiencia */}
  </div>
  <div 
    id="tab-2" 
    className={`tab-pane fade show p-0 ${activeTab === 'education' ? 'active' : ''}`}
    style={{ display: activeTab === 'education' ? 'block' : 'none' }}
  >
    {/* contenido educación */}
  </div>
</div>
```

### CSS Agregado en globals.css

```css
/* Fix for Skills tabs - ensure tabs work correctly */
.tab-content .tab-pane {
  display: none;
}

.tab-content .tab-pane.active {
  display: block;
}

.tab-content .tab-pane.show {
  display: block;
}
```

## Comparación con el Original

### HTML Original:
```html
<div class="tab-content">
  <div id="tab-1" class="tab-pane fade show p-0 active">
    <!-- contenido experiencia -->
  </div>
  <div id="tab-2" class="tab-pane fade show p-0">
    <!-- contenido educación -->
  </div>
</div>
```

### Script Original (skills-tab.js):
```javascript
function showTab1() {
  tab1.classList.add("active");
  tab1.style.display = "block";
  tab2.classList.remove("active");
  tab2.style.display = "none";
  // ...
}

function showTab2() {
  tab2.classList.add("active");
  tab2.style.display = "block";
  tab1.classList.remove("active");
  tab1.style.display = "none";
  // ...
}
```

## Beneficios de la Solución

1. ✅ **Ambos tabs siempre en el DOM**: Coincide con el comportamiento original
2. ✅ **Transiciones suaves**: Las clases `fade` de Bootstrap funcionan correctamente
3. ✅ **Mejor rendimiento**: No hay desmontaje/remontaje de componentes
4. ✅ **Compatibilidad con CSS**: Los estilos de Bootstrap se aplican correctamente

## Estado

✅ **PROBLEMA RESUELTO**

Los tabs de Experiencia y Educación ahora funcionan correctamente, mostrando/ocultando el contenido como en el proyecto original.
