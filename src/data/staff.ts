export interface Persona {
  slug: string;
  nombre: string;
  cargoFormal: { es: string; en: string };
  rol?: { es: string; en: string };
  catedras: { es: string[]; en: string[] };
  especialidades: { es: string[]; en: string[] };
  oficina?: string;
  email?: string;
  rolParalelo?: { es: string; en: string };
  bio?: { es: string; en: string };
  foto: string | null;
  esCoordinador?: boolean;
}

export const staff: Persona[] = [
  {
    slug: 'martin-guzzo',
    nombre: 'Dr. Martín A. Guzzo',
    rol: { es: 'Coordinación del LED&T', en: 'LED&T Coordinator' },
    cargoFormal: { es: 'Profesor Titular', en: 'Full Professor' },
    catedras: {
      es: ['Sistemas Digitales A (Plan 2023)', 'Electrónica Digital I y II (Plan 2006)'],
      en: ['Digital Systems A (2023 Plan)', 'Digital Electronics I and II (2006 Plan)'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'FPGA', 'VHDL'],
      en: ['Telecommunications', 'FPGA', 'VHDL'],
    },
    oficina: 'Oficina 3',
    email: 'm.guzzo@unsj.edu.ar',
    bio: {
      es: 'Doctor en Ingeniería. Lleva adelante los proyectos estratégicos del laboratorio: director técnico de CHALÚ-X (módem satelital dual-band), supervisor del Área Electrónica y Electromecánica del SAT-PAE Jáchal, y Site Manager argentino del proyecto HERON (Hybrid Elevated Radio Observatory for Neutrinos, ERC, en gestión de convenios para 2026).',
      en: 'PhD in Engineering. Leads the laboratory strategic projects: technical director of CHALÚ-X (dual-band satellite modem), supervisor of the Electronics and Electromechanical Area of SAT-PAE Jáchal, and Argentine Site Manager of the HERON project (Hybrid Elevated Radio Observatory for Neutrinos, ERC, agreements in negotiation for 2026).',
    },
    foto: '/images/people/martin-guzzo.png',
    esCoordinador: true,
  },
  {
    slug: 'gabriel-canadas',
    nombre: 'Dr. Gabriel E. Cañadas',
    cargoFormal: { es: 'Investigador / Docente', en: 'Researcher / Lecturer' },
    catedras: {
      es: ['Sistemas Digitales C (Plan 2023)', 'Sistemas Digitales I (Bioingeniería)'],
      en: ['Digital Systems C (2023 Plan)', 'Digital Systems I (Bioengineering)'],
    },
    especialidades: {
      es: ['Bioingeniería', 'Adquisición de señales fisiológicas', 'Instrumentación inalámbrica'],
      en: ['Bioengineering', 'Physiological signal acquisition', 'Wireless instrumentation'],
    },
    oficina: 'Oficina 1',
    email: 'gcanadas@unsj.edu.ar',
    foto: '/images/people/gabriel-canadas.png',
  },
  {
    slug: 'eugenio-orosco',
    nombre: 'Dr. Eugenio Orosco',
    cargoFormal: { es: 'Investigador / Docente', en: 'Researcher / Lecturer' },
    catedras: {
      es: ['Sistemas Digitales B (Plan 2023)', 'Sistemas Digitales II y III (Bioingeniería)', 'Microprocesadores', 'Electrónica Digital III (Plan 2006)'],
      en: ['Digital Systems B (2023 Plan)', 'Digital Systems II and III (Bioengineering)', 'Microprocessors', 'Digital Electronics III (2006 Plan)'],
    },
    especialidades: {
      es: ['Procesamiento de señales EMG', 'Robots de asistencia', 'Sistemas embebidos'],
      en: ['EMG signal processing', 'Assistive robotics', 'Embedded systems'],
    },
    oficina: 'Oficina 2',
    email: 'eorosco@inaut.unsj.edu.ar',
    foto: '/images/people/eugenio-orosco.png',
  },
  {
    slug: 'juan-sebastian',
    nombre: 'Ing. Juan Ignacio Sebastián',
    cargoFormal: { es: 'Docente', en: 'Lecturer' },
    catedras: {
      es: ['Sistemas Digitales A (Plan 2023)'],
      en: ['Digital Systems A (2023 Plan)'],
    },
    especialidades: {
      es: ['FPGAs', 'Mantenimiento industrial'],
      en: ['FPGAs', 'Industrial maintenance'],
    },
    oficina: 'Oficina 2',
    email: 'jsebastian@unsj.edu.ar',
    foto: '/images/people/juan-sebastian.png',
  },
  {
    slug: 'juan-pablo-aguiar',
    nombre: 'Ing. Juan Pablo Aguiar',
    cargoFormal: { es: 'Profesor Titular', en: 'Full Professor' },
    catedras: {
      es: ['Telecomunicaciones A y B (Plan 2023)', 'Telecomunicaciones I y II (Plan 2006)'],
      en: ['Telecommunications A and B (2023 Plan)', 'Telecommunications I and II (2006 Plan)'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Sistemas de aplicación científica'],
      en: ['Telecommunications', 'Scientific application systems'],
    },
    oficina: 'Oficina 5',
    email: 'jpaguiar@inpres.gob.ar',
    rolParalelo: {
      es: 'Especialista en INPRES (Instituto Nacional de Prevención Sísmica)',
      en: 'Specialist at INPRES (National Institute of Seismic Prevention)',
    },
    foto: '/images/people/juan-pablo-aguiar.png',
  },
  {
    slug: 'rodolfo-arroqui',
    nombre: 'Ing. Rodolfo H. Arroqui',
    cargoFormal: { es: 'Profesor Titular', en: 'Full Professor' },
    catedras: {
      es: ['Propagación y Radiación (Planes 2006 y 2023)', 'Temas Específicos de Telecomunicaciones I (optativa)'],
      en: ['Propagation and Radiation (2006 and 2023 Plans)', 'Specific Topics in Telecommunications I (elective)'],
    },
    especialidades: {
      es: ['Propagación y radiación electromagnética', 'Telecomunicaciones aplicadas'],
      en: ['Electromagnetic propagation and radiation', 'Applied telecommunications'],
    },
    oficina: 'Oficina 5',
    email: 'rodolfo.arroqui@gmail.com',
    rolParalelo: {
      es: 'Experiencia en sector privado: telecomunicaciones, minería e infraestructura',
      en: 'Private sector experience: telecommunications, mining, and infrastructure',
    },
    foto: '/images/people/rodolfo-arroqui.png',
  },
  {
    slug: 'alejandro-martin',
    nombre: 'Ing. Alejandro D. Martín',
    cargoFormal: { es: 'Profesor Adjunto', en: 'Associate Professor' },
    catedras: {
      es: ['Propagación y Radiación (Planes 2006 y 2023)'],
      en: ['Propagation and Radiation (2006 and 2023 Plans)'],
    },
    especialidades: {
      es: ['Propagación y radiación electromagnética'],
      en: ['Electromagnetic propagation and radiation'],
    },
    oficina: 'Oficina 5',
    email: undefined,
    foto: '/images/people/alejandro-martin.png',
  },
  {
    slug: 'raul-klenzi',
    nombre: 'Mg. Raúl O. Klenzi',
    cargoFormal: { es: 'Profesor de Telecomunicaciones', en: 'Telecommunications Professor' },
    catedras: {
      es: ['Telecomunicaciones I y II (Plan 2006, en cierre)'],
      en: ['Telecommunications I and II (2006 Plan, closing)'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Inteligencia Artificial', 'Teoría de la información'],
      en: ['Telecommunications', 'Artificial Intelligence', 'Information theory'],
    },
    oficina: undefined,
    email: 'rauloscarklenzi@gmail.com',
    foto: '/images/people/raul-klenzi.png',
  },
  {
    slug: 'jeremias-gaia-amoros',
    nombre: 'Ing. Jeremías Gaia Amorós',
    cargoFormal: { es: 'Profesor JTP', en: 'Teaching Assistant Professor (JTP)' },
    catedras: {
      es: ['Sistemas Digitales B', 'Sistemas Digitales II (Bioingeniería)'],
      en: ['Digital Systems B', 'Digital Systems II (Bioengineering)'],
    },
    especialidades: {
      es: ['Procesamiento de Señales e Imágenes', 'Sistemas embebidos', 'Inteligencia artificial', 'Navegación Autónoma'],
      en: ['Signal and Image Processing', 'Embedded systems', 'Artificial intelligence', 'Autonomous navigation'],
    },
    oficina: 'Sala 224',
    email: 'jgaia@inaut.unsj.edu.ar',
    rolParalelo: {
      es: 'Docente e investigador en LED&T e INAUT (Instituto de Automática, UNSJ)',
      en: 'Lecturer and researcher at LED&T and INAUT (Institute of Automatics, UNSJ)',
    },
    bio: {
      es: 'Trabaja en LED&T y en el INAUT (Instituto de Automática, Universidad Nacional de San Juan). Dirección: Av. San Martín Oeste 1109, 5400 San Juan, Argentina. Tel.: +54 0264 4213303. Sala N°: 224.',
      en: 'Works at LED&T and INAUT (Institute of Automatics, National University of San Juan). Address: Av. San Martin Oeste 1109, 5400 San Juan, Argentina. Phone: +54 0264 4213303. Office: Room 224.',
    },
    foto: '/images/people/jeremias-gaia.png',
  },
  {
    slug: 'agustin-ezequiel-allegui-babsia',
    nombre: 'Ing. Agustín Ezequiel Allegui Babsia',
    cargoFormal: { es: 'JTP de Telecomunicaciones A y B', en: 'Teaching Assistant Professor for Telecommunications A and B' },
    catedras: {
      es: ['Telecomunicaciones A', 'Telecomunicaciones B'],
      en: ['Telecommunications A', 'Telecommunications B'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Diseño de hardware y software', 'Automatización de sistemas industriales', 'Tecnología para beneficio comunitario y ambiental'],
      en: ['Telecommunications', 'Hardware and software design', 'Industrial systems automation', 'Technology for community and environmental benefit'],
    },
    rolParalelo: {
      es: 'Profesional en ProMatix SRL',
      en: 'Professional at ProMatix SRL',
    },
    bio: {
      es: 'Ingeniero Electrónico egresado de la Facultad de Ingeniería de la Universidad Nacional de San Juan (FI-UNSJ).',
      en: 'Electronic Engineer graduated from the Faculty of Engineering at the National University of San Juan (FI-UNSJ).',
    },
    foto: '/images/people/agustin-ezequiel-allegui-babsia.png',
  },
  {
    slug: 'gualterio-papparelli',
    nombre: 'Ing. Gualterio Papparelli',
    cargoFormal: { es: 'JTP de Telecomunicaciones A y B', en: 'Teaching Assistant Professor for Telecommunications A and B' },
    catedras: {
      es: ['Telecomunicaciones A', 'Telecomunicaciones B'],
      en: ['Telecommunications A', 'Telecommunications B'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Ingeniería de campo'],
      en: ['Telecommunications', 'Field engineering'],
    },
    rolParalelo: {
      es: 'Ingeniero de campo en Minetech (jornada completa desde 2022). Ex Coordinador de Telecomunicaciones en Cruz Roja Argentina Filial San Juan (2009–2015), con experiencia en ayuda humanitaria en desastres naturales.',
      en: 'Field engineer at Minetech (full-time since 2022). Former Telecommunications Coordinator at Cruz Roja Argentina – San Juan Branch (2009–2015), with experience in humanitarian aid during natural disasters.',
    },
    foto: '/images/people/gualterio-papparelli.png',
  },
];

export function getCoordinador(): Persona | undefined {
  return staff.find(p => p.esCoordinador === true);
}

export function getEquipoDocente(): Persona[] {
  return staff.filter(p => !p.esCoordinador);
}

export function getPersonaBySlug(slug: string): Persona | undefined {
  return staff.find(p => p.slug === slug);
}
