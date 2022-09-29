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
        $valor = $_GET["v"];
        $pi = intval ($valor);
        echo "<h3> Recebendo dados do Formulário 1 </h3>";
        echo "A parte inteira de $valor = $pi </br>";
        ?>
    </body>
</html>
