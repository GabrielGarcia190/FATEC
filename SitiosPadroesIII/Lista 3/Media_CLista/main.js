let notas = [];

function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}



function inserirNota() {

     let nota_aluno = parseInt(document.getElementById("campoNota").value);
     console.log(nota_aluno);
     if (nota_aluno == "" || isNaN(nota_aluno)) {
          document.getElementById("quantNotas").innerHTML = "Preencha os campos corretamente";
     } else {
          notas.push(nota_aluno);
     }
     document.getElementById("campoNota").value = ""



}

function calcular() {


     let quant_notas = notas.length;
     let soma = 0;

     for (let i = 0; i < quant_notas; i++) {
          soma = (soma + notas[i]);
     }

     console.log(soma);

     document.getElementById("media").innerHTML = "media das notas:" + (soma/quant_notas);
     document.getElementById("quantNotas").innerHTML = "Notas Digitadas: " + quant_notas;


}

function limpaLista(){
     console.log(notas);
     notas = "";
     console.log(notas);
}