export function CalculaJuros(valorInicial: number, taxa: number, tempo:number) {
  const juros = valorInicial * (taxa / 100) * tempo;
  const montante = valorInicial + juros; 

  return Math.round(montante * 100) / 100;
}
