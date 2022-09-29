<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Contador
 *
 * @author Rafaela
 */
require_once 'Profissional.php';

class Contador extends Profissional {
    
    private $crc;
    
    public function getCrc() {
        return $this->crc;
    }

    public function setCrc($crc): void {
        $this->crc = $crc;
    }

    public function pagar($func, $s) {
        echo "<h3>Pagar salário</h3>";
        echo "<p>O pagamento para o (a) profissional $func com o salário de R$ $s foi efetuado!</p>";
    }
}
