const area = document.getElementById('area');
let botaoSair = document.createElement('button');
botaoSair.innerText = 'Sair';
botaoSair.addEventListener("click", sair);
{ }
area === null || area === void 0 ? void 0 : area.appendChild(botaoSair);
function sair() {
    if (area)
        area.innerHTML = `vocÊ saiu da área HTML`;
}
function entrar() {
    var nome = prompt('Qual é o seu nome?');
    if (area) {
        if (nome == '' || nome == null) {
            alert("Algo de errado não está certo!");
            area.innerHTML = "Algo de errado não está certo!";
        }
        else {
            area.innerHTML = `Bem vindo ${nome}!`;
        }
    }
}
