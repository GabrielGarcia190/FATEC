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
      <h3>Contador</h3>
        <form method="get" action="contador_mostra.php">
            Número inicial: <input type="number" name="inicial"/><br><br>
            Número final: <input type="number" name="final"/><br><br>
            Incremento/Decremento:
        <select name="numero">    
        <?php
       $c = 1;
       while ($c <= 5) {
           echo "<option>$c</option>";
           $c++;
        }
        ?>
        </select><br><br>   
        <br>
        <input type="submit" value="Enviar"/>        
        </form>
    </body>
</html>
