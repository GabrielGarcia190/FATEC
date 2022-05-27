let select;

function editarSlide() {
    document.getElementById("editar").style.display = "flex";
    document.getElementById("botoes").style.display = "none";
}



document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("slide").style.display = "none";
        document.getElementById("botoes").style.display = "block";
    }
});


function cancelarApreesntacao() {
    document.getElementById("botoes").style.display = "block";
    document.getElementById("editar").style.display = "none";
}



function salvarEdicao() {
    let legenda = document.getElementById("campoLegenda").value;
    if (legenda == null || legenda == "") {
        document.getElementById("campoLegenda").value = "*Insira algo aqui para salvar";
    } else {
        document.getElementById("p1").innerHTML = legenda;
        document.getElementById("campoLegenda").value = "Salvo com Sucesso!!!";
    }
}

 function opcaoSelecionada(obj){
    select = obj.value;
    console.log(select);
}

function carregarImagem(event) {
    let selectFile = event.target.files[0];
    let reader = new FileReader();
}

function apresentar() {
    document.getElementById("slide").style.display = "block";
    document.getElementById("botoes").style.display = "none";
    document.getElementById("editar").style.display = "none";

}

$('.carousel').carousel({
    interval: 1000
  })