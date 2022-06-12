let senha;
let copia_senha;
const ultimasSenhas = ['gabriel123@', ' oReiDela2022$', 'oFur@do£23', '123@goiok', 'MarretaTorta@'];
const btnEnviar = document.querySelector('[data-js="botao"]');



function main(){
    senha = (document.querySelector('[data-js="senha"]').value);
    if(verificarUltimas() && verificarTamanho() && verificaEmail() &&  veriricarMaiscula() && verificaCaracter()){
        console.log("ENVIADO");
        btnEnviar.addEventListener('submit', function(){
            console.log("ENVIADA")
        })
    }else{
        console.log("FODEO");   
    } 
}



function verificaEmail(){
    let email = document.querySelector('[data-js="email"]').value;
    email = email.split("@");

    if(senha == email[0]){
        return false;
    }else{
        return true;
    }
}


function verificarUltimas() {
    let count = 0;

    for (let i = 0; i < 5; i++) {
        
        if (senha == ultimasSenhas[i]) {
            count++;
        }   
    }
    if( count == 0){
        return true;
    }else{
        return false;
    }
}

function verificarTamanho(){
   
    copia_senha = senha.split("");

    if (copia_senha.length <= 5 || copia_senha.length > 10) {
        console.log("senha invalida");
        return false;
    }else{
        return true;
    }
}

function veriricarMaiscula(){
    let count = 0;
    senha_grande = senha.toUpperCase().split("");
    for(let i=0; i < senha.length; i++){
        if(copia_senha[i] == senha_grande[i]){
            count++
        }
    }
    if(count != 0){
        return true
    }else{
        return false
    }
}

function verificaCaracter(){
    let count = 0
    let carcEspecial = "/([~`!@#$%\^&*+=\-\[\]\\';,/{}|\":<>\?])";
    carcEspecial = carcEspecial.split("");
    console.log(carcEspecial);
    console.log(copia_senha);
    let j = 0;

    for (let i = 0; i < carcEspecial.length; i++) {
        for (let j =0; j < carcEspecial.length; j++){
            if (copia_senha[i] == carcEspecial[j]) {
                count++;
            }
        }
    }
    console.log(count);
    if( count != 0){
        console.log("DBOA")
        return true;
    }else{
        console.log("MIERDA")
        return false;
    }
}