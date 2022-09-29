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
            $cliente['razaosocial'] = 'José da Silva - ME';
            $cliente['nomefantasia'] = 'JS Soluções e sistemas';
            $cliente['cidade'] = 'Jales';
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($cliente);
            echo "<h3>Mosrando com var_dump</h3>";
            var_dump($cliente);
            echo "<h3>Percorrendo um array com foreach</h3>";
            foreach ($cliente as $valor){
                echo "$valor <br/>";
            } 
            echo "<h3>Percorrendo um array com foreach mostrando suas chaves</h3>";
            foreach ($cliente as $chave => $valor){
                echo "$chave: $valor <br/>";
            } 
            ?>
        </pre>
    </body>
</html>