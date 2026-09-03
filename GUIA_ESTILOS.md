# Guia de estilos LED&T

Documento de referencia para migrar la identidad visual del sitio LED&T a otra pagina.

> **Fuente de verdad:** la identidad principal se define en `src/styles/global.css` y se aplica principalmente mediante Tailwind CSS 4. Los valores descritos aqui reflejan el codigo activo del sitio. `src/components/Welcome.astro` contiene estilos de la plantilla inicial de Astro y se documenta aparte como legado.

## 1. Direccion visual

- **Personalidad:** institucional, tecnologica, clara y sobria.
- **Contexto:** laboratorio universitario de electronica, telecomunicaciones, satelites e investigacion aplicada.
- **Contraste:** superficies claras para lectura y navegacion; azul/cian para identidad y acciones; rojo para llamadas principales; azul marino para bloques de alto contraste.
- **Composicion:** contenido centrado en un ancho maximo amplio, secciones de banda completa, grillas de tarjetas y mucho espacio vertical.
- **Tratamiento fotografico:** imagenes reales o ilustraciones tecnicas con `object-cover`; imagenes de apoyo con opacidad muy baja cuando funcionan como textura de fondo.
- **Iconografia:** SVG inline para flechas, menu, cierre y enlaces externos. En la portada tambien se usan simbolos Unicode/emoji para capacidades y oportunidades.

## 2. Tipografias

### Familia sans principal

```css
font-family: "Inter", system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", Roboto, sans-serif;
```

- Carga web: Google Fonts, Inter en pesos `400`, `500`, `600`, `700`, `800`.
- Uso: todo el texto general, navegacion, titulos, botones, etiquetas y tarjetas.
- Renderizado global: `font-feature-settings: "rlig" 1, "calt" 1`, `text-rendering: optimizeLegibility`, antialiasing para WebKit y macOS.

### Familia monoespaciada

```css
font-family: "JetBrains Mono", "Fira Code", "Cascadia Code",
  Consolas, monospace;
```

- Carga web: JetBrains Mono en pesos `400`, `500`, `600`.
- Uso: correo, telefono, datos tecnicos y contenido que se beneficia de alineacion monoespaciada.

### Escala tipografica observada

| Uso | Tamano aproximado | Peso / tratamiento |
|---|---:|---|
| Hero H1 | `30px` / `36px` / `48px` segun viewport | `700`, interlineado `1.1` |
| Titulos de seccion | `30px` / `36px` | `700`, color slate-900 |
| Titulos de tarjeta | `20px` | `700` |
| Navegacion y texto base | `14px` a `16px` | `500` o regular |
| Parrafos destacados | `18px` | regular, `leading-relaxed` |
| Etiquetas de seccion | `14px` | `600`, uppercase, tracking amplio |
| Metadatos | `12px` a `14px` | regular o `500`, slate-500 |
| Captions y notas | `12px` | italic cuando corresponde |
| Codigo / contacto | tamano del contexto | familia mono |

- Los titulos usan `font-bold`; los elementos de navegacion y categorias usan `font-semibold`.
- Las etiquetas cortas suelen ser uppercase con `tracking-wider` o `tracking-widest`.
- El cuerpo usa `leading-relaxed`; los titulos usan `leading-tight` o `leading-[1.1]`.
- No hay una familia display separada: Inter cumple todos los niveles jerarquicos.

## 3. Paleta de color

### Tokens de marca

| Token | Hex | Uso |
|---|---|---|
| `--color-primario` | `#1e40af` | Azul institucional, CTAs secundarios, enlaces |
| `--color-primario-claro` | `#3b82f6` | Hover y variantes luminosas |
| `--color-primario-oscuro` | `#1e3a8a` | Hover fuerte, encabezados, fondos profundos |
| `--color-acento` | `#0891b2` | Cian profundo, enlaces secundarios y foco |
| `--color-acento-claro` | `#06b6d4` | Hover, detalles vivos y bordes de destaque |
| `--color-acento-suave` | `#cffafe` | Fondos suaves y badges |
| `--color-marca` | `#dc2626` | CTA principal, alertas y destacados puntuales |
| `--color-marca-oscuro` | `#b91c1c` | Hover del CTA rojo |

### Fondos

| Token | Hex | Uso |
|---|---|---|
| `--color-fondo` | `#ffffff` | Fondo principal |
| `--color-fondo-alt` | `#f1f5f9` | Secciones alternadas y tarjetas suaves |
| `--color-fondo-elevado` | `#ffffff` | Tarjetas elevadas |
| `--color-fondo-oscuro` | `#0f172a` | Hero tecnico, franja destacada y footer |

