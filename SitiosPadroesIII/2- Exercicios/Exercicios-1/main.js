
function Tabuada() {
     document.getElementById("tabuada").innerHTML = "";
     let numero = parseInt(document.getElementById("numeroEscolido").value);
     document.getElementById('tabuada').style.display = 'block';
     console.log(numero);
     if (numero < 0) {
          document.getElementById("tabuada").innerHTML = "Nenhum número foi digitado";
          return;
     }
     for (let i = 0; i <= 10; i++) {
          document.getElementById("tabuada").innerHTML += numero + " x " + i + " = " + (numero * i) + "<br/>";
     }

}

function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function MostrarValor() {

}