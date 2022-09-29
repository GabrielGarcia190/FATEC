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
        
        function referencia (&$x){
            $x = $x + 2;
            echo "<p>O valor de x = $x</p>";
        }
        
        echo "<h3>Função que retorna parâmetros por referência</h3>";
        $a = 3;
        referencia ($a);
        echo "<p>O valor de a = $a</p>";
        ?>
    </body>
</html>
