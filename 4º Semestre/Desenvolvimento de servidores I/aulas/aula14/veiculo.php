<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of veiculo
 *
 * @author Rafaela
 */
class veiculo {
    public $nome;
    public $cor;
    private $ano;
    protected $botao;
    
    //criação dos métodos
    public function acelerar(){
        // this -> substitui o nome do objeto
        if ($this->botao == true){
            echo "<p>O carro está acelerando...</p>";
        }else {
            echo"<p>O carro está parado...</p>";
        }
       
    }
    
    //Método ligar o carro
    public function ligar(){
        $this->botao = true;
    }
    
    //Método desligar o carro
    public function desligar(){
        $this->botao = false;
    }
}
