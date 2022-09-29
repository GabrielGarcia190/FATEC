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
        $i = $_GET["idade"];
        //if (empty($i)){
        if ($i == NULL) {
            echo "Volte e digite a idade";
        } elseif ($i >= 18) {
            echo "Você tem $i anos <br>";
            echo "Com essa idade você pode tirar habilitação";
        } else {
            echo "Você tem $i anos <br>";
            echo "Com essa idade você não pode tirar habilitação";         
        }
        ?>
        <br><br>
        <a href="if_else.html">Voltar</a>
    </body>
</html>
