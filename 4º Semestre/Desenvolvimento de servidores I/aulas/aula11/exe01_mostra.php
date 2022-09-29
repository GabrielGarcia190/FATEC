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
            for ($c = 0; $c <= 4; $c++){
                $vetor[$c] = $_GET["v" . $c];
                echo $vetor[$c] . "<br/>";
            }
            
             echo "<h3>Mostrando com foreach</h3>";
            foreach ($vetor as $chave => $valor){
                echo "Coluna $chave: $valor | <br/>";
                }            
            echo "<h3>Mostrando com print_r</h3>";
            print_r ($vetor);
            
            echo "<h3>Mosrando com var_dump</h3>";
            var_dump($vetor);
            ?>
        </pre>
        <br>
        <a href="exe01.php">Voltar</a>
    </body>
</html>