### Texto, bordes y estados

| Token / clase frecuente | Valor | Uso |
|---|---|---|
| `--color-texto` / `text-slate-900` | `#0f172a` | Titulos y texto principal |
| `--color-texto-suave` / `text-slate-600` | `#475569` | Parrafos y descripciones |
| `--color-texto-tenue` / `text-slate-500` | `#64748b` | Metadatos, fechas y captions |
| `--color-texto-invertido` | `#f8fafc` | Texto sobre fondos oscuros |
| `--color-borde` / `border-slate-200` | `#e2e8f0` | Bordes y separadores |
| `--color-borde-fuerte` | `#cbd5e1` | Separadores o inputs mas visibles |
| `--color-exito` | `#16a34a` | Estado activo / exito |
| `--color-aviso` | `#ea580c` | Avisos y deadlines proximos |
| `--color-error` | `#dc2626` | Error, igual que el rojo de marca |

### Combinaciones activas

- **Superficie institucional:** blanco + slate-900 para titulos + slate-600 para cuerpo.
- **Accion principal:** `#dc2626` con texto blanco; hover `#b91c1c`.
- **Accion secundaria:** borde `#1e40af`, texto `#1e40af`; hover fondo azul y texto blanco.
- **Link tecnico:** cyan-700 / `#0e7490` o blue-700 / `#1d4ed8`.
- **Bloque oscuro:** slate-900 / blue-900 con texto blanco, slate-200 y acentos cyan.
- **Estado activo:** emerald-100 + emerald-800 + borde emerald-300.
- **En evaluacion:** amber-100 + amber-800 + borde amber-300.
- **Finalizado:** slate-200 + slate-700 + borde slate-300.

## 4. Gradientes y transparencias

- Hero principal: `from-slate-50 via-white to-cyan-50/40`, diagonal de arriba izquierda a abajo derecha.
- Seccion de oportunidades: `from-blue-900 via-blue-800 to-slate-900`, diagonal.
- Decoraciones: circulos cyan/blue o red con opacidad baja (`/30` o `/5`) y `blur-3xl`.
- Tarjetas sobre bloque oscuro: `bg-white/10`, hover `bg-white/20`, `backdrop-blur-sm`, borde blanco al `10%`.
- Backdrop del menu movil: `bg-slate-900/40`.
- Estas transparencias son atmosphericas: no deben competir con el contenido.

## 5. Layout y espaciado

- Contenedor habitual: `max-w-7xl` (`80rem`) con `mx-auto`.
- Padding horizontal: `px-4`, pasa a `sm:px-6` y `lg:px-8`.
- Secciones principales: `py-20`; cabeceras internas: `py-12 md:py-16`; hero: `py-16 md:py-24`.
- Separacion entre columnas: `gap-8`, `lg:gap-12` o `lg:gap-16`.
- Grillas:
  - Proyectos destacados: 2 columnas en `sm`, 4 en `lg`.
  - Capacidades: 2 columnas base, 4 en `md`.
  - Oportunidades: 2 columnas en `sm`, 4 en `lg`.
  - Footer: 2 columnas en `md`, 4 en `lg`.
- Layout de hero: grilla de 12 columnas en `lg`; texto ocupa 7 y visual 5.
- Alineacion: encabezados de seccion centrados; contenido editorial y footer alineados a la izquierda.
- Ritmo vertical: bloques grandes de `80px`, componentes internos de `12px` a `32px`.

## 6. Bordes, radios y sombras

```css
--radius-sm: 0.375rem; /* 6px: badges y controles pequenos */
--radius-md: 0.5rem;   /* 8px: botones e inputs */
--radius-lg: 0.75rem;  /* 12px: tarjetas */
--radius-xl: 1rem;     /* 16px: hero y secciones destacadas */
```

Sombras de referencia:

```css
--shadow-card: 0 1px 3px 0 rgb(0 0 0 / 0.06),
  0 1px 2px -1px rgb(0 0 0 / 0.04);
--shadow-card-hover: 0 10px 25px -5px rgb(0 0 0 / 0.08),
  0 4px 10px -6px rgb(0 0 0 / 0.05);
--shadow-strong: 0 20px 40px -12px rgb(0 0 0 / 0.12);
```

En la implementacion tambien aparecen `shadow-md`, `shadow-xl` y `shadow-2xl` de Tailwind. La regla visual es una elevacion discreta en reposo y una elevacion clara al hover.

