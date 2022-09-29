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
        <h3>Mostrando valores</h3>
        <?php
        $i = 1;
        while ($i <= 5) {
            //pega os dados da URL
            $valor = $_GET["v" . $i];
            if ($valor == NULL) {
                echo "<p>Falta digitar o $i º valor</p>";
            } else{
                //mostra os dados no navegador
                echo "<p>$i º valor: $valor </p>";
            }
            $i++;
        }
        ?>
    </body>
</html>
