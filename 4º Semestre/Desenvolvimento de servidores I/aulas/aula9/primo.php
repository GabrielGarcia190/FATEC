<!DOCTYPE html>
<!--
Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/EmptyPHPWebPage.php to edit this template
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
        <?php
        $n = $_GET['num']; 
        echo "<h3>Analisando o número $n</h3>";
        if ($n ==NULL){
            echo "Volte e digite um número.";
        } else {
            echo " Valores múltiplos: ";
            $mult = 0;
            for ($c = 1; $c <= $n; $c++){
                if ($n % $c == 0){
                    $mult++;
                    echo "$c ";
                }   
        }
        echo "<br/>Total de múltiplos: $mult <br/>";
        if ($mult == 2){
            echo "Resultado: $n é PRIMO!";
        } else {
            echo "Resultado: $n não é PRIMO";
        }
        }
        ?>
        <br>
        <a href="primo.html">Voltar</a>
    </body>
</html>
