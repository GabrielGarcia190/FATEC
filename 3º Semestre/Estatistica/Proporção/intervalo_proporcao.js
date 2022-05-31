
let confianca =  ;
let tam_amostra = ;
let sucesso = ;
    let p = sucesso / tam_amostra;
    let pnegativo = 1 - p;
    let resultado = confianca * (Math.sqrt((p * pnegativo) / tam_amostra));
    console.log(resultado.toFixed(2));



