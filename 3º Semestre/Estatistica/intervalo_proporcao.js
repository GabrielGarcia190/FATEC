const confianca = 1.96;
const tam_amostra = 1000;



let p = 89 / tam_amostra;

let pnegativo = 1 - p;

let resultado = confianca * (Math.sqrt((p * pnegativo) / tam_amostra));

console.log(resultado.toFixed(2));

