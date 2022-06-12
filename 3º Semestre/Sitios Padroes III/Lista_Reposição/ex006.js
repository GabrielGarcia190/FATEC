
let lista = ["A", "B", "C", "D", "E"];

criarPilha(lista);
// criarFila(lista);

function criarPilha() { // ULTIMO A ENTRAR PRIMEIRO A SAIR
    let tamLista = lista.length
        for (let i=0; i <tamLista; i++) {
            let a = lista[tamLista];
    
            lista.pop(a);
            console.log(lista);        
        }    
}

function criarFila() {

    for (let i=0; i < 5; i++) {
        let a = lista[0];

        console.log(a);
           
        lista.shift(0);
        lista.push(a);
        console.log(lista);        
    }
    
}