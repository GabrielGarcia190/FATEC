const btn = document.getElementById(btn);
btn.addEventListener("click", calcular);

function calcular() {
    let confianca =  document.getElementById("campoConf").value;
let tam_amostra = document.getElementById("campoTAmost").value;
let sucesso = document.getElementById("campSu").value;
    let p = sucesso / tam_amostra;
    let pnegativo = 1 - p;
    let resultado = confianca * (Math.sqrt((p * pnegativo) / tam_amostra));
    console.log(resultado.toFixed(2));
}



