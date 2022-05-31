
function testarDissertativa() {
    let pergunta = [];
    for (i = 1; i <= 2; i++) {
        pergunta.push(document.getElementById(i).value);
    }
    let tam = [];
    let count = 0;
    for (i = 0; i < pergunta.length; i++) {
        pergunta;
        tam[i] = pergunta[i].split(" ");
        if (tam[i].length >= 3) {
            count++;
        }
    }
    return count;
}

function checarBox() {
    var lista = [];
    var check1 = document.getElementsByName("check1");
    var check2 = document.getElementsByName("check2");
    var check3 = document.getElementsByName("check3");

    //VERIFICANDO CHECKBOX 1
    let a = 0;
    for (a in check1) {
        if (check1[a].checked) {
            lista.push(check1[a].value);
        }
    }

    let gabarito = ['0', '1'];
    let count = 0;
    for (let i = 0; lista[i] <= 4; i++) {
        if (gabarito[i] == lista[i]) {
            count++;
        }
    }
    if (count < 2) {
        count = 0;
    }

    lista = [];
    gabarito = ['1', '2'];
    let b = 0;
    for (b in check2) {
        if (check2[b].checked)
            lista.push(check2[b].value);
    }

    for (let i = 0; lista[i] <= 4; i++) {
        if (gabarito[i] == lista[i]) {
            count++;
        }
    }
    if (count == 2 || count == 4) {
    } else {
        count = 0;
    }
    ////////////////////////////////////////////
    //VERIFICANDO CHECKBOX 3
    lista = [];
    gabarito = ['0', '3'];
    let c = 0;
    for (c in check3) {
        if (check3[c].checked)
            lista.push(check3[c].value);
    }
    for (let i = 0; lista[i] <= 4; i++) {
        if (gabarito[i] == lista[i]) {
            count++;
        }
    }
    if (count == 2 || count == 4 || count == 6) {
        return count / 2;
    } else {
        return 0;
    }
}

function checarRadio() {
    let lista = [];
    let j = 0;

    let gabarito = ['10', '10', '10', '10', '10'];
    for (let i = 0; i <= 5; i++) {
        var botoes = document.getElementsByName("flexRadioDefault" + i);
        for (j in botoes) {
            if (botoes[j].checked)
                lista.push(botoes[j].value);
        }
    }

    let count = 0;
    for (let i = 0; i < 5; i++) {
        if (lista[i] == gabarito[i]) {
            count++;
        }
    }
    return count;
}


function enviar() {
    let contador_pontos = testarDissertativa() + checarBox() + checarRadio();
    console.log(contador_pontos);
    if (contador_pontos >= 6) {
        document.getElementById("resultado").innerHTML = contador_pontos + " Parabéns Aprovado !!!"
        document.getElementById("resultado").style.color = "green";
    } else {
        document.getElementById("resultado").innerHTML = contador_pontos + " Reprovado Burrão !!!"
        document.getElementById("resultado").style.color = "red";
    }
    document.getElementById("res").style.display = "block";
    document.getElementById("formulario").style.display = "none";
}

function outraResposta(){
    location.reload();
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("res").style.display = "none";
        document.getElementById("formulario").style.display = "block";
    }
});