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
       <pre>
            <?php
            $numeros[0][0] = 5;
            $numeros[0][1] = 30;
            $numeros[0][2] = 45;
            $numeros[1][0] = 100;
            $numeros[1][1] = 200;
            $numeros[1][2] = 300;
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($numeros);
            
            echo "<h3>Percorrendo um array com foreach mostrando suas chaves</h3>";
            foreach ($numeros as $chaveA => $linha){
                echo "-->Linha: $chaveA <br/>";
                foreach ($linha as $chaveB => $coluna){
                echo "Coluna $chaveB: $coluna | <br/>";
                }
                echo "<br/>";
            }
            ?>
        </pre>
    </body>
</html>
