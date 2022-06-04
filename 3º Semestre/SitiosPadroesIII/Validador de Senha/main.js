const senhas_antigas = ['123456', 'abcdef', '654321', '8789789123', 'GabrielReiDelas2019'];

function validaSenha() {
    let senha = [];
    senha.push(document.getElementById("campoSenha").value);

    for (let i = 0; i < 4; i++) {
        if (senha[i] == senhas_antigas[i]) {
        }
    }

    var carcEspecial = "/([~`!@#$%\^&*+=\-\[\]\\';,/{}|\":<>\?])";
    carcEspecial = carcEspecial.split();

    let count = 0

    for (let i = 0; i < 4; i++) {
        if (senha[i] == carcEspecial[i]) {
            count++;
        }
    }

    if (count == 0) {
        alert("Insira o deficiente");
        return;
    }

    let nomeUsario = pegarNome();

    copia_senha = senha[0].toUpperCase().split("");
    senha = senha[0].split("");

    if (senha.length <= 5 || senha.length > 10) {
        console.log("senha invalida");
        return;
    }

    count = 0;
    for (let i = 0; i < senha.length; i++) {
        if (senha[i] == copia_senha[i]) {
            count++;
        }
    }

    if (count == 0) {
        alert("Precisa Letra");
        return;
    }

    document.getElementById("btnEnviar").style.display = "block";

}


function validaCaracterEspecial() {

}

function pegarNome(obj) {
    obj = obj.split("@");
    console.log(obj);
    return obj[0];
}