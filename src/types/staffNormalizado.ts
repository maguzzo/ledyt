export type TituloAcademico = 'Dr.' | 'Dr. Ing.' | 'Mg.' | 'Msc. Ing.' | 'Ing.' | '';

export type CargoNormalizado =
	| 'Titular'
	| 'Asociado'
	| 'Adjunto'
	| 'JTP'
	| 'Ayudante de Segunda'
	| 'Emérito'
	| '';

export type DedicacionNormalizada = 'Exclusivo' | 'Semi-exclusivo' | 'Simple' | '';

export type EstadoNormalizado = 'activo' | 'en_licencia' | 'jubilado' | 'in_memoriam';

export type PlanCatedraNormalizado = '2023' | '2006' | 'Bioingeniería' | '';

export interface CatedraNormalizada {
	nombre: string;
	plan: PlanCatedraNormalizado;
	activa: boolean;
}

export interface PersonaNormalizada {
	slug: string;
	nombre_completo: string;
	titulo_academico: TituloAcademico;
	cargo: CargoNormalizado;
	dedicacion: DedicacionNormalizada;
	es_investigador: boolean;
	estado: EstadoNormalizado;
	foto_url: string | null;
	email: string;
	oficina: string;
	catedras: CatedraNormalizada[];
	especialidades: string[];
	afiliacion_externa: string;
	bio_es: string;
	bio_en: string;
	homenaje: boolean;
}