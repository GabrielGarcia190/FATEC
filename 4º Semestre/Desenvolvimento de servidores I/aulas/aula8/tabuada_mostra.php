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
        //pega os dados da URL
        $n = $_GET["num"];
        echo "<h3>Tabuada do número $n: </h3>";
        $i = 1;
        do {
            // mostra os dados no navegador
            echo "$n x $i = " . $n * $i . "<br>";
            $i++;
        } while ($i <= 10);
        ?>
        <br>
        <a href="tabuada.php">Voltar</a>
    </body>
</html>