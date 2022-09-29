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
        require_once 'Administrador.php';
        require_once '.php';
        require_once 'Estagiario.php';
        require_once 'Assistente.php';
        
        $a = new Administrador();
        $c = new Contador();
        $e = new Estagiario();
        $ass = new Assistente();
        
        $a->setId(1);
        $a->setNome("Mauro");
        $a->setSalario(8000);
        $a->setCra(1111);
        print_r($a);
        
        $a->setId(2);
        $a->setNome("Livia");
        $a->setSalario(5000);
        $a->setCra(2222);
        print_r($c);
        
        $e->setId(3);
        $e->setNome("Pedro");
        $e->setSalario(1000);
        $e->setCra(3333);
        print_r($e);   
        
        $ass->setId(4);
        $ass->setNome("Otavio");
        $ass->setSalario(3000);
        $ass->setCra(4444);
        print_r($e); 
        
        
        echo "<h1>Métodos do Administrador</h1>";
        $a->consultar();
        $a->contratar($c->getNome());
        
        echo "<h1>Métodos do Contador</h1>";
        $c->consultar();
        $c->pagar($a->getNome(), $a->getSalario());
        
        echo "<h1>Métodos do Estagiario</h1>";
        $e->consultar();
        
        echo "<h1>Métodos do Assistente</h1>";
        $ass->pagar($e->getNome(), $e->getSalario());
        
        ?>
        </pre>
    </body>
</html>
