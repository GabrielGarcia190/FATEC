<?php
include 'AES.php';
$inputText = "1OUdhPUr6mIcA8XPvcLQ/g==";
$inputKey = "5131af7a19f7057b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$dec=$aes->decrypt();
echo "Apos da decifragem.: ".$dec."<br/>";


?>