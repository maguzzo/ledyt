export type EstadoCapacitacion = {
  tipo: 'dictada' | 'propuesta';
  ediciones?: number;
};

export type Diplomatura = {
  slug: string;
  nombre: string;
  enfoque: string;
  modulos: string[];
  estado: EstadoCapacitacion;
};

export const diplomaturas: Diplomatura[] = [
  {
    slug: 'redes-de-computadoras',
    nombre: 'Diplomatura Universitaria en Redes de Computadoras',
    enfoque:
      'Capacitacion en principios, tecnologias cableadas e inalambricas, operacion, configuracion y mantenimiento de redes informaticas, con enfasis en seguridad basica.',
    modulos: [
      'Fundamentos de Redes de Computadoras',
      'Seguridad Informatica en Redes',
      'Diseno de Redes Inalambricas y Cableadas y Resolucion de Problemas',
    ],
    estado: {
      tipo: 'propuesta',
    },
  },
  {
    slug: 'fabricacion-y-reparacion-de-fuentes',
    nombre: 'Diplomatura Universitaria en Fabricacion y Reparacion de Fuentes de Alimentacion (DC-DC y AC-DC)',
    enfoque:
      'Comprender, disenar, fabricar y reparar fuentes de alimentacion, esenciales para el funcionamiento de equipamiento electronico.',
    modulos: [
      'Electrotecnia, Electricidad y Mediciones Fundamentales',
      'Diseno de Fuentes de Alimentacion Lineales y PCB',
      'Reparacion de Fuentes Conmutadas y Lineales',
    ],
    estado: {
      tipo: 'propuesta',
    },
  },
  {
    slug: 'internet-de-las-cosas',
    nombre: 'Diplomatura Universitaria en Internet de las Cosas (IoT)',
    enfoque:
      'Formacion en electronica, programacion de microcontroladores (Arduino y ESP32), conectividad e interaccion con plataformas en la nube para desarrollar soluciones IoT.',
    modulos: [
      'Fundamentos de Electricidad, Electronica y Componentes Digitales',
      'Programacion con Arduino y Primeros Pasos en Conectividad',
      'Creacion de Soluciones IoT Sencillas y Visualizacion de Datos',
    ],
    estado: {
      tipo: 'propuesta',
    },
  },
  {
    slug: 'fibra-optica',
    nombre: 'Diplomatura Universitaria en Instalacion y Mantenimiento de Redes de Fibra Optica',
    enfoque:
      'Capacitacion tecnica para instalacion y mantenimiento de redes de datos basadas en fibra optica, tecnologia clave para proveedores de internet (ISP).',
    modulos: [
      'Fundamentos de la Fibra Optica',
      'Instalacion y Mantenimiento de Redes de Fibra Optica',
      'Implementacion de Proyectos y Redes de Datos',
    ],
    estado: {
      tipo: 'dictada',
      ediciones: 3,
    },
  },
  {
    slug: 'radio-operador-zonas-de-montana',
    nombre: 'Diplomatura Universitaria en Radio-Operacion para Zonas de Montana',
    enfoque:
      'Capacitacion tecnica y operativa para radiocomunicacion en entornos desafiantes, como zonas de montana y ambientes industriales.',
    modulos: [
      'Fundamentos Electricos y de Radiocomunicacion',
      'Sistemas Digitales, Operacion, Normativa y Emergencias',
      'Programacion, Calculo de Enlaces y Mantenimiento Avanzado',
    ],
    estado: {
      tipo: 'dictada',
      ediciones: 1,
    },
  },
];

export function getEstadoCapacitacionTexto(estado: EstadoCapacitacion): string {
  if (estado.tipo === 'propuesta') {
    return 'Propuesta por el LED&T';
  }

  const ediciones = estado.ediciones ?? 1;
  const oportunidades = ediciones === 1 ? 'oportunidad' : 'oportunidades';
  return `Ya dictada en ${ediciones} ${oportunidades}`;
}
