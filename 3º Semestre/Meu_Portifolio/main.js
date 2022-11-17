function validarNome() {
    let nome = document.getElementById("campoNome").value;

    let nomeC = nome.split(" ");

    console.log(nomeC);
    console.log(nomeC.length);

    if (nomeC.length < 2) {
        document.getElementById("erroNome").style.display = "block";
        document.getElementById("erroNome").innerHTML = "*Insira o Nome completo";
    } else if (nomeC.length >= 2) document.getElementById("erroNome").style.display = "none";
}

function validarMsg() {
    let msg = document.getElementById("campoMsg").value;

    let msgValid = msg.split(" ");

    console.log(msgValid);
    console.log(msgValid.length);

    if (msgValid == "" || msgValid == null) document.getElementById("erroMsg").style.display = "none";
    else if (msgValid.length < 4) {
        document.getElementById("erroMsg").style.display = "block";
        document.getElementById("erroMsg").innerHTML = "*Insira uma mensagem com pelo menos 4 palavras";
    } else if (msgValid.length >= 4) document.getElementById("erroMsg").style.display = "none";
}