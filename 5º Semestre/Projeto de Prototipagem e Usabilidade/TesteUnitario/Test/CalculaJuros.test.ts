import { CalculaJuros } from "../CalculaJuros";

describe("CalculaJuros", () => {
  it("deve calcular o juros simples corretamente", () => {
    const valorInicial = 1000;
    const taxa = 10;
    const periodo = 5;
    const montanteEsperado = 1200;

    const montanteCalculado = CalculaJuros(valorInicial, taxa, periodo);

    expect(montanteCalculado).toBe(montanteEsperado);
  });
});