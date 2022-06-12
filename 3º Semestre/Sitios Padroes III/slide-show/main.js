let select;
let img;
let src;

function editarSlide() {
    document.getElementById("editar").style.display = "flex";
    document.getElementById("botoes").style.display = "none";
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("slide").style.display = "none";
        document.getElementById("botoes").style.display = "block";
        document.getElementById("editar").style.display = "none";
    }
});


function cancelarApreesntacao() {
    document.getElementById("botoes").style.display = "block";
    document.getElementById("editar").style.display = "none";
}

function opcaoSelecionada(obj) {
    select = obj.value;
}

function imagemSelecionada(event) {
    img = "";
    img = event.value;
    console.log(img);
    if (img == "Imagem Padrão I") {
        src = "img/thumb-1920-410316.jpg";
    } else if (img == "Imagem Padrão II") {
        src = "img/img3.jpg";
    } else if (img == "Jorge - Skin Careca TV Gamer full HD") {
        src = "img/Prof.-Me.-Jorge-Luis-Gregorio.jpg";
    } else if (img == "Cristiano - Skin O Rei do JavaScript") {
        src = "img/Cristiano-Pires-Martins-2.jpg";
    } else if (img == "Thiaguin - Skin Zé do Caixão") {
        src = "img/professor-tiago.jpg";
    }
    console.log(src);
}


function salvarEdicao() {
    let legenda = document.getElementById("campoLegenda").value;
    console.log(select);
    if (legenda == null || legenda == "") {
        document.getElementById("campoLegenda").value = "*Insira algo aqui para salvar";
        return;
    } else if (select == "Escolha" || select == undefined) {
        alert("Selecione um slide para editar")
        return;
    } else {
        if (select == "Apresentação") {
            document.getElementById("p1").innerHTML = legenda;
            document.getElementById("campoLegenda").value = "Salvo com Sucesso!!!";
            document.getElementById("imgAp").src = src;
        } else if (select == "Slide 1") {
            document.getElementById("p2").innerHTML = legenda;
            document.getElementById("campoLegenda").value = "Salvo com Sucesso!!!";
            document.getElementById("imgSli1").src = src;
        } else if (select == "Slide 2") {
            document.getElementById("p3").innerHTML = legenda;
            document.getElementById("campoLegenda").value = "Salvo com Sucesso!!!";
            document.getElementById("imgSli2").src = src;
        } else if (select == "Slide 3") {
            document.getElementById("p4").innerHTML = legenda;
            document.getElementById("campoLegenda").value = "Salvo com Sucesso!!!";
            document.getElementById("imgSli3").src = src;
        }
    }
}

// function adicionarSlide() {

//     document.getElementById("slides").innerHTML += "<div class='carousel-item active' data-bs-interval='300'>  <img src='img/thumb-1920-410316.jpg' class='d-block w-100' alt='..'><div class='carousel-caption d-none d-md-block'> <h5 id='h1'> Slide 1 </h5><p id='p1'>Some representative placeholder content for the first slide.</p></div></div>"
// }

// function carregarImagem(event) {
//     let selectFile = event.target.files[0];
//     let reader = new FileReader();
// }

function apresentar() {
    document.getElementById("slide").style.display = "block";
    document.getElementById("botoes").style.display = "none";
    document.getElementById("editar").style.display = "none";
}


// function carregarImagem(event) {

//     console.log(event.value);
//     document.getElementById("img").src =event.value;
// }

function limpar() {
    document.getElementById("campoLegenda").value = "";
}