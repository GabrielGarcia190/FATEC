function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function limpaCampos() {

     document.getElementById("nomeCarro").value = '';
     document.getElementById("valorCarro").value = '';
     document.getElementById("idadeCarro").value = '';


}


function ValorCarro() {
     // limpaCampos();
     let data = new Date().getFullYear();

     let valorCarro = parseFloat(document.getElementById("valorCarro").value);
     let nomeCarro = document.getElementById("nomeCarro").value;
     let idadeCarro = parseInt(document.getElementById("idadeCarro").value);

     if (valorCarro == 0 || isNaN(valorCarro) || nomeCarro == "" || nomeCarro == 0 || idadeCarro == 0 || isNaN(idadeCarro)) {
          document.getElementById("valor").innerHTML = "Preencha os campos corretamente";
     }

     document.getElementById("nome").innerHTML = "Nome do Veiculo: R$ " + nomeCarro;

     valorRevenda = (valorCarro + (valorCarro * 0.10));

     if (idadeCarro > data) {
          document.getElementById("idade").innerHTML = "Preencha com o campo correto";
     } else if (idadeCarro == data) {
          document.getElementById("idade").innerHTML = "Estado de Conservação: Novo";
     } else {
          document.getElementById("idade").innerHTML = "Estado de Conservação: Usado";
     }

     document.getElementById("valor").innerHTML = "Valor do Veiculo: R$ " + (valorRevenda) + ",00";





}
