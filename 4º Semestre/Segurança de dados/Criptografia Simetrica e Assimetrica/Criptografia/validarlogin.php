<?php

include 'criptografia.php';

$usuario = decifrar($_POST['usuario']);
$senha = decifrar($_POST['senha']);

if ($usuario == 'TESTE' && $senha == '123')
    echo 'Usu�rio/Senha correta';
else
    echo 'Usu�rio/Senha incorreta';

?>

