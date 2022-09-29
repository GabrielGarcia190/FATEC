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
        <pre>
        <?php
        require_once 'CartaoTravel.php';
        
        echo "<h3>Criando o objeto user1</h3>";
        $user1 = new CartaoTravel ();
        print_r($user1);
        
        echo "<h3>Criando o objeto user2</h3>";
        $user2 = new CartaoTravel ();
        print_r($user2);
        ?>
        </pre>
    </body>
</html>