## 7. Componentes y patrones

### Header

- Sticky en la parte superior: `sticky top-0 z-50`.
- Fondo blanco al `95%` con `backdrop-blur-sm`.
- Separador inferior `border-slate-200`.
- Logo de `40px` en movil y `48px` desde `sm`.
- Navegacion desktop visible desde `md`; menu hamburguesa debajo de `md`.
- Dropdown: blanco, `w-56`, borde sutil, `rounded-xl`, `shadow-xl`, aparece con opacity/visibility y transicion de `200ms`.
- Links: slate-700, hover blue-700; item destacado: cyan-50/cyan-700.
- Boton Contacto: borde azul, `rounded-lg`, padding horizontal `16px` y vertical `8px`.
- Selector de idioma: texto `12px`, borde slate-300, `rounded-md`.

### Hero

- Fondo claro con gradiente tecnico.
- H1 grande y compacto; una parte se colorea en blue-700.
- CTA primario rojo relleno y CTA secundario azul outline.
- Imagen principal con `drop-shadow-2xl` y `rounded-lg`.
- Caption de imagen pequeno, italic y centrado.

### Cards de proyectos

- Superficie blanca, `rounded-2xl`, borde slate-200 y `shadow-md`.
- Hover: `shadow-2xl`, transicion total `300ms`.
- Imagen en proporcion `4/3`, `object-cover`; hover con escala `1.05` durante `500ms`.
- Badge de estado arriba a la izquierda: pill, borde, tipografia de `12px` bold.
- Cuerpo con `p-5`, flex vertical para igualar alturas.
- Categoria uppercase cyan; titulo slate-900 que pasa a blue-700 al hover.
- Enlace inferior con flecha y aumento del gap al hover.

### Capacidades

- Tarjetas compactas con `p-6`, fondo slate-50 y borde slate-100.
- Hover: blue-50 y borde blue-200.
- Icono grande (`text-4xl`) centrado, titulo bold, detalle en `12px` slate-500.

### Oportunidades

- Seccion de alto contraste con gradiente azul-marino.
- Cards con `rounded-xl`, `p-6` y escala `1.05` al hover.
- Estado normal: blanco translúcido, borde blanco sutil y blur.
- Destacado: rojo `#dc2626`, hover rojo oscuro.
- Iconos grandes, titulo blanco y descripcion blue-100.

### Red institucional

Componente con estilo local propio:

- Ancho fijo `10.5rem`; trigger con altura minima `42px`.
- Borde `#d8e1ec`, radio `8px`, fondo blanco y sombra azul-marino translucida.
- Texto `#172b4d`, `13.6px`, bold.
- Menu desplegable debajo del trigger, separacion de `0.25rem`, radio `8px`, sombra mas profunda.
- Cada institucion tiene altura minima `48px`, imagen contenida de `42x36px` y texto `12px` semibold.
- Hover/foco: fondo `#edf7fb`, texto `#0b6388`.
- Se abre por click, hover en dispositivos compatibles, tecla Escape y click fuera.

### Footer

- Fondo slate-900, texto blanco.
- Padding superior `64px`, inferior `32px`.
- Titulos de columna cyan-300.
- Cuerpo slate-300/slate-400; labels pequenos uppercase slate-500.
- Emails y telefonos en JetBrains Mono.
- Separador final `border-slate-700`; copyright en `12px` slate-500.

## 8. Responsive

Breakpoints por defecto de Tailwind:

| Breakpoint | Ancho minimo | Comportamiento observado |
|---|---:|---|
| base | `0px` | Una columna, padding `16px`, menu movil |
| `sm` | `640px` | Dos columnas en cards, logo `48px`, padding `24px` |
| `md` | `768px` | Navegacion desktop, grids de 4 en capacidades, footer de 2 |
| `lg` | `1024px` | Hero de dos columnas, cards de 4, footer de 4, padding `32px` |
| `xl` | `1280px` | Disponible por Tailwind, sin cambio estructural dominante |
| `2xl` | `1536px` | Disponible por Tailwind, contenido sigue limitado a `80rem` |

Detalles de comportamiento:

- El menu movil ocupa la pantalla y abre un panel derecho de ancho maximo `sm`.
- El panel tiene scroll vertical independiente y controles con area minima de `44px` aproximadamente.
- La imagen del hero usa variantes mobile/tablet/desktop mediante `<picture>`.
- La franja HERON pasa de fila horizontal a columna en movil.
- La etiqueta flotante sobre la imagen de "Quienes somos" se oculta en pantallas menores a `sm`.
- Los grids se reducen sin cambiar la jerarquia del contenido.

