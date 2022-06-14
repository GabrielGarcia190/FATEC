function validaCampos() {
    try {
        let nome = document.getElementById("campoNome").value;

        if( nome == "0" || nome == null || nome == undefined){
            throw
        }
    } catch (error1) {
        alert("Preencha corretamente")
    }
4

}

function enviar() {
    validaCampos();

}