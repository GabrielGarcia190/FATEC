<?php
include 'aes.php';
$inputText = "Teste de criptografia AES...";
$inputKey = "28d109db5be8ba6b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$enc = $aes->encrypt();
echo "Apos criptografia.: ".$enc."<br/>";
