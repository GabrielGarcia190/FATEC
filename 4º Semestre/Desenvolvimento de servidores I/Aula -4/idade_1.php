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
        $nome = !empty ($_GET["nome"]) ? $_GET["nome"] : "[campo vazio]";
        $ano = !empty ($_GET["ano"]) ? $_GET["ano"] : "[campo vazio]";
        $sexo = !empty ($_GET["sexo"]) ? $_GET["sexo"] : "[não selecionado]";
        $idade  = ($ano != 0) ? date("Y") - $ano : "[campo vazio]";
        echo "<h3>Recebendo dados do formulário 2 </h3>";
        echo "$nome é do sexo $sexo e tem $idade anos </br>";
        ?>
    </body>
</html>
