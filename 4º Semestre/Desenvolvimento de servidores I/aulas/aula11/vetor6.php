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
            $clientes[0]['nome'] = 'José da Silva';
            $clientes[0]['sexo'] = 'Masculino';
            $clientes[0]['cidade'] = 'Jales/SP';
            
            $clientes[0]['nome'] = 'Maria Souza';
            $clientes[0]['sexo'] = 'Feminino';
            $clientes[0]['cidade'] = 'Urânia/SP';
            
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($clientes);
            
            echo "<h3>Percorrendo um array com foreach mostrando suas chaves</h3>";
            foreach ($clientes as $chaveA => $linha){
                echo "-->Cliente: $chaveA <br/>";
                foreach ($linha as $chaveB => $coluna){
                    echo "$chaveB: $coluna | ";
                }
                echo "<br/>";
            } 
            ?>
        </pre>
    </body>
</html>
