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
        echo "<h3>Operadores aritméticos</h3>";
        $n1 = 3;
        $n2 = 2;
        echo "A soma de $n1 + $n2 = " . ($n1 + $n2);
        echo "<br> A subtração $n1 - $n2 = " . ($n1 - $n2);
        echo "<br> A multiplicação de $n1 * $n2 = " . ($n1 * $n2);
        echo "<br> A divisão de $n1 / $n2 = " . ($n1 / $n2);
        echo "<br> O módulo de $n1 % $n2 = " . ($n1 % $n2);
        $n3 = "10";
        //Em expressões, o PHP converte automaticamente os tipos.
        echo "<br> A soma de $n1 + $n3 = " . ($n1 + $n3);
        ?>
    </body>
</html>    
