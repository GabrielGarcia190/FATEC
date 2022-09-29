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
            $bandas[] = 'Queen';
            $bandas[] = 'Scorpions';
            $bandas[] = 'Dire Straits';
            $bandas[] = 'U2';
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($bandas);
            echo "<h3>Mosrando com var_dump</h3>";
            var_dump($bandas);
            echo "<h3>Percorrendo um array com for</h3>";
            for ($i = 0; $i <= count ($bandas)- 1; $i++){
              echo "$bandas[$i]</br>";
            }
            echo "<h3>Percorrendo um array com foreach</h3>";
            foreach ($bandas as $valor){
                echo "$valor <br/>";
            }
            ?>
        </pre>
    </body>
</html>
