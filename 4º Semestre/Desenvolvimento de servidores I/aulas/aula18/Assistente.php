<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Assistente
 *
 * @author Rafaela
 */
require_once 'Contador.php';

class Assistente extends Contador {
    
    private $vale;
    
    public function getVale() {
        return $this->vale;
    }

    public function setVale($vale): void {
        $this->vale = $vale;
    }
    
    public function pagar($func, $s) {
        echo "<h3>Pagar salário</h3>";
        $total = $s+500;
        echo "<p>O pagamento para o (a) profissional $func com o salário e bomificação de R$ $s foi efetuado!</p>";
    }
}
