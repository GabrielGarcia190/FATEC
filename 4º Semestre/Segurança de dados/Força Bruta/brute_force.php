<?php
    for ($i = 0; $i <=130; $i++){
        $senha = strval("$i");
        if (md5($senha) == "e10adc3949ba59abbe56e057f20f883e"){
            echo "Descrobi a senha = :". $senha;
            break;
        }
        echo 'Tentativa com = ' . $senha . '<br />';
    }
?>