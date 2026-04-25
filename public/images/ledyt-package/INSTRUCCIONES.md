# 📦 PAQUETE DE CIERRE — Home LED&T v1 final

Este paquete contiene **todo lo necesario** para cerrar la home del sitio LED&T con imágenes reales y proyectos actualizados.

---

## 📋 Contenido del paquete

```
ledyt-package/
├── INSTRUCCIONES.md              ← Este archivo
├── public/images/                ← 178 archivos optimizados
│   ├── projects/
│   │   ├── chalu-x/              ← Arquero Huarpe (con responsive)
│   │   ├── heron/                ← Logo + 3 fotos del equipo
│   │   ├── rio-san-juan/         ← 6 fotos del proyecto histórico
│   │   ├── chaze-agro/           (vacía, futuro)
│   │   └── sat-pae/              (vacía, futuro)
│   ├── lab/                      ← 7 fotos del laboratorio
│   └── capabilities/             ← 5 fotos de hardware
└── src/pages/
    └── index.astro               ← Home final con todo conectado
```

---

## 🚀 Pasos para integrar (10 minutos)

### Paso 1: Detener el servidor

En la terminal donde corre `npm run dev`, presioná **Ctrl+C** y confirmá con **S** (o Y).

### Paso 2: Copiar las imágenes

1. Descargá este paquete completo (carpeta `ledyt-package`).
2. Abrí la carpeta `public/images/` del paquete.
3. **Copiá el contenido** dentro de `C:\dev\ledyt\public\images\`.
4. Cuando Windows te pregunte "¿Reemplazar archivos existentes?", **decí que sí** a todo.

> **Importante**: NO borres lo que ya tenías en `public/images/logos/`. Los logos del LED&T (que vos procesaste antes) **se conservan**. El paquete agrega imágenes nuevas en otras carpetas.

### Paso 3: Reemplazar el `index.astro`

1. Abrí el archivo `src/pages/index.astro` del paquete.
2. **Copiá todo su contenido**.
3. Abrí en VS Code el archivo `C:\dev\ledyt\src\pages\index.astro`.
4. **Seleccioná todo (Ctrl+A) y reemplazá** con el contenido nuevo.
5. Guardá (Ctrl+S).

### Paso 4: Levantar el servidor de nuevo

En la terminal:
```
npm run dev
```

### Paso 5: Refrescar el navegador

Abrí `http://localhost:4321/` y refrescá con **F5**.

Deberías ver:
- ✅ Hero con la **ilustración del arquero Huarpe**.
- ✅ Franja oscura con **HERON** y su logo.
- ✅ Sección "Quiénes somos" con **foto del curso de fibra óptica**.
- ✅ 4 cards de proyectos: **CHALÚ-X (activo), CHAZE-Agro (en evaluación), SAT-PAE Jáchal (en evaluación), Backend CART (finalizado)**.
- ✅ 8 capacidades técnicas con íconos.
- ✅ 4 oportunidades en sección oscura.
- ✅ Footer con contactos del DEA + tu email + 4 internos correctos.

### Paso 6: Verificar mobile

En el navegador: **F12 → Ctrl+Shift+M → "iPhone 12 Pro"**. Refrescá.

### Paso 7: Commit

Si todo se ve bien:
```
git add .
git commit -m "feat: home final con imágenes reales y proyectos actualizados (CHALÚ-X, CHAZE-Agro, SAT-PAE, HERON, CART)"
```

---

## 🎯 Lo que ya está resuelto

- **Proyectos correctos**: CHALÚ-X aprobado · CHAZE-Agro y SAT-PAE en evaluación · HERON destacado en franja · Backend CART como finalizado.
- **HERON**: el texto aclara que vos sos Site Manager argentino, no el LED&T institucionalmente. Convenios en gestión, firma 2026.
- **CHALÚ-X**: con la ilustración del arquero + crédito tuyo + significado cultural ("Chalú = flecha en alentiac").
- **Datos del DEA**: email `sec_dea@unsj.edu.ar`, los 4 internos (4380/4381/4383/4386), tu email personal en sección "Director".
- **Imágenes optimizadas**: WebP + JPG con tamaños responsive (móvil/tablet/desktop). El navegador carga la versión adecuada.

---

## 📋 Pendiente para próximas sesiones

1. **Página `/proyectos`** con sistema de estados completo (activos/finalizados/históricos).
2. **Páginas internas de cada proyecto** (`/proyectos/chalu-x`, etc.) usando Content Collections.
3. **Página `/staff`** con tu perfil + investigadores + eméritos.
4. **Página `/sobre`** con historia 1973-presente + viajes ICTP/CERN/Sandia.
5. **Página `/servicios`** con caso Nengshi como ejemplo.
6. **Versión inglés** (`/en/`).
7. **Deploy con IDECOM** (lunes contactar).
8. **Redes sociales** cuando se creen.

---

## 🔧 Si algo falla

**El sitio no carga las imágenes**:
- Verificá que la estructura sea `public/images/projects/chalu-x/arquero-huarpe.png` y NO `public/projects/...`.
- Refrescá con Ctrl+Shift+R (hard refresh, sin caché).

**Astro tira error**:
- Borrá la caché: `Remove-Item -Recurse -Force .astro, node_modules\.vite`
- `npm run dev` de nuevo.

**Algo se ve mal en móvil**:
- Mandame screenshot y lo arreglamos.

---

✅ **Todo listo. Pegá, refrescá, verificá, commit.**
