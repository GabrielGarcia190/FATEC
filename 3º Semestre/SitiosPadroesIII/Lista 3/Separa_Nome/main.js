let nome;

function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function main() {

     let tracos = Retornatracos();
     let categoria_aluno = categorizarAluno();

     document.getElementById("nome").innerHTML = nome;
     document.getElementById("tracos").innerHTML = tracos;
     document.getElementById("categoria").innerHTML = categoria_aluno;




}

function Retornatracos() {
     nome = document.getElementById("nomeAluno").value;

     if (nome == "") {
          return;
     }
     let nome_array = nome.split(' ') // => ['roberto', 'da', 'silva']
     let nome_final = ''
     nome_array.map((nome_no_array) => {
          nome_final += ('-'.repeat(nome_no_array.length)) // loop tipo for que passa pelos elementos de um array e pega o elemento atual no loop
          // nome_final += '-' vezes a quantidade de palavras na variavel nome_no_array
          nome_final += ' ' // adiciona um espaco entre cada -
     })

     return nome_final;
}

function categorizarAluno() {

     let idade = document.getElementById("idadeAluno").value;

     let categoria = "";
     if (idade == 0 || idade == "" || isNaN(idade)) {
          document.getElementById("idade").innerHTML = "Preencha corretamente o campo idade"
          return;
     } else if (idade <= 12) {
          categoria = "Infantil";
     } else if (idade > 12 && idade < 18) {
          categoria = "Juvenil";
     }else{
          categoria = "Adulto";
     }

     return categoria;
}