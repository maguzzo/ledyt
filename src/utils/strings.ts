export function getIniciales(nombre: string): string {
  const palabras = nombre.replace(/Dr\. |Mg\. |Ing\. /g, '').split(' ');
  return palabras.map(p => p[0]).join('').slice(0, 2).toUpperCase();
}
