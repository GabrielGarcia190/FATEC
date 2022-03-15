let listaNome = [];
let listaConta = [];
let valorTotal = 0;


function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function LimpaCampo() {
     document.getElementById("texto1").innerHTML = "";
     document.getElementById("conta").innerHTML = "";

}

function Verifica(descricao, valorConta) {
     if (descricao == null || descricao == "" || valorConta < 0 || valorConta == "") {
          document.getElementById("texto1").innerHTML += "Por favor preencha os campos corretamento lesado."
          return false;
     }
}


function Conta() {

     LimpaCampo();

     document.getElementById('texto1').style.display = 'block';
     document.getElementById('conta').style.display = 'block';


     let descricao = document.getElementById("descricao").value;
     let valorConta = parseFloat(document.getElementById("valorConta").value);

     

     if(!Verifica(descricao, valorConta)) return;
     
     listaNome.push(descricao);
     listaConta.push(valorConta);

     let soma = 0;

     for (var i = 0; i < listaConta.length; i++) {
          soma += listaConta[i];
     }

     console.log(soma);

     Mostrar();

     document.getElementById("conta").innerHTML = "Valor Total: R$" + soma.toFixed(2);

}


function Mostrar() {
     for (var i = 0; i < listaConta.length; i++) {
          document.getElementById("texto1").innerHTML += "Produto: " + listaNome[i] + " || R$ " + listaConta[i].toFixed(2) + "<br/>";
     }
}