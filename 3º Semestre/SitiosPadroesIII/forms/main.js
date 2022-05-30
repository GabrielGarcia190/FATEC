
function testarDissertativa() {
    let pergunta = [];
    for (i = 1; i <= 2; i++) {
        pergunta.push(document.getElementById(i).value);
    }
    let tam = []
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
    for (var i = 0 in check1) {
        if (check1[i].checked) {
            lista.push(check1[i].value);
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
    ////////////////////////////////////////////
    //VERIFICANDO CHECKBOX 2
    lista = [];
    gabarito = ['1', '2'];
    for (var i = 0 in check2) {
        if (check2[i].checked)
            lista.push(check2[i].value);
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
    for (var i = 0 in check3) {
        if (check3[i].checked)
            lista.push(check3[i].value);
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

// function checarRadio() {
//     var botoes = document.getElementsByName("flexRadioDefault");
//     for (var i = 0 in botoes)
//         if (botoes[i].checked)
//             alert("Escolheu: " + botoes[i].value);
// }


function enviar() {
    let contador_pontos = testarDissertativa() + checarBox();
    console.log(contador_pontos);

    // let count = checarBox();
    // console.log(count);




}