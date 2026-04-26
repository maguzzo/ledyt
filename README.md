# LED&T — Sitio web institucional

Sitio web del **Laboratorio de Electrónica Digital y Telecomunicaciones**, perteneciente al Departamento de Electrónica y Automática (DEA) de la Facultad de Ingeniería de la Universidad Nacional de San Juan.

🌐 **URL prevista**: `ledyt.unsj.edu.ar` (en desarrollo)

## Sobre el LED&T

Centro de excelencia en investigación, desarrollo y servicios en sistemas digitales reconfigurables, radioastronomía, satélites y telecomunicaciones avanzadas. Activo desde 1973.

## Stack técnico

- **[Astro 6](https://astro.build/)** — generador de sitios estáticos
- **[Tailwind CSS v4](https://tailwindcss.com/)** — estilos utilitarios
- **TypeScript** — para data layer tipado
- Sin frameworks JS de cliente (vanilla JS donde es necesario)

## Estructura del proyecto


ledyt/
├── public/              # Assets estáticos (imágenes, favicons, logos)
├── src/
│   ├── components/      # Componentes Astro reutilizables (Header, etc.)
│   ├── data/            # Data files TypeScript (capacitaciones, staff, etc.)
│   ├── layouts/         # Layouts base (Layout.astro)
│   ├── pages/           # Rutas del sitio (index.astro, staff/, proyectos/, etc.)
│   └── styles/          # Estilos globales (global.css con Tailwind)
├── docs/
│   └── coordinacion/    # Handoffs entre asistentes IA durante desarrollo
└── astro.config.mjs     # Configuración de Astro + plugin Tailwind


## Desarrollo local

Requiere Node.js 18+ y npm.

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev              # localhost:4321
npm run dev -- --host    # accesible desde la red local (móvil)

# Build de producción
npm run build            # genera carpeta dist/

# Preview del build
npm run preview
```

## Mantenedor

**Dr. Martín A. Guzzo**
Coordinación del LED&T
Profesor Titular · Sistemas Digitales A
✉ m.guzzo@unsj.edu.ar

## Contacto institucional

📧 Secretaría DEA: sec_dea@unsj.edu.ar
📞 +54 264 421-1700 (int. 4380, 4381, 4383, 4386)
📍 Av. Lib. Gral. San Martín 1109 (O), J5400ARL · San Juan, Argentina

## Licencia

Este proyecto está bajo licencia **[**MIT**](**LICENSE**)**. Sos libre de usar, modificar y distribuir el código, mencionando la atribución original al LED&T - UNSJ.

---

🤝 Sitio desarrollado en colaboración con asistentes IA (Claude, Deep, GitHub Copilot) bajo coordinación humana.
