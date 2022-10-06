<?php
$login = $_POST['login'];
$senha = $_POST['senha'];

$db = pg_pconnect('host=containers-us-west-70.railway.app port=7696
	dbname=railway user=postgres
	password=vlufKXE3FeFAbj22SiRQ') or die
	 ("Não foi possível conectar-se ao banco de dados...");

$sql = "SELECT * FROM usuarios WHERE 
login='$login' and senha='$senha'";

$resultado = pg_query($db,$sql);
	
// Verifica se encontrou algum registro
if (pg_num_rows($resultado) == 1) {
	// O registro foi encontrado =	> o usuário é valido
	$row = pg_fetch_array($resultado);
	echo 'Seja bem vindo.: '.$row['nome']; 
} else {
// Nenhum registro foi encontrado => o usuário é inválido
	echo 'Login ou senha incorretos....';
}

//PGPASSWORD=vlufKXE3FeFAbj22SiRQ psql -h containers-us-west-70.railway.app -U postgres -p 7696 -d railway
