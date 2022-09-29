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
        
        function soma($a, $b){
            $s = $a + $b;
            echo "<p>A soma entre $a e $b = $s</p>";
        }
        
        echo "<h3>Função sem retorno</h3>";
        $x = 20;
        $y = 30;
        $r = soma($x, $y);
        ?>
    </body>
</html>
