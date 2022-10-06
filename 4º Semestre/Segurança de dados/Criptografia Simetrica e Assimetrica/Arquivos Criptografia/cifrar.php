<?php
include 'aes.php';
$inputText = $_GET['password'];
$inputKey = "5131af7a19f7057b";
$blockSize = 128;
//* função para cifrar
$aes = new AES($inputText, $inputKey, $blockSize);
$enc = $aes->encrypt();
$usuario = base64_encode($enc);
echo "Apos criptografia.: " . $usuario . "<br/>";
