function testarDissertativa(){
    let perunta1 = document.getElementsByName("dissertativas").value;

    let tam = perunta1.split(" ");

    if( tam.length < 3 ){
        alert("erro");
    }

}

function checarBox() {
    var radio = document.getElementsByName("radio");

    for (var i = 0 in radio) {
        if (radio[i].checked) {
            alert("Escolheu: " + radio[i].value);
        }
    }
}

function checarRadio(){
    var botoes = document.getElementsByName("flexRadioDefault");

    for (var i = 0 in botoes) {
        if (botoes[i].checked);
        alert("Escolheu: " + botoes[i].value);
    }
}


function enviar(){

    var perunta = document.getElementById("dissertativas").value;
    console.log(pergunta);

    let tam = perunta.split("");

    if( tam.length < 3 ){
        alert("erro");
    }

}