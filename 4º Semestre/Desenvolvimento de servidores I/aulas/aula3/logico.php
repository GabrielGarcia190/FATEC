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
        echo "<h3>Operadores lógicos</h3>";
        $ano = 2000;
        $idade = 2018 - $ano;
        echo "Quem nasceu em $ano tem idade de $idade anos.";
        $tipo = ($idade >= 18 && $idade < 65) ? "é obrigatório" : "não é obrigatório";
        echo "<br>Seu voto $tipo";
        ?>
    </body>
</html>
