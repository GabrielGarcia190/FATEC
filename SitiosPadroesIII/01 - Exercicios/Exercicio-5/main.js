function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function MostrarValor() {
     let nome = document.getElementById("campoProduto").value;
     let valor = parseFloat(document.getElementById("campoValor").value);
     let desconto = parseFloat((valor / 2)).toFixed(2) ;
     let promocao = parseFloat((valor * 3) - desconto).toFixed(2);

     
     if (nome == null || nome == '' || valor < 0) {
          document.getElementById("texto1").innerHTML = "Preencha os campos corretamente";
     } else {
          
          document.getElementById("texto1").innerHTML = nome + " - Promoção: Leve 3 por R$" + promocao+ " - 3º Unidade sai por R$ "+ desconto;
     }
     document.getElementById('texto1').style.display = 'block';
}