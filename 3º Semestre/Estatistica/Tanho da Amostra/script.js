let confianca = 1.96;
let p = 0.3;
let pnegativo = 1 - p;

let etapa1 = (Math.pow(confianca, 2));
let etapa2 = (etapa1 * p) * pnegativo;
let n = (etapa2) / Math.pow(0.02, 2);

console.log(n << 1);