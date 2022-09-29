<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Administrador
 *
 * @author Rafaela
 */
require_once 'Profissional.php';

class Administrador extends Profissional {

    private $cra;

    public function getCra() {
        return $this->cra;
    }

    public function setCra($cra): void {
        $this->cra = $cra;
    }

    public function contratar($func) {
        echo "<h3>Contratar</h3>";
        echo "<p>O contrato do (a) profissional $func foi realizado com sucesso!</p>";
    }

}
