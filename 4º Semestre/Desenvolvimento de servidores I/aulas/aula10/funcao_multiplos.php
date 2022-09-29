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
        function soma (){
        /* func_get_args (): essa função pega todos os valores e coloca
         * dentro de um vetor chamado $v. Assim, quando essa linha for
         * executada irá ser criado um vetor com a quantidade de posições
         * informadas. As posições sempre iniciam com zero.
         * Por exemplo, $v[0] $v[2] ... $v[n]
         */
        $v = func_get_args ();
        /* func_num_args(): essa função retorna o número de argumentos
         * que foram passados.
         */
        $t = func_num_args ();
        $s = 0;
        for ($i = 0; $i < $t; $i++){
            $s = $s + $v[$i];
        }
        return $s;
        }
        
        echo "<h3>Soma da função com múltiplos parâmetros</h3>";
        $r = soma(3,5,2,8,9,4);
        echo "A soma = $r";
        ?>
    </body>
</html>
