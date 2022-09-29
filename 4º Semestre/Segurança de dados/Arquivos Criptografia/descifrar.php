<?php
include 'AES.php';
$inputText = base64_decode($_GET['password']);
$inputKey = "5131af7a19f7057b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$dec=$aes->decrypt();
echo "antes da criptografia.: ".$inputText."<br/>";
echo "Apos da decifragem.: ".$dec."<br/>";
