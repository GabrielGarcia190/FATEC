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
        $n = $_GET["num"];
        @$op = $_GET["oper"];
        if ($n == NULL || empty($op)){
            echo "Falta alguma informação no formulário<br>";
        } else {
            echo "O valor total da compra = $n <br><br>";
            switch ($op){
                case 1:
                    $r = $n - ($n * 0.10);
                    echo "O valor total com pagamento à vista e desconto de 10% = $r";
                    break;
                case 2:
                    $r = $n - ($n * 0.05);
                    echo "O valor total com pagamento em 30 dias e juros de 5% = $r";
                    break;
                case 3:
                    $r = $n - ($n * 0.10);
                    echo "O valor total com pagamento em 60 dias e juros de 10% = $r";
                    break;
                default :
                    echo "Não foi selecionado uma forma de pagamento";
            }
        }
        ?>
    </body>
</html>
