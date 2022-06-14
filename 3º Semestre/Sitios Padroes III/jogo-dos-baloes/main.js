let total = 0;

function criarBalao() {

    let balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    let x = Math.floor(Math.random() * 600);
    let y = Math.floor(Math.random() * 600);

    balao.setAttribute("style", "left: " + x + "px;" + "top:" + y + "px;");
    balao.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(balao);
}   

function estourar(obejto){
    document.body.removeChild(obejto);

    total ++;
    let score = document.getElementById("total").innerHTML = "Pontos: " + total; 
}

function carregarJogo(){
    setInterval(criarBalao, 1000);
}