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
        function soma ($a, $b){
            $s = $a + $b;
            echo "<p>A soma = $s</p>";
        }
        
        soma(3,4);
        soma(8,2);
        $x = 9;
        $y = 15;
        soma($x, $y);
        ?>
    </body>
</html>
