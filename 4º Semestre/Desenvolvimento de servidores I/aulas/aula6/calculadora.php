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
          $n1 = $_GET["num1"];
          $n2 = $_GET["num2"];
        @$op = $_GET["oper"];
        if ($n1 == NULL || $n2 == NULL || empty($op)){
            echo "Falta alguma informação no formulário<br>";
        } else {
            switch ($op){
                case 1:
                    $r = $n1 + $n2;
                    echo "O Resultado é = $r";
                    break;
                case 2:
                    $r = $n1 - $n2;
                    echo "O Resultado é = $r";
                    break;
                case 3:
                    $r = $n1 * $n2;
                    echo "O Resultado é = $r";
                    break;
                case 4:
                    $r = $n1 / $n2;
                    echo "O Resultado é = $r";
                    break;
                default :
                    echo "Não foi selecionado uma operação";
            }
        }
        ?>
    </body>
</html>
