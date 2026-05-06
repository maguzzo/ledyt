import { staff } from './staff';
import { adaptarPersona } from './staffAdapter';
import type { PersonaNormalizada } from '../types/staffNormalizado';

export const staffNormalizado: PersonaNormalizada[] = staff.map(adaptarPersona);

export function getPersonaNormalizadaBySlug(slug: string): PersonaNormalizada | undefined {
	return staffNormalizado.find((persona) => persona.slug === slug);
}

export function getEquipoDocenteNormalizado(): PersonaNormalizada[] {
	return staffNormalizado.filter(
		(persona) => persona.estado !== 'in_memoriam' && persona.estado !== 'jubilado' && persona.cargo !== 'Emérito',
	);
}

export function getEmeritosNormalizados(): PersonaNormalizada[] {
	return staffNormalizado.filter((persona) => persona.cargo === 'Emérito' || persona.estado === 'jubilado');
}

export function getInMemoriamNormalizados(): PersonaNormalizada[] {
	return staffNormalizado.filter((persona) => persona.estado === 'in_memoriam');
}