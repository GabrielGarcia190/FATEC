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
        <h3>While dinâmico</h3>
            <form method="get" action="while_dinamico_mostra.php">
        <?php
        $c = 1;
        while ($c <= 5){
            echo "<p>$c º valor: <input type='number' name='v$c'/> </p>";
            $c++;
        }
        ?>
        <input type="submit" value="enviar"/>        
            </form>
        </body>
</html>
