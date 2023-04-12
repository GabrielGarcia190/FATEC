import { CalculaJuros } from "../CalculaJuros";

describe("CalculaJuros", () => {
  it("Deve calcular o juros simples corretamente", () => {
    const valorInicial = 1000;
    const taxa = 10;
    const periodo = 5;
    const montanteEsperado = 1500;

    const montanteCalculado = CalculaJuros(valorInicial, taxa, periodo);

    expect(montanteCalculado).toBe(montanteEsperado);
  });
});