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
        echo "<h3>Personalizando os valores inseridos</h3>";
        //GET vai pegar na URL o parâmetro de "a" e colocar em $n1
        $n1 = $_GET["a"];
        //GET vai pegar na URL o parâmetro de "b" e colocar em $n2
        $n2 = $_GET["b"];
        //mostra a soma dos parâmetros digitados na URL
        echo "A soma = " . ($n1 + $n2);
        // http://localhost/aulas/aula03/get.php?a=10&b=50
        ?>
    </body>
</html>
