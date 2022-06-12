function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function Limpar(){
     document.getElementById("mostrarArvore").innerHTML = "";
 }
 


 function GeraArvore(){
     let tamanho = document.getElementById("tamanho").value;
     
     Limpar();
     
     let linha = "";

     for (let x = 0; x < tamanho; x++) {
         linha += "*";

         document.getElementById("mostrarArvore").innerHTML += linha + "<br>";
     }

     document.getElementById("mostrarArvore").innerHTML += "*<br>*";

 }