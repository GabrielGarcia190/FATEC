<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of CartaoTravel
 *
 * @author Rafaela
 */
class CartaoTravel {
    //Atributos
        private $numero;
        private $tipo;
        private $usuario;
        private $saldo;
        private $situacao;
          
            
    //Métodos
        public function cadastrarCartao($t){
            $this->setTipo($t);
            if ($t =="Compacto"){
                $this->setSituacao (true);
                $this->setSaldo (10);
            } elseif ($t == "Master"){
                $this->setSituacao (true);
                $this->setSaldo (50);
            } elseif ($t == "Black"){
                $this->setSituacao (true);
                $this->setSaldo (100);
            } else {
                echo "<p>Cartão travel inválido</p>";
            }
        }
        
        public function encerrarCartao(){
            if ($this->getSaldo() > 0){
                echo "<p>O cartão travel ainda tem dinheiro, não pode encerrar.</p>";
            } else {
                $this->setSituacao(false);
                echo "<p>O cartão travel de " . $this->getUsuario()."foi encerrado com sucesso!</p>";
            }
        }
        
        public function carregarCartao(){
          if ($this->getSituacao()== true){
              $this->setSaldo($this->getSaldo() + $valor);
              echo "<p>Depoósito de R$ $valor realizado no cartão travel de " . $this->getUsuario()."</p>";
          } else {
              echo "<p>Cartão travel encerrado. Não pode carregar.</p>";
          }  
        }
        
        public function usarCartao($valor){
            if ($this->getSituacao()== true){
                if ($this->getSaldo() >= $valor){
                    $this->setSaldo($this->getSaldo() - $valor);
                    echo "<p>Pagamento de R$ $valor autorizado no cartão travel de " . $this->getUsuario() . "</p>";
                } else {
                    echo "<p>Saldo insuficiente para pagamento.</p>";
                }
        } else {
            echo "<p>Não pode pagar com cartão travel encerrado.</p>";
            }
        }
        
        public function tarifaCartao(){
           if ($this->getTipo()== "Compacto"){
               $valor = 5;
           } elseif ($this->getTipo()== "Master"){
               $valor = 25; 
           } elseif ($this->getTipo()== "Black"){
               $valor = 50;
           }
           if ($this->getSituacao()== true){
               $this->setSaldo($this->getSaldo() - $valor);
               echo "<p>Tarifa de R$ $valor debitada do cartão de " . $this->getUsuario()."</p>";
           } else {
               echo "<p>Saldo insuficiente. Carregue o cartão travel.</p>";
           }
        }
        
        //Construct
        
        public function __construct() {
           $this->setSaldo (0);
           $this->setSituacao (false);
           echo "<p>Conta do cartão travel criada com sucesso!</p>";
        }

        //Métodos especiais 
        
        public function getNumero() {
            return $this->numero;
        }

        public function getTipo() {
            return $this->tipo;
        }

        public function getUsuario() {
            return $this->usuario;
        }

        public function getSaldo() {
            return $this->saldo;
        }

        public function getSituacao() {
            return $this->situacao;
        }

        public function setNumero($numero): void {
            $this->numero = $numero;
        }

        public function setTipo($tipo): void {
            $this->tipo = $tipo;
        }

        public function setUsuario($usuario): void {
            $this->usuario = $usuario;
        }

        public function setSaldo($saldo): void {
            $this->saldo = $saldo;
        }

        public function setSituacao($situacao): void {
            $this->situacao = $situacao;
        }
        
        
        }
