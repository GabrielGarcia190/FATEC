const score = 2.575;
const desvio_padrao = 5.00;
const tam_amostra = 100;

const intervalo = score * (desvio_padrao / (Math.sqrt(tam_amostra)));

console.log("RESULTADO = " + intervalo);
console.log("RESULTADO  ARREDONDADO = " + intervalo.toFixed(2));