## 9. Interaccion, transiciones y accesibilidad

- Transiciones habituales: `transition-colors`, `transition-all`, `transition-transform`, duracion `200ms` o `300ms`.
- Hover de imagen: escala `105%`; hover de enlaces: cambio de color y, en flechas, aumento progresivo del gap.
- Dropdown del header: fade y visibilidad durante `200ms`; flecha rota `180deg`.
- Focus global: outline cyan de `2px`, offset `2px`, radio `2px`.
- Seleccion de texto: fondo cyan y texto blanco.
- Botones y links importantes tienen etiquetas accesibles; menu movil usa `aria-expanded`, `aria-controls` y `aria-hidden`.
- Las imagenes de contenido tienen `alt`; decorativas usan `alt=""`.
- Las imagenes secundarias usan `loading="lazy"`; el hero carga con prioridad.
- Mantener contraste equivalente al sistema actual, especialmente en texto slate sobre blanco y cyan sobre fondos oscuros.

## 10. Assets y tratamiento de imagen

- Logo principal: `/images/logos/logo-main.png`.
- Logo sobre fondo oscuro: `/images/logos/logo-main-dark.png`.
- Imagenes organizadas por dominio: `projects`, `lab`, `capabilities`, `logos`.
- Imagenes de cards: contenedor estable con aspect ratio `4/3`, overflow oculto y `object-cover`.
- Imagenes editoriales: ancho completo, altura automatica y radios grandes (`rounded-2xl`).
- Sombras y radios se aplican al contenedor visual para que el recorte respete la forma.

## 11. CSS global y convenciones

- Tailwind se importa con `@import "tailwindcss"`.
- Los tokens se declaran en `@theme`, por lo que pueden consumirse como utilities (`bg-fondo`, `text-primario`, etc.).
- `html` usa scroll suave y evita ajustes de tamano de texto en iOS.
- `body` aplica fondo blanco, texto slate-900 y la familia sans principal.
- La pagina usa Astro y el layout global carga `global.css` y las fuentes de Google Fonts.
- El lenguaje visual actual mezcla tokens semanticos (`bg-fondo`, `text-acento`) con utilities Tailwind directas (`bg-slate-50`, `text-blue-700`). Para una migracion consistente conviene conservar los tokens semanticos y mapear las utilities directas a variables equivalentes.

## 12. Estilos heredados o aislados

`src/components/Welcome.astro` es la pantalla inicial de Astro y no forma parte de la identidad LED&T usada en la portada actual. Si se migra, tratarlo como una variante independiente:

- Inter declarada localmente con fallback adicional `Helvetica Neue`, `Arial Nova` y `Nimbus Sans`.
- Azul oscuro `#111827`, gris `#4b5563`, blanco y gris claro `rgb(78, 80, 86)`.
- Gradientes violeta/azul `#3245ff` a `#bc52ee` para boton.
- Gradientes rojo/fucsia `#d83333` a `#f041ff` para codigo y texto.
- Cards blancas con radios de `16px`, borde blanco y blur de fondo.
- Breakpoint movil en `768px`; boton con padding mayor y enlaces que hacen wrap.

Estos colores violeta/fucsia no deben incorporarse a la migracion de la identidad principal salvo que se quiera conservar deliberadamente la pantalla de bienvenida de Astro.

## 13. Checklist de migracion

- [ ] Cargar Inter 400/500/600/700/800 y JetBrains Mono 400/500/600.
- [ ] Definir tokens de fondo, marca, acento, texto, bordes y estados.
- [ ] Establecer contenedor de `80rem`, padding horizontal responsive y secciones con `py-20`.
- [ ] Replicar la jerarquia de titulos: slate-900, bold, leading compacto.
- [ ] Reservar rojo para CTA principal y estados de alerta.
- [ ] Implementar azul/cian para enlaces, foco y CTA secundario.
- [ ] Mantener tarjetas blancas con borde slate-200, `rounded-2xl` y sombra progresiva.
- [ ] Mantener imagenes de cards en `4/3` y zoom suave al hover.
- [ ] Adaptar header a menu desktop desde `768px` y drawer movil.
- [ ] Verificar contraste, foco de teclado, labels, alt text y areas tactiles.
- [ ] Excluir los estilos violeta/fucsia de `Welcome.astro` si la migracion busca la identidad LED&T.
