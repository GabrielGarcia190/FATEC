exercicioKuatro();

function exercicioKuatro() {

    let meuArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"];
    let novoArray = [];
    let corte = 4;


    for (var i = 0; i < meuArray.length; i = i + corte) {
        novoArray.push(meuArray.slice(i, i + corte));
    }
    console.log(novoArray); 

    
}