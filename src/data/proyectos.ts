export interface Proyecto {
  slug: string;
  nombre: string;
  nombreCorto?: string;
  categoria: { es: string; en: string };
  estado: 'activo' | 'evaluacion' | 'finalizado';
  estadoLabel: { es: string; en: string };
  resumen: { es: string; en: string };
  descripcion: { es: string; en: string };
  socios: { es: string[]; en: string[] };
  tecnologias: string[];
  docentes: string[]; // slugs de /staff
  becarios: string[]; // nombres completos
  imagen: string;
  imagenesAdicionales?: string[];
  href: string;
  destacado?: boolean;
  orden?: number;
}

export const proyectos: Proyecto[] = [
  {
    slug: 'chalu-x',
    nombre: 'CHALÚ-X',
    categoria: { es: 'CUBESAT · COMUNICACIONES', en: 'CUBESAT · COMMUNICATIONS' },
    estado: 'activo',
    estadoLabel: { es: 'Activo', en: 'Active' },
    resumen: {
      es: 'Módem satelital dual-band (S/UHF) para CubeSats. DVB-S2 Short Frame compliant sobre Zynq + AD9364, con TTC independiente en MSP430. Subsistema de comunicaciones de CHAZE-Agro.',
      en: 'Dual-band (S/UHF) satellite modem for CubeSats. DVB-S2 Short Frame compliant on Zynq + AD9364, with independent TTC on MSP430. Communications subsystem for CHAZE-Agro.',
    },
    descripcion: {
      es: 'Desarrollo y validación de un módulo de comunicaciones satelitales de alta capacidad para CubeSats. El núcleo es una arquitectura System-on-Chip Zynq de AMD-Xilinx, donde la lógica programable implementa un codificador LDPC de alto rendimiento y un protocolo de enlace adaptativo (Link Adaptation). Un microcontrolador supervisor (MSP430FR) añade una capa crítica de supervivencia para componentes comerciales (COTS), con protección contra latch-up y recuperación automática.',
      en: 'Development and validation of a high-capacity satellite communications module for CubeSats. The core is an AMD-Xilinx Zynq System-on-Chip architecture, where programmable logic implements a high-performance LDPC encoder and adaptive link protocol (Link Adaptation). A supervisor microcontroller (MSP430FR) adds a critical survival layer for commercial components (COTS), with latch-up protection and automatic recovery.',
    },
    socios: { es: ['PDTS UNSJ', 'IAR'], en: ['PDTS UNSJ', 'IAR'] },
    tecnologias: ['FPGA', 'Zynq', 'VHDL', 'SDR', 'DVB-S2', 'LDPC'],
    docentes: ['martin-guzzo', 'cristian-sisterna', 'rodolfo-arroqui', 'geremias-gaia', 'juan-sebastian', 'carlos-riveros', 'eugenio-orosco', 'gabriel-canadas', 'carlos-dellaquila'],
    becarios: ['Guillermo Gancio', 'Elías Fliger', 'Dario Capucchio', 'Martin Salibe', 'Alejo Suárez Borcosque', 'Ian Parlade Peralta'],
    imagen: '/images/projects/chalu-x/arquero-huarpe.webp',
    href: '/proyectos/chalu-x',
    destacado: true,
  },
  {
    slug: 'chaze-agro',
    nombre: 'CHAZE-Agro',
    categoria: { es: 'SATÉLITE · AGRICULTURA DE PRECISIÓN', en: 'SATELLITE · PRECISION AGRICULTURE' },
    estado: 'evaluacion',
    estadoLabel: { es: 'En evaluación · AIC', en: 'Under evaluation · AIC' },
    resumen: {
      es: 'Misión satelital cooperativa con sensor hiperespectral Sony IMX454 (41 bandas) sobre FPGA Zynq-7020. Subsistemas con nombres en lengua Huarpe: YOTO, NEU, CHALÚ-X, HIERNEN.',
      en: 'Cooperative satellite mission with Sony IMX454 hyperspectral sensor (41 bands) on Zynq-7020 FPGA. Subsystems named in Huarpe language: YOTO, NEU, CHALÚ-X, HIERNEN.',
    },
    descripcion: {
      es: 'Misión satelital cooperativa que integra un sensor hiperespectral Sony IMX454 para agricultura de precisión. La plataforma se basa en un FPGA Zynq-7020 que gestiona la adquisición de imágenes de 41 bandas espectrales. Los subsistemas llevan nombres en lengua Huarpe: YOTO (computadora de a bordo), NEU (potencia), CHALÚ-X (comunicaciones), HIERNEN (estructura). Proyecto presentado a la convocatoria AIC, en evaluación.',
      en: 'Cooperative satellite mission integrating a Sony IMX454 hyperspectral sensor for precision agriculture. The platform is based on a Zynq-7020 FPGA that manages 41-band spectral image acquisition. Subsystems are named in Huarpe language: YOTO (on-board computer), NEU (power), CHALÚ-X (communications), HIERNEN (structure). Project submitted to AIC call, under evaluation.',
    },
    socios: {
      es: ['UNSJ', 'INTA', 'CONAE', 'Barceló Femenia SRL', 'Nutrientes SA'],
      en: ['UNSJ', 'INTA', 'CONAE', 'Barceló Femenia SRL', 'Nutrientes SA'],
    },
    tecnologias: ['FPGA', 'Zynq', 'Imagen hiperespectral', 'CubeSat'],
    docentes: ['martin-guzzo', 'gabriel-canadas', 'eugenio-orosco', 'eric-laciar'],
    becarios: ['Jeremías Gaia', 'Jorge David Asencio', 'Guillermo Trigo'],
    imagen: '/images/projects/chaze-agro/chaze-agro-collage.webp',
    href: '/proyectos/chaze-agro',
    destacado: true,
  },
  {
    slug: 'sat-pae-jachal',
    nombre: 'SAT-PAE Jáchal',
    categoria: { es: 'MONITOREO HÍDRICO · ALERTA TEMPRANA', en: 'WATER MONITORING · EARLY WARNING' },
    estado: 'evaluacion',
    estadoLabel: { es: 'En evaluación', en: 'Under evaluation' },
    resumen: {
      es: '20 estaciones de alerta temprana para la Cuenca del Río Jáchal. Sondas YSI EXO2, biosensores bbe, telemetría Starlink/Iridium, SCADA propio. Inversión USD 11.94M.',
      en: '20 early warning stations for the Jáchal River Basin. YSI EXO2 probes, bbe biosensors, Starlink/Iridium telemetry, proprietary SCADA. USD 11.94M investment.',
    },
    descripcion: {
      es: 'Sistema de Alerta Temprana para la Cuenca del Río Jáchal. Comprende 20 estaciones de monitoreo continuo con sondas multiparamétricas YSI EXO2, biosensores bbe para detección de contaminantes, telemetría satelital Starlink/Iridium, y un sistema SCADA de desarrollo propio. El proyecto es ejecutado por un consorcio UNSJ-UCC-Arzobispado-Gobierno de San Juan.',
      en: 'Early Warning System for the Jáchal River Basin. Includes 20 continuous monitoring stations with YSI EXO2 multiparameter probes, bbe biosensors for pollutant detection, Starlink/Iridium satellite telemetry, and a proprietary SCADA system. The project is executed by a consortium UNSJ-UCC-Arzobispado-Gobierno de San Juan.',
    },
    socios: {
      es: ['UNSJ', 'UCC', 'Arzobispado de San Juan', 'Gobierno de San Juan'],
      en: ['UNSJ', 'UCC', 'Archdiocese of San Juan', 'Government of San Juan'],
    },
    tecnologias: ['IoT', 'SCADA', 'Telemetría satelital', 'Sensores ambientales'],
    docentes: ['martin-guzzo'],
    becarios: [],
    imagen: '/images/projects/rio-san-juan/gabinete-estacion.webp',
    href: '/proyectos/sat-pae-jachal',
  },
  {
    slug: 'heron',
    nombre: 'HERON',
    nombreCorto: 'Hybrid Elevated Radio Observatory for Neutrinos',
    categoria: { es: 'ASTROPARTÍCULAS · NEUTRINOS', en: 'ASTROPARTICLES · NEUTRINOS' },
    estado: 'evaluacion',
    estadoLabel: { es: 'En gestión · Firma 2026', en: 'In negotiation · Signature 2026' },
    resumen: {
      es: 'Observatorio internacional de neutrinos cósmicos financiado por el ERC. El Dr. Martín A. Guzzo fue seleccionado como Site Manager argentino. El LED&T será sitio futuro del proyecto.',
      en: 'International cosmic neutrino observatory funded by the ERC. Dr. Martín A. Guzzo has been selected as Argentine Site Manager. LED&T will be a future project site.',
    },
    descripcion: {
      es: 'HERON (Hybrid Elevated Radio Observatory for Neutrinos) es un observatorio internacional de neutrinos cósmicos financiado por el European Research Council (ERC). El proyecto busca detectar neutrinos de ultra-alta energía utilizando una combinación de técnicas radio. El Dr. Martín A. Guzzo fue seleccionado como Site Manager argentino. Se encuentran en gestión los convenios institucionales con la UNSJ para la firma en 2026, momento en el cual el LED&T se convertirá en sitio oficial del proyecto.',
      en: 'HERON (Hybrid Elevated Radio Observatory for Neutrinos) is an international cosmic neutrino observatory funded by the European Research Council (ERC). The project seeks to detect ultra-high energy neutrinos using a combination of radio techniques. Dr. Martín A. Guzzo has been selected as Argentine Site Manager. Institutional agreements with UNSJ are being negotiated for signature in 2026, at which time LED&T will become an official project site.',
    },
    socios: {
      es: ['ERC', 'UNSJ', 'INPRES', 'Gobierno de San Juan'],
      en: ['ERC', 'UNSJ', 'INPRES', 'Government of San Juan'],
    },
    tecnologias: ['Radioastronomía', 'Detección de neutrinos', 'RFI', 'SDR'],
    docentes: ['martin-guzzo'],
    becarios: [],
    imagen: '/images/projects/heron/heron-logo.webp',
    href: '/proyectos/heron',
  },
  {
    slug: 'backend-digital-cart',
    nombre: 'Backend Digital del CART',
    categoria: { es: 'RADIOASTRONOMÍA · SDR', en: 'RADIO ASTRONOMY · SDR' },
    estado: 'finalizado',
    estadoLabel: { es: 'Finalizado · 2024', en: 'Completed · 2024' },
    resumen: {
      es: 'Desarrollo de un backend digital basado en Radio Definido por Software (SDR) para el Radiotelescopio Argentino-Chino (CART). Digitalización directa de banda S/X con FPGA RFSoC. Financiamiento PIPE (Municipalidad de Calingasta).',
      en: 'Development of a Software Defined Radio (SDR) based digital backend for the Argentine-Chinese Radio Telescope (CART). Direct S/X band digitization with RFSoC FPGA. PIPE funding (Calingasta Municipality).',
    },
    descripcion: {
      es: 'Proyecto financiado por el Programa de Investigación Plataformas Estratégicas (PIPE) de la Municipalidad de Calingasta. Se desarrolló un backend digital basado en SDR para el Radiotelescopio Argentino-Chino (CART), permitiendo la digitalización directa de las bandas S/X mediante una plataforma FPGA RFSoC. El sistema incluye algoritmos de procesamiento digital de señales para aplicaciones radioastronómicas.',
      en: 'Project funded by the Strategic Platforms Research Program (PIPE) of the Calingasta Municipality. A digital backend based on SDR was developed for the Argentine-Chinese Radio Telescope (CART), enabling direct digitization of S/X bands using an RFSoC FPGA platform. The system includes digital signal processing algorithms for radio astronomy applications.',
    },
    socios: {
      es: ['UNSJ', 'CART', 'Municipalidad de Calingasta'],
      en: ['UNSJ', 'CART', 'Calingasta Municipality'],
    },
    tecnologias: ['RFSoC', 'FPGA', 'SDR', 'Radioastronomía', 'VHDL'],
    docentes: ['martin-guzzo', 'marcelo-segura'],
    becarios: ['Mauro Diamantino'],
    imagen: '/images/capabilities/rfsoc-dual-placas.webp',
    href: '/proyectos/backend-digital-cart',
  },
  {
    slug: 'rfims-cart',
    nombre: 'RFIMS-CART',
    nombreCorto: 'Sistema de Monitoreo de Interferencias de RF',
    categoria: { es: 'RADIOASTRONOMÍA · RFI', en: 'RADIO ASTRONOMY · RFI' },
    estado: 'finalizado',
    estadoLabel: { es: 'Finalizado · 2020', en: 'Completed · 2020' },
    resumen: {
      es: 'Sistema de monitoreo de interferencias de radiofrecuencia (RFI) para el Radiotelescopio Argentino-Chino. Mediciones en banda ancha y angosta, desarrollo de algoritmos de detección basados en SDR.',
      en: 'Radio frequency interference (RFI) monitoring system for the Argentine-Chinese Radio Telescope. Broadband and narrowband measurements, development of SDR-based detection algorithms.',
    },
    descripcion: {
      es: 'Desarrollo de un sistema de monitoreo de interferencias de radiofrecuencia (RFI) para el Radiotelescopio Argentino-Chino (CART). El proyecto incluyó mediciones en banda ancha y angosta en el sitio del observatorio, el desarrollo de algoritmos de detección de RFI basados en SDR, y la implementación de un sistema de alertas. Se realizaron campañas de medición en el Parque Nacional El Leoncito.',
      en: 'Development of a radio frequency interference (RFI) monitoring system for the Argentine-Chinese Radio Telescope (CART). The project included broadband and narrowband measurements at the observatory site, development of SDR-based RFI detection algorithms, and implementation of an alert system. Measurement campaigns were carried out at El Leoncito National Park.',
    },
    socios: { es: ['UNSJ', 'CART', 'OAFA'], en: ['UNSJ', 'CART', 'OAFA'] },
    tecnologias: ['SDR', 'RFI', 'Radioastronomía', 'Python'],
    docentes: ['martin-guzzo', 'juan-pablo-aguiar'],
    becarios: ['Leandro Saldivar', 'Johana Quinteros'],
    imagen: '/images/RFI-CART.png',
    href: '/proyectos/rfims-cart',
  },
  {
    slug: 'bodega-40',
    nombre: 'Bodega 4.0',
    categoria: { es: 'INDUSTRIA 4.0 · IoT', en: 'INDUSTRY 4.0 · IoT' },
    estado: 'finalizado',
    estadoLabel: { es: 'Finalizado · 2022', en: 'Completed · 2022' },
    resumen: {
      es: 'Sistema de monitoreo inteligente para bodegas vitivinícolas. Sensores IoT, computación en la nube, algoritmos de IA para detección de riesgos en procesos de fermentación y añejamiento. Proyecto PDTS UNSJ.',
      en: 'Intelligent monitoring system for wineries. IoT sensors, cloud computing, AI algorithms for risk detection in fermentation and aging processes. PDTS UNSJ project.',
    },
    descripcion: {
      es: 'Desarrollo de un Sistema de Monitoreo Inteligente para bodegas de producción vitivinícola. El sistema integra sensores IoT distribuidos en los procesos de fermentación y añejamiento, computación en la nube para el almacenamiento y procesamiento de datos, y algoritmos de inteligencia artificial para la detección temprana de riesgos. Proyecto PDTS ejecutado en colaboración con la industria vitivinícola local.',
      en: 'Development of an Intelligent Monitoring System for wineries. The system integrates IoT sensors distributed in fermentation and aging processes, cloud computing for data storage and processing, and artificial intelligence algorithms for early risk detection. PDTS project executed in collaboration with the local wine industry.',
    },
    socios: {
      es: ['UNSJ', 'Interalgarrobos S.A.', 'Dirección de Asuntos Vitivinícolas (Gobierno de San Juan)'],
      en: ['UNSJ', 'Interalgarrobos S.A.', 'Directorate of Wine Affairs (Government of San Juan)'],
    },
    tecnologias: ['IoT', 'Sensores', 'Nube', 'Machine Learning'],
    docentes: ['martin-guzzo'],
    becarios: ['Jorge David Asencio', 'Roberto Asencio', 'Guillermo Trigo'],
    imagen: '/images/projects/bodega-40/Bodega40.png',
    href: '/proyectos/bodega-40',
  },
  {
    slug: 'monitoreo-rio-san-juan',
    nombre: 'Monitoreo de la Calidad del Agua · Río San Juan',
    categoria: { es: 'HIDROLOGÍA · CALIDAD DE AGUA', en: 'HYDROLOGY · WATER QUALITY' },
    estado: 'finalizado',
    estadoLabel: { es: 'Finalizado · 2015', en: 'Completed · 2015' },
    resumen: {
      es: 'Red de estaciones de monitoreo continuo de calidad del agua en el Río San Juan. Tecnología DataTaker DT80, sensores multiparamétricos, telemetría GPRS. Proyecto histórico de la SECyTI de San Juan (aprox. 2008-2015).',
      en: 'Continuous water quality monitoring network on the San Juan River. DataTaker DT80 technology, multiparameter sensors, GPRS telemetry. Historical project of SECyTI San Juan (approx. 2008-2015).',
    },
    descripcion: {
      es: 'Desarrollo e implementación de una red de estaciones de monitoreo continuo de calidad del agua en el Río San Juan. Cada estación integraba un datalogger DataTaker DT80, sensores multiparamétricos YSI y biosensores, con telemetría GPRS para transmisión de datos en tiempo real. Proyecto histórico ejecutado para la Secretaría de Ciencia, Tecnología e Innovación de San Juan (SECyTI), operativo aproximadamente entre 2008 y 2015.',
      en: 'Development and implementation of a continuous water quality monitoring network on the San Juan River. Each station integrated a DataTaker DT80 datalogger, YSI multiparameter sensors and biosensors, with GPRS telemetry for real-time data transmission. Historical project executed for the Secretariat of Science, Technology and Innovation of San Juan (SECyTI), operational approximately between 2008 and 2015.',
    },
    socios: { es: ['SECyTI San Juan', 'UNSJ'], en: ['SECyTI San Juan', 'UNSJ'] },
    tecnologias: ['DataTaker', 'GPRS', 'Sensores ambientales', 'SCADA'],
    docentes: ['martin-guzzo'],
    becarios: ['Juan Miguel Doña', 'Leonardo Nievas'],
    imagen: '/images/projects/rio-san-juan/medicion-laboratorio.webp',
    href: '/proyectos/monitoreo-rio-san-juan',
  },
];

export function getProyectosByEstado(estado: Proyecto['estado']): Proyecto[] {
  return proyectos.filter(p => p.estado === estado);
}

export function getProyectosDestacados(): Proyecto[] {
  return proyectos.filter(p => p.destacado).sort((a, b) => (a.orden || 0) - (b.orden || 0));
}

export function getProyectoBySlug(slug: string): Proyecto | undefined {
  return proyectos.find(p => p.slug === slug);
}

export function getProyectosActivos(): Proyecto[] {
  return getProyectosByEstado('activo');
}

export function getProyectosEnEvaluacion(): Proyecto[] {
  return getProyectosByEstado('evaluacion');
}

export function getProyectosFinalizados(): Proyecto[] {
  return getProyectosByEstado('finalizado');
}
