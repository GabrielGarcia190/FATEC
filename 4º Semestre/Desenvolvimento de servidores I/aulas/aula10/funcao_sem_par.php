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
        // declarando função
        function bemVindo (){
            echo "<p align='center'>Olá, seja bem vindo!</p>";
        }
        
        echo "<h3>Invocando a função bemVindo() </h3>";
        bemVindo ();
        
        echo "<h3>Função bemVindo() dentro do laço FOR </h3>";
        //usando a função dentro de uma estrutura for:
        for ($i = 1; $i <= 5; $i++){
            bemVindo();
        }
        ?>
    </body>
</html>
