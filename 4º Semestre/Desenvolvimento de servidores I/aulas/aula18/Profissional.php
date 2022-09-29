<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPClass.php to edit this template
 */

/**
 * Description of Profissional
 *
 * @author Rafaela
 */
abstract class Profissional {
    private $id;
    private $nome;
    private $salario;
    
    public function getId() {
        return $this->id;
    }

    public function getNome() {
        return $this->nome;
    }

    public function getSalario() {
        return $this->salario;
    }

    public function setId($id): void {
        $this->id = $id;
    }

    public function setNome($nome): void {
        $this->nome = $nome;
    }

    public function setSalario($salario): void {
        $this->salario = $salario;
    }
    
    public function consultar() {
        echo "<h3>Consultar</h3>";
        echo "<p>O (a) profissional {$this->getNome()} possui o salário de R$ {$this->getSalario()}</p>";
    }

}
