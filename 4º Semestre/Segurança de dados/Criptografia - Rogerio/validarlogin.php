<?php

include 'criptografia.php';

$usuario = decifrar($_POST['usuario']);
$senha = decifrar($_POST['senha']);

if ($usuario == 'TESTE' && $senha == '123')
    echo 'Usuário/Senha correta';
else
    echo 'Usuário/Senha incorreta';

?>

