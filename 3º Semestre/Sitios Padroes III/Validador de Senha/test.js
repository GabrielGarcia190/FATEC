const senhas_antigas = ['123456', 'abcdef', '654321', '8789789123', 'GabrielReiDelas2019'];
validaSenha();

function validaSenha() {
    let senha = [];
    senha.push(1234567);

    for (let i = 0; i < 4; i++) {
        if (senha[i] == senhas_antigas[i]) {
            console.log("error");
            return;
        }
    }

    senha = senha.split("");
    console.log(senha);
    if (senha.length < 5 || senha.length > 10) {
        console.log("senha invalida");
        return;
    }

    document.getElementById("btnEnviar").style.display = "block";
   


}