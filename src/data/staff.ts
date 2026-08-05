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
  esEmerito?: boolean;
  esInMemoriam?: boolean;
}

export const staff: Persona[] = [
  {
    slug: 'martin-guzzo',
    nombre: 'Dr. Martín A. Guzzo',
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
    slug: 'sebastian-sansoni',
    nombre: 'Dr. Ing. Sebastián Sansoni',
    cargoFormal: { es: 'Profesor Titular (Reemplazante)', en: 'Full Professor (Substitute)' },
    catedras: {
      es: ['Telecomunicaciones B (Plan 2023)'],
      en: ['Telecommunications B (2023 Plan)'],
    },
    especialidades: {
      es: ['Control de Procesos', 'Inteligencia Artificial en Control', 'Robótica y Sistemas de Manufactura', 'Electrónica Industrial'],
      en: ['Process Control', 'Artificial Intelligence in Control', 'Robotics and Manufacturing Systems', 'Industrial Electronics'],
    },
    oficina: 'Sala 206 (INAUT)',
    email: 'ssansoni@inaut.unsj.edu.ar',
    rolParalelo: {
      es: 'Investigador en INAUT (Instituto de Automática, UNSJ–CONICET)',
      en: 'Researcher at INAUT (Institute of Automatics, UNSJ–CONICET)',
    },
    foto: '/images/people/sebastian-sansoni.png',
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
    slug: 'nicolas-trigo',
    nombre: 'Ing. Nicolás Trigo',
    cargoFormal: { es: 'Adscripto de Telecomunicaciones A y B', en: 'Course Assistant for Telecommunications A and B' },
    catedras: {
      es: ['Telecomunicaciones A', 'Telecomunicaciones B'],
      en: ['Telecommunications A', 'Telecommunications B'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Conmutación', 'Automatización de redes'],
      en: ['Telecommunications', 'Switching', 'Network automation'],
    },
    rolParalelo: {
      es: 'Especialista de Conmutación y Automatización en Claro Argentina',
      en: 'Switching and Automation Specialist at Claro Argentina',
    },
    foto: '/images/people/nicolas-trigo.png',
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
  {
    slug: 'marcelo-segura',
    nombre: 'Dr. Ing. Marcelo J. Segura',
    cargoFormal: { es: 'Profesor Titular (en licencia)', en: 'Full Professor (on leave)' },
    catedras: {
      es: ['Temas Específicos de Telecomunicaciones III (Software Defined Radio)'],
      en: ['Specific Topics in Telecommunications III (Software Defined Radio)'],
    },
    especialidades: {
      es: ['Radioastronomía', 'Radio Definida por Software (SDR)', 'Monitoreo RFI', 'Telecomunicaciones'],
      en: ['Radio astronomy', 'Software Defined Radio (SDR)', 'RFI monitoring', 'Telecommunications'],
    },
    rolParalelo: {
      es: 'Director del Observatorio Astronómico Félix Aguilar (OAFA, UNSJ) · en licencia en el LED&T',
      en: 'Director of the Félix Aguilar Astronomical Observatory (OAFA, UNSJ) · on leave from LED&T',
    },
    bio: {
      es: 'Doctor Ingeniero con amplia trayectoria en radioastronomía y telecomunicaciones. Fue Project Manager del CART (China-Argentina Radio Telescope) designado por CONICET. Participó en proyectos de detección de interferencias de radiofrecuencia (RFI) en la Estación CESCO-El Leoncito y en el proyecto SAT-PAE Jáchal. Actualmente en licencia, ejerciendo la Dirección del Observatorio Astronómico Félix Aguilar (OAFA–UNSJ).',
      en: 'Doctor Engineer with extensive experience in radio astronomy and telecommunications. Served as Project Manager of CART (China-Argentina Radio Telescope) appointed by CONICET. Participated in RFI detection projects at the CESCO-El Leoncito Station and the SAT-PAE Jáchal project. Currently on leave as Director of the Félix Aguilar Astronomical Observatory (OAFA–UNSJ).',
    },
    foto: '/images/people/marcelo-segura.png',
  },
  {
    slug: 'carlos-dellaquila',
    nombre: 'Ing. Carlos R. Dell\'Aquila',
    cargoFormal: { es: 'Docente / Investigador (en licencia)', en: 'Lecturer / Researcher (on leave)' },
    catedras: {
      es: ['Temas Específicos de Electrónica Digital I'],
      en: ['Specific Topics in Digital Electronics I'],
    },
    especialidades: {
      es: ['Sistemas embebidos', 'Procesamiento de señales biomédicas', 'Bioingeniería', 'Adquisición inalámbrica de señales'],
      en: ['Embedded systems', 'Biomedical signal processing', 'Bioengineering', 'Wireless signal acquisition'],
    },
    oficina: undefined,
    email: 'carlos.dellaquila@unsj.edu.ar',
    rolParalelo: {
      es: 'Investigador en el CERN · en licencia en el LED&T',
      en: 'Researcher at CERN · on leave from LED&T',
    },
    bio: {
      es: 'Ingeniero Electrónico egresado con Diploma de Honor de la FI-UNSJ (2014, promedio 9.13). Doctorando en Ingeniería de Sistemas de Control (INAUT–UNSJ / CONICET). Becario doctoral CONICET tipo I. Especialista en sistemas embebidos para monitoreo ambulatorio de señales biomédicas. Participó en proyectos de I+D junto al Gabinete de Tecnología Médica (UNSJ) y el LED&T, con publicaciones internacionales en bioingeniería y sistemas embebidos. Actualmente en licencia por investigación en el CERN.',
      en: 'Electronic Engineer graduated with Honors Diploma from FI-UNSJ (2014, GPA 9.13). PhD candidate in Control Systems Engineering (INAUT–UNSJ / CONICET). CONICET Type I doctoral fellow. Specialist in embedded systems for ambulatory biomedical signal monitoring. Participated in R&D projects with the Medical Technology Lab (UNSJ) and LED&T, with international publications in bioengineering and embedded systems. Currently on leave for research at CERN.',
    },
    foto: '/images/people/carlos-dellaquila.png',
  },
  {
    slug: 'carlos-gil',
    nombre: 'Ing. Carlos Gabriel Gil',
    cargoFormal: { es: 'Profesor Titular (jubilado)', en: 'Full Professor (retired)' },
    catedras: {
      es: ['Sistemas Digitales II', 'Informática I', 'Informática II', 'Microprocesadores'],
      en: ['Digital Systems II', 'Informatics I', 'Informatics II', 'Microprocessors'],
    },
    especialidades: {
      es: ['Sistemas Digitales', 'Control de Sistemas', 'Microprocesadores', 'Sistemas embebidos', 'Bioingeniería'],
      en: ['Digital Systems', 'Systems Control', 'Microprocessors', 'Embedded systems', 'Bioengineering'],
    },
    rolParalelo: {
      es: 'Fundador y desarrollador histórico del LED&T',
      en: 'Founder and historical developer of LED&T',
    },
    bio: {
      es: 'Ingeniero Electromecánico (1980, UNSJ) con orientación en Control. Pionero en la formación del LED&T desde su etapa formativa, con una trayectoria docente e investigadora que abarca más de 40 años (1977–actualmente jubilado). Desarrolló sistemas de control distribuido, instrumentación electrónica y aplicaciones en bioingeniería. Supervisor de numerosas tesis de grado, becarios e iniciador de múltiples líneas de investigación en sistemas digitales, monitoreo de señales biomédicas y plataformas robóticas. Su legado incluye la direccion de proyectos estratégicos que forman la base actual de investigación del laboratorio.',
      en: 'Electromechanical Engineer (1980, UNSJ) with a Control orientation. Pioneer in LED&T\'s formative stages, with a teaching and research career spanning over 40 years (1977–currently retired). Developed distributed control systems, electronic instrumentation, and bioengineering applications. Supervised numerous thesis projects and graduate researchers, and initiated multiple research lines in digital systems, biomedical signal monitoring, and robotic platforms. His legacy includes the direction of strategic projects that form the current foundation of laboratory research.',
    },
    foto: '/images/people/carlos-gil.png',
    esEmerito: true,
  },
  {
    slug: 'gustavo-ensinck',
    nombre: 'Ing. Gustavo A. Ensinck',
    cargoFormal: { es: 'Profesor Titular (jubilado)', en: 'Full Professor (retired)' },
    catedras: {
      es: ['Microprocesadores I', 'Microprocesadores II'],
      en: ['Microprocessors I', 'Microprocessors II'],
    },
    especialidades: {
      es: ['Microprocesadores', 'Sistemas Digitales', 'FPGA', 'Hardware Programable', 'Control de Sistemas'],
      en: ['Microprocessors', 'Digital Systems', 'FPGA', 'Programmable Hardware', 'Systems Control'],
    },
    rolParalelo: {
      es: 'Investigador y mentor en desarrollo de hardware programable',
      en: 'Researcher and mentor in programmable hardware development',
    },
    bio: {
      es: 'Ingeniero Electrónico egresado de la UNSJ. Jefe de Trabajos Prácticos (por concurso) y posteriormente Profesor Titular a partir de 2000 en las cátedras de Microprocesadores I y II. Cotitular de numerosos proyectos de investigación en sistemas digitales, FPGA, microcontroladores y hardware programable. Supervisor y codirector de múltiples tesis de grado y becarios. Colaborador estratégico en el desarrollo de sistemas embebidos para aplicaciones biomédicas, agricultura de precisión y plataformas robóticas. Desde 1991 desarrolló sistemas electrónicos de avanzada en el sector privado, aportando experiencia aplicada al laboratorio.',
      en: 'Electronic Engineer graduated from UNSJ. Head of Practical Labs (by competition) and subsequently Full Professor from 2000 in Microprocessors I and II courses. Co-holder of numerous research projects in digital systems, FPGA, microcontrollers, and programmable hardware. Supervisor and co-director of multiple thesis projects and graduate researchers. Strategic collaborator in the development of embedded systems for biomedical applications, precision agriculture, and robotic platforms. Since 1991 developed advanced electronic systems in the private sector, bringing applied experience to the laboratory.',
    },
    email: 'gustavo@unsj.edu.ar',
    foto: '/images/people/gustavo-ensinck.png',
    esEmerito: true,
  },
  {
    slug: 'roberto-linares',
    nombre: 'Ing. Roberto Teófilo Linares',
    cargoFormal: { es: 'Profesor de Telecomunicaciones (in memoriam)', en: 'Telecommunications Professor (in memoriam)' },
    catedras: {
      es: ['Telecomunicaciones I', 'Telecomunicaciones II'],
      en: ['Telecommunications I', 'Telecommunications II'],
    },
    especialidades: {
      es: ['Telecomunicaciones', 'Redes', 'Transmisión por fibra óptica', 'Transmisión digital (SDH)', 'FPGA'],
      en: ['Telecommunications', 'Networks', 'Fiber optic transmission', 'Digital transmission (SDH)', 'FPGA'],
    },
    email: undefined,
    rolParalelo: {
      es: 'Homenaje póstumo · In memoriam',
      en: 'Posthumous tribute · In memoriam',
    },
    bio: {
      es: 'Ingeniero Electrónico (1991) y docente de Telecomunicaciones I y II. Participó en proyectos de investigación como IPTV Learning y RFIMS-CART para monitoreo de interferencias de RF en radioastronomía. Desarrolló una extensa trayectoria profesional en mantenimiento e ingeniería de redes en el sector de cable y telecomunicaciones. Recordado por su compromiso docente y su aporte histórico al LED&T.',
      en: 'Electronic Engineer (1991) and lecturer of Telecommunications I and II. Participated in research projects such as IPTV Learning and RFIMS-CART for RF interference monitoring in radio astronomy. Built an extensive professional career in maintenance and network engineering in the cable and telecommunications sector. Remembered for his teaching commitment and his historical contribution to LED&T.',
    },
    foto: '/images/people/roberto-linares.png',
    esEmerito: true,
    esInMemoriam: true,
  },
  {
    slug: 'cristian-sisterna',
    nombre: 'Msc. Ing. Cristian A. Sisterna',
    cargoFormal: { es: 'Profesor Asociado', en: 'Associate Professor' },
    catedras: {
      es: ['Sistemas Digitales I', 'Sistemas Digitales II', 'Diseño de Sistemas Digitales Avanzados con VHDL e Implementados en FPGAs'],
      en: ['Digital Systems I', 'Digital Systems II', 'Advanced Digital Systems Design with VHDL and FPGA Implementation'],
    },
    especialidades: {
      es: ['Sistemas Digitales', 'FPGA', 'VHDL', 'Hardware Programable', 'Procesamiento Digital de Señales', 'Diseño de Hardware'],
      en: ['Digital Systems', 'FPGA', 'VHDL', 'Programmable Hardware', 'Digital Signal Processing', 'Hardware Design'],
    },
    oficina: undefined,
    email: 'cristian@unsj.edu.ar',
    rolParalelo: {
      es: 'Presidente de Promatix SRL · Docente en IDIA-UNSJ por extensión al DEA-LED&T',
      en: 'President of Promatix SRL · Lecturer at IDIA-UNSJ by extension to DEA-LED&T',
    },
    bio: {
      es: 'Master en Ingeniería de Computadoras por Arizona State University (1998). Ingeniero Electrónico egresado de UNSJ (1988). Investigador Categoría II de CONEAU. Amplia experiencia en diseño y desarrollo de sistemas digitales complejos basados en FPGA y VHDL. Trabajó como Ingeniero Senior en Intel Corporation y Marvell Semiconductores desarrollando validación de ASICs para dispositivos móviles. Profesor Instructor internacional en cursos de FPGA patrocinados por ICTP-UNESCO. Actualmente director de C7 Technology, empresa dedicada a capacitación y servicios de diseño en sistemas digitales programables.',
      en: 'Master in Computer Engineering from Arizona State University (1998). Electronic Engineer graduated from UNSJ (1988). CONEAU Category II Researcher. Extensive experience in design and development of complex digital systems based on FPGA and VHDL. Worked as Senior Engineer at Intel Corporation and Marvell Semiconductors developing ASIC validation for mobile devices. International Instructor Professor in FPGA courses sponsored by ICTP-UNESCO. Currently director of C7 Technology, a company dedicated to training and design services for programmable digital systems.',
    },
    foto: '/images/people/cristian-sisterna.png',
  },
];

export function getCoordinador(): Persona | undefined {
  return staff.find(p => p.esCoordinador === true);
}

export function getEquipoDocente(): Persona[] {
  return staff.filter(p => !p.esCoordinador && !p.esEmerito);
}

export function getEmeritos(): Persona[] {
  return staff.filter(p => p.esEmerito === true);
}

export function getPersonaBySlug(slug: string): Persona | undefined {
  return staff.find(p => p.slug === slug);
}
