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
        $n = $_GET["nome"];
        $m1 = $_GET["media1"];
        $m2 = $_GET["media2"];
        $m3 = $_GET["media3"];
        $m4 = $_GET["media4"];
        //if (empty($i)){
        
        if ($n == NULL ||$m1 == NULL || $m2 == NULL || $m3 == NULL || $m4 == NULL){ 
            echo "Volte e preencha todos os campos";
            
        } else{
        $m=($m1 + $m2 + $m3 + $m4)/4;
        
        if ($m >= 6) {
            echo "O aluno (a) $n obteve a média $m <br>";
            echo "$n está aprovado";
        } else {
            echo "O aluno (a) $n obteve a média $m <br>";
            echo "$n está reprovado";         
        }
        }
        ?>
        <br><br>
        <a href="media.html">Voltar</a>
    </body>
</html>
