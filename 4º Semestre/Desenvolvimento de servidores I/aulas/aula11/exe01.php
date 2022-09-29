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
        <form method="get" action="exe01_mostra.php">
        <?php
        for ($c = 0; $c <= 4; $c++){
            echo "Vetor [$c]: <input type='number' name='v$c'/> <br/><br/>";
        }
        ?>
            <input type="submit" value="Vetor"/>
        </form>
    </body>
</html>
