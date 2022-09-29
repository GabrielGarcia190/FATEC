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
            echo "<h3>Recebendo os dados e mostrando com echo</h3>";
            for ($lin = 0; $lin <= 1; $lin++){
                for ($col = 0; $col <=3; $col++){ 
                $matriz [$lin][$col] = $_GET['m' . $lin . $col];    
                echo "<p> matriz[$lin][$col]: " . $matriz[$lin][$col] . "</p>";
                }
            }
            echo "<h3>Mostrando com foreach</h3>";
            foreach ($matriz as $chaveL => $linha){
                echo "-->Linha: $chaveL <br/>";
                foreach ($linha as $chaveC => $coluna){
                    echo "Coluna $chaveC: $coluna <br/>";
                }
            }            
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($matriz);
            echo "<h3>Mosrando com var_dump</h3>";
            var_dump($matriz);
            ?>
        </pre>
        <br>
        <a href="exe02.php">Voltar</a>
    </body>
</html>
