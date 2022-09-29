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
        <form method="get" action="exe02_mostra.php">
        <?php
        for ($linha = 0; $linha <= 1; $linha++){
           for ($coluna = 0; $coluna <=3; $coluna++){     
            echo "Matriz [$linha, $coluna]: <input type='number' name='m$linha$coluna'/> <br/><br/>";
           }
        }
        ?>
            <input type="submit" value="Enviar"/>
        </form>
    </body>
</html>
