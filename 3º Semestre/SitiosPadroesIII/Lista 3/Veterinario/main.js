let convenio = 1;

function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}



function opcaoConvenio(radio) {
     convenio = document.getElementById("escolheConvenio").value;
     console.log(convenio);

     if (radio.value == '1') {
          convenio = 1
     }
     else {
          convenio = 0
     }
}

function calcularDesconto(valor, taxa_desconto) {
     return valor * taxa_desconto
}

function Calcular() {
     let valor_compra = document.getElementById("campoValor").value;

     let desconto = 0.1

     if (convenio) {
          let tipo_de_convenio = document.getElementById("tipoConvenio");
          if (tipo_de_convenio == 'amigo-animal') {
               desconto = 0.2
          } else {
               desconto = 0.5
          }
     }

     document.getElementById("desconto").innerHTML = `<br>Desconto: R$${calcularDesconto(valor_compra, desconto).toFixed(2)} <br />
  A pagar: R$${(valor_compra - (calcularDesconto(valor_compra, desconto))).toFixed(2)}`;
}
