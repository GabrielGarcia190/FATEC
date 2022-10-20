<?php
$login = $_POST['login'];
$senha = $_POST['senha'];

$db = pg_pconnect('host=localhost port=5432
	dbname=dbRogerio user=postgres
	password=1234') or die("Não foi possível conectar-se ao banco de dados...");
	$sql = "SELECT * FROM usuarios WHERE 
	login='$login' and senha='$senha'";

$resultado = pg_query($db,$sql);
	
if (pg_num_rows($resultado) == 1) {
	$row = pg_fetch_array($resultado);
	echo 'Seja bem vindo.: '.$row['nome']; 
} else {
	echo 'Login ou senha incorretos....';
}

