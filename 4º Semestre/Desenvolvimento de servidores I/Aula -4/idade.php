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
        $nome = $_GET["nome"];
        $ano  = $_GET["ano"];
        $sexo  = $_GET["sexo"];
        $idade  = date("Y") - $ano;
        echo "<h3>Recebendo dados do formulário 2 </h3>";
        echo "$nome é do sexo $sexo e tem $idade anos </br>";
        ?>
    </body>
</html>
