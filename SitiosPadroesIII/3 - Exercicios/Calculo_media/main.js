let listaNota = [];
let nota;



function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function inserirLista() {

     document.getElementById("campoNota").innerHTML = "";
     nota = parseFloat(document.getElementById("notaAluno").value);
     document.getElementById("notaAluno").value = "";
     if (nota == 0 || isNaN(nota)) {
          document.getElementById("campoNota").innerHTML = "Preencha corretamento o campo nota";
     } else {
          listaNota.push(nota);

     }
}

function CalculaMedia() {

     if (listaNota.length < 2) {
          document.getElementById("campoNota").innerHTML = "Insira mais de uma nota";
     } else {

          let tam_lista = listaNota.length;
          let soma = 0;

          var i = 0;

          while (i < tam_lista) {
               soma += listaNota[i];
               i++;
          }

          media = soma / tam_lista;
          document.getElementById("campoNota").innerHTML = "A media das notas é: " + media;
          
          limpaLista();
     }

}


function limpaLista(){
     listaNota = "";
}