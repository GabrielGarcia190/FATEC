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
        echo "<h3>Tipo de variável</h3>";
        $var1 = 10;
        $var2 = 35.86;
        $var3 = "PHP Hypertext Preprocessor";
        $var4 = false;
        $var5 = null;
        echo '$var1 é do tipo ' . gettype($var1) . "<br>";
        echo '$var2 é do tipo ' . gettype($var2) . "<br>";
        echo '$var3 é do tipo ' . gettype($var3) . "<br>";
        echo '$var4 é do tipo ' . gettype($var4) . "<br>";
        ?>
    </body>
</html>
