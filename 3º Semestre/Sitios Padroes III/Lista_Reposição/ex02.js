doisVetores();

function doisVetores(juntaVetor) {
    const vet1 = [15, 520, 930, 411, 5744, 4453];
    const vet2 = [-95, 4200, 560, 511, -635, 878753];


    console.log(concatenar(vet1, vet2));
    
}

function concatenar(vet1, vet2) {
    let juntaVetor = vet1.concat(vet2);

    
     juntaVetor.sort(function (a, b) {
         return a - b;
     });

     return juntaVetor;
    
}

