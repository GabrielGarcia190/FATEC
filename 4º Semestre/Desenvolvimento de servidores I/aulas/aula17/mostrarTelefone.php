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
        require_once 'Controle.php';
        
        $galaxyS = new Telefone();
        var_dump($galaxyS);
        
        $galaxyS->ligar();
        $galaxyS->abrirMenu();
        
        ?>
    </body>
</html>
