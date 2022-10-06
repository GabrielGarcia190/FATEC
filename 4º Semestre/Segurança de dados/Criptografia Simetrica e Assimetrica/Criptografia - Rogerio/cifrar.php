<?php
include 'AES.php';
$inputText = "Teste";
$inputKey = "5131af7a19f7057b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$enc = $aes->encrypt();
echo "Apos criptografia.: ".$enc."<br/>";

?>