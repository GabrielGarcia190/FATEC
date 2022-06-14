function AtivarTemaDark() {
     document.getElementById("background").style.backgroundColor = "#2c2c2c";
     document.getElementById("background").style.color = "white";
}

function AtivarTemaLight() {
     document.getElementById("background").style.backgroundColor = "white";
     document.getElementById("background").style.color = "black";
}

function validaNome(nome_completo){
        return nome_completo.length > 1 ? 1 : 0
      }
  
      function obterSobrenome(nome_completo){
        return nome_completo[nome_completo.length - 1].toLowerCase()
      }
  
      function contarVogais(nome){
        return ((nome.match(/[aeiou]/gi) || []).length).toString().padStart(2, '0')
      }
  
      function gerarSenha() {
        let nome = document.getElementById("nomeAluno").value;
        let nome_completo = nome.replace(/\s+/g, " ").split(' ')

        if (nome_completo[nome_completo.length - 1] === '') nome_completo.pop()
  
        if (!validaNome(nome_completo)){
            document.getElementById("resultado").innerHTML = "Nome Incompleto"; 
            return 0;
        } 
  
        let last_name = obterSobrenome(nome_completo)
        let vogais = contarVogais(nome)
        
        document.getElementById("resultado").innerHTML = last_name + vogais; 
    }
    