function verifica(){

    let errorNome = document.getElementById("Nome").value;

    let nome = errorNome.split(" ");
    
    if( nome.length < 2 ){
        document.getElementById("errorNome").innerHTML = " *Insira o nome Completo"
        document.getElementById('errorNome').style.display = 'block';
    }
}