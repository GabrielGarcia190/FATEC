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
        echo "<h3>Contagem de 1 a 10 </h3>";
        $contador = 1;
        while ($contador <= 10){
            echo $contador . "<br>";
            $contador++;
            //$contador +=1;
        }
        ?>
    </body>
</html>
