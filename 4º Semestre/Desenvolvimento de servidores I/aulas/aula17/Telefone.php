<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Telefone
 *
 * @author Rafaela
 */
class Telefone implements Controle {
    //criando o atributos
    private $botaoLigar;
    private $botaoVolume;
    private $botaoMenu;
    
    //Métodos especiais
    public function _construct (){
        $this->setBotaoLigar(false);
        $this->setBotaoVolume(10);
        $this->setBotaoMenu(false);
    }
    
    private function getBotaoLigar (){
        return $this->botaoLigar;
    }
    
    private function getBotaoVolume (){
        return $this->botaoVolume;
    }
    
    private function getBotaoMenu (){
        return $this->botaoMenu;
    }
    
    private function setBotaoLigar (){
        $this->botaoLigar = $botaoLigar;
    }
    
    private function setBotaoVolume (){
        $this->botaoVolume = $botaoVolume;
    }
    
    private function setBotaoMenu (){
        $this->botaoMenu = $botaoMenu;
    }

    public function abrirMenu() {
        if ($this->getBotaoLigar()== true){
            echo "<p>O botão menu foi acionado! </p>";
            echo "<p>Você selecionou o aplicativo de Contatos.</p>";
        } else {
            echo "<p>O botão menu não pode ser acionado, pois o telefone está desligado! </p>";
        }
    }

    public function desligar() {
        $this->setBotaoLigar(false);
    }

    public function fecharMenu() {
        echo "<p>O botão do menu foi fechado!</p>";
    }

    public function ligar() {
        $this->setBotaoLigar(true);
    }

    public function maisVolume() {
       if ($this->getBotaoLigar()== true){
           $this->setBotaoVolume($this->getBotaoVolume()+ 1);
           echo "<p>O volume aumentou para " . $this->getBotaoVolume()."</p>";
       } else {
           echo "<p>O botão volume não pode aumentar, pois o telefone está desligado!</p>";
       }
    }

    public function menosVolume() {
      if ($this->getBotaoLigar()== true){
           $this->setBotaoVolume($this->getBotaoVolume()- 1);
           echo "<p>O volume diminuiu para " . $this->getBotaoVolume()."</p>";
       } else {
           echo "<p>O botão volume não pode diminuir, pois o telefone está desligado!</p>";
       }  
    }

}
