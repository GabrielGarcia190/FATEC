
let lista = ["A","B","C","D","E"];
roundRobin(lista);

function roundRobin(lista){

    for(let i=0; i < 5; i++ ){
  
    let a = lista[0];

    console.log(a);
       
    lista.shift(0);
    lista.push(a);
    console.log(lista);
}

}