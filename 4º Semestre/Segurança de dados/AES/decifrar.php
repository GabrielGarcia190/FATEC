<?php
include 'aes.php';
$inputText = "+Aza97Tk9DYkQFztKLmqGMDx5fGaSJeJnSAiUKtkgdI=";
$inputKey = "28d109db5be8ba6b";
$blockSize = 128;
$aes = new AES($inputText, $inputKey, $blockSize);
$dec=$aes->decrypt();
echo "Apos da decifragem.: ".$dec."<br/>";


?>