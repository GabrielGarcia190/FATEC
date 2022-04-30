let livro = {
    "Titulo": "JavaScrip",
    "Autor": "Maujor",
    "Páginas": "432",
    "Preço": "R$ 69,00",
    "FreteSdex": function (cepOrigem, cepDestino, peso) {
        let valorFrete = "";
        valorFrete = cepOrigem * cepDestino * peso;
        return valorFrete;
    },
    "capitulos": {
        "Capitulo 1": "Revisão JS",
        "Capitulo 2": "Funções",
        "Capitulo 3": "Eventos",
        "Capitulo 4": "Requisições",
    }
}
let pares = "";
for (let prop in livro) {
    pares = + prop + ": " + livro[prop] + "||";
    if (typeof livro[prop] == "object") {
        for (let prop1 in livro[prop]) {
            pares += prop1 + ": " + livro[prop]
            [prop1] + "||";

        }
    }
};
console.log(pares);

