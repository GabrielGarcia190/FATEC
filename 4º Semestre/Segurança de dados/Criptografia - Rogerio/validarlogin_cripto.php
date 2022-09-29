<?php
include('aes.php');

$usuario = $_POST['usuario'];
$senha = $_POST['senha'];
$inputKey = "5131af7a19f7057b";
$blockSize = 128;

// $usuario_cripto = cifrar( $usuario );
// $senha_cripto = cifrar( $senha );

$_usr = new AES($usuario, $inputKey, $blockSize);
$usuario_cripto = $_usr->encrypt();

$_pwd = new AES($senha, $inputKey, $blockSize);
$senha_cripto = $_pwd->encrypt();

$senha_cripto = base64_encode((string)$senha_cripto);
$usuario_cripto = base64_encode((string)$usuario_cripto);

$url='http://192.168.104.220/cripto/aes/validarlogin.php';

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
