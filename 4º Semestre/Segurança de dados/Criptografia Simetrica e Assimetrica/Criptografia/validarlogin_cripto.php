<?php
include( 'criptografia.php' );

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];

$usuario_cripto = cifrar( $usuario );
$senha_cripto = cifrar( $senha );

$url='http://192.168.200.100/www2/cripto/post/comcripto/validarlogin.php';

//$url='http://192.168.200.221/login-seguranca/validarlogin.php';

$ch = curl_init($url);

$params="usuario=$usuario_cripto&senha=$senha_cripto";

curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

$result = curl_exec($ch);

print_r($result);

curl_close($ch);
?>