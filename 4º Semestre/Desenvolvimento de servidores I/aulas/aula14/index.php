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
        // A classe veiculo será carregada dentro do arquivo index.php
        require_once 'veiculo.php';
        
        // Criando o objeto carro que será instanciado da classe veiculo
        $carro = new veiculo;
        $carro->nome="Gol";
        $carro->cor="branco";
        //$carro->ano=2015;
        //$carro->botao=true;
        
        //Mostrando o estado atual do objeto
        echo "<h3>Mostrando o objeto carro com var_dump</h3>";
        var_dump($carro);
        
        echo"<h3>Mostrando o objeto carro com print_r</h3>";
        print_r($carro);
        
        //Chamando o método acelerar () dentro do objeto carro que é 
        // uma instância da classe veicullo
        echo "<h3>Mostrando os métodos</h3>";
        $carro->acelerar();
        $carro->desligar();
        $carro->acelerar();
        $carro->ligar();
        $carro->acelerar();
        ?>
        </pre>
    </body>
</html>
