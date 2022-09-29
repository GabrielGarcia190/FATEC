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
    <body>
        <h3>Selecione um número para fazer a tabuada</h3>
        <form method="get" action="tabuada_mostra.php">
            <label>Número: </label> 
            <select name="num">
                <?php
                $c = 1;
                do {
                    echo "<option>$c</option>";
                    $c++;
                } while ($c <= 10);
                ?>
            </select>
            <input type="submit" value="Tabuada"/>
        </form>
    </body>
</body>
</html>
