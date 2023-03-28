const nomes = ["Ana", "Pedro", "Julia", "Marcos", "Luciana", "Rafael", "Isabela", "Gustavo", "Camila", "Felipe"];


let valor = nomes.find( (item) =>{
    return item === "Julia"   
})
// let valor = nomes.filter( (item) =>{
//     return item === "Julia"   
// })

console.log(valor);
//===========================================================================================================

const funcionarios = [
    { nome: "João", cargo: "Gerente de Vendas" },
    { nome: "Maria", cargo: "Analista de Marketing" },
    { nome: "Pedro", cargo: "Desenvolvedor Full-Stack" },
    { nome: "Ana", cargo: "Gerente de Projetos" },
    { nome: "Lucas", cargo: "Analista Financeiro" }
  ];

let item = funcionarios.find(({nome}) => nome === "Maria")
console.log("====================================================================================================")
console.log(item);