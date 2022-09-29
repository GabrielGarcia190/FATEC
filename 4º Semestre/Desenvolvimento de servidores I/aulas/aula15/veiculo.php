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
    private $nome;
    private $cor;
    private $ano;
    protected $botao;
    
    //Ciação do métodos
    // Método construtor
    public function __construct($n, $a, $b) {
        $this->nome = $n;
        $this->cor = "amarelo";
        $this->ano = $a;
        $this->botao = $b;
        $this->desligar();
    }
    
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
    
    public function getNome() {
        return $this->nome;
    }

    public function getCor() {
        return $this->cor;
    }

    public function getAno() {
        return $this->ano;
    }

    public function getBotao() {
        return $this->botao;
    }

    public function setNome($nome): void {
        $this->nome = $nome;
    }

    public function setCor($cor): void {
        $this->cor = $cor;
    }

    public function setAno($ano): void {
        $this->ano = $ano;
    }

    public function setBotao($botao): void {
        $this->botao = $botao;
    }


    
    
    
}
