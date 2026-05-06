import type { Persona } from './staff';
import type {
	CargoNormalizado,
	EstadoNormalizado,
	PersonaNormalizada,
	PlanCatedraNormalizado,
	TituloAcademico,
} from '../types/staffNormalizado';

const titulosOrdenados: TituloAcademico[] = ['Dr. Ing.', 'Msc. Ing.', 'Dr.', 'Mg.', 'Ing.'];

function detectarTituloAcademico(nombre: string): TituloAcademico {
	return titulosOrdenados.find((titulo) => nombre.startsWith(`${titulo} `) || nombre === titulo) ?? '';
}

function extraerNombreCompleto(nombre: string): string {
	const titulo = detectarTituloAcademico(nombre);
	if (!titulo) {
		return nombre;
	}

	return nombre.replace(new RegExp(`^${titulo.replace('.', '\\.').replace('.', '\\.')}\\s+`), '').trim();
}

function inferirCargo(cargoFormalEs: string): CargoNormalizado {
	if (cargoFormalEs.includes('Titular')) {
		return 'Titular';
	}

	if (cargoFormalEs.includes('Asociado')) {
		return 'Asociado';
	}

	if (cargoFormalEs.includes('Adjunto')) {
		return 'Adjunto';
	}

	if (cargoFormalEs.includes('JTP')) {
		return 'JTP';
	}

	if (cargoFormalEs.includes('Ayudante de Segunda')) {
		return 'Ayudante de Segunda';
	}

	if (cargoFormalEs.includes('Emérito') || cargoFormalEs.includes('emérito')) {
		return 'Emérito';
	}

	return '';
}

function inferirEstado(persona: Persona): EstadoNormalizado {
	if (persona.esInMemoriam === true) {
		return 'in_memoriam';
	}

	if (persona.esEmerito === true) {
		return 'jubilado';
	}

	return 'activo';
}

function inferirPlanCatedra(catedra: string): PlanCatedraNormalizado {
	if (catedra.includes('Bioingeniería')) {
		return 'Bioingeniería';
	}

	if (catedra.includes('2023')) {
		return '2023';
	}

	if (catedra.includes('2006')) {
		return '2006';
	}

	return '';
}

export function adaptarPersona(persona: Persona): PersonaNormalizada {
	return {
		slug: persona.slug,
		nombre_completo: extraerNombreCompleto(persona.nombre),
		titulo_academico: detectarTituloAcademico(persona.nombre),
		cargo: inferirCargo(persona.cargoFormal.es),
		dedicacion: '',
		es_investigador: true,
		estado: inferirEstado(persona),
		foto_url: persona.foto,
		email: persona.email ?? '',
		oficina: persona.oficina ?? '',
		catedras: persona.catedras.es.map((catedra) => ({
			nombre: catedra,
			plan: inferirPlanCatedra(catedra),
			activa: !catedra.includes('en cierre'),
		})),
		especialidades: persona.especialidades.es,
		afiliacion_externa: persona.rolParalelo?.es ?? '',
		bio_es: persona.bio?.es ?? '',
		bio_en: persona.bio?.en ?? '',
		homenaje: persona.esInMemoriam === true,
	};
}