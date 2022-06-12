
const brasil = [{
    cidade: "Jales", estado: "SP",
    regiao: "Sudeste",
    populacao: 49000
},
{
    cidade: "Aquidauana",
    estado: "MS",
    regiao: "Centro Oeste",
    populacao: 45000
},
{
    cidade: "Três Fronteiras",
    estado: "SP",
    regiao: "Sudeste",
    populacao: 10000
},
{
    cidade: "Bonito",
    estado: "MS",
    regiao: "Centro Oeste",
    populacao: 15000
},
{
    cidade: "Brusque",
    estado: "SC",
    regiao: "Sul",
    populacao: 80000
},
{
    cidade: "Porto Alegre",
    estado: "RS",
    regiao: "Sul",
    populacao: 1200000
},
{
    cidade: "Urânia",
    estado: "SP",
    regiao: "Sudeste",
    populacao: 19000
},
{
    cidade: "Manaus",
    estado: "AM",
    regiao: "Norte",
    populacao: 900000
}, {
    cidade: "Macapá",
    estado: "AP",
    regiao: "Norte",
    populacao: 500000
},
{
    cidade: "Fortaleza",
    estado: "CE",
    regiao: "Nordeste",
    populacao: 700000
},
{
    cidade: "Natal",
    estado: "RN",
    regiao: "Nordeste",
    populacao: 650000
}
    ,];

filtrarRegiao();
filtrarPopulacao();
filtrarEstado();

function filtrarPopulacao() {

    let populacaoGrande = brasil.filter(function (e) {
        return e.populacao > 50000;
    });
    console.log(populacaoGrande);
}

function filtrarRegiao() {
    console.log("==========SUDESTE ============");
    let cidadeSudeste = brasil.filter(function (e) {
        return e.regiao == "Sudeste";
    });
    console.log(cidadeSudeste);
    console.log("============================");

    console.log("==========SUL============");
    let cidadeSul = brasil.filter(function (e) {
        return e.regiao == "Sul";
    });
    console.log(cidadeSul);
    console.log("============================");

    console.log("==========NORTE============");
    let cidadeNorte = brasil.filter(function (e) {
        return e.regiao == "Norte";
    });
    console.log(cidadeNorte);
    console.log("============================");

    console.log("==========CENTRO OESTE============");
    let cidadeCentro = brasil.filter(function (e) {
        return e.regiao == "Centro Oeste";
    });
    console.log(cidadeCentro);
    console.log("============================");

    console.log("========= NORDESTE ============");
    let cidadeNordeste = brasil.filter(function (e) {
        return e.regiao == "Nordeste";
    });
    console.log(cidadeNordeste);
    console.log("============================");
}

function filtrarEstado() {

    console.log("==========ESTADO DE SÃO PAULO============");
    let estadoSP = brasil.filter(function (e) {
        return e.estado == "SP";
    });
    console.log(estadoSP);
    console.log("============================");
    console.log("========== ESTADO DO MATO GROSSO DO SUL ============");
    let estadoMS = brasil.filter(function (e) {
        return e.estado == "MS";
    });
    console.log(estadoMS);
    console.log("============================");
}