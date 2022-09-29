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
        function valor ($x){
            $x = $x + 2;
            echo "<p>O valor de x = $x</p>";
        }
        
        echo "<h3>Função que retorna parâmetros por valor</h3>";
        $a = 3;
        valor($a);
        echo "<p>O valor de a = $a</p>";
        ?>
    </body>
</html>
