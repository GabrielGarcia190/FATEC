let senha;
const ultimasSenhas = ['gabriel123@', ' oReiDela2022$', 'oFur@do£23', '123@goiok', 'MarretaTorta@']


function main(){
    if(verificarUltimas()){
        console.log("Não cadastrada OKAY")
    }else{
        console.log("FODEO")
    }
    // senha = document.querySelector('[data-js="senha"]').value;
    // let senhaQuebrada
    // senhaQuebrada = senha.split("");
    // console.log(senhaQuebrada)
    // if (senhaQuebrada.length <= 5 || senhaQuebrada.length > 10) {
    //     console.log("senha invalida");
    //     return false;
    // }
}



function verificarUltimas() {
    senha = (document.querySelector('[data-js="senha"]').value);
    let count = 0;
    console.log(senha);
    console.log(ultimasSenhas);

    for (let i = 0; i < 5; i++) {
        
        if (senha[0] == ultimasSenhas[i]) {
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
    
}