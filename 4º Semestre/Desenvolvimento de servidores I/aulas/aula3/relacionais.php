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
        echo "<h3>Operadores relacionais</h3>";
        $num1 = 5;
        $num2 = 3;
        $tipo = "s";
        $r = $tipo == "s" ? $num1 + $num2 : $num1 * $num2;
        echo "O resultado = $r";
        ?>
    </body>
</html>
