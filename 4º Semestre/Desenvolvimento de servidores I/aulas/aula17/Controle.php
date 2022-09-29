<?php

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Scripting/PHPInterface.php to edit this template
 */

/**
 *
 * @author Rafaela
 */
require_once 'Telefone.php';

interface Controle {

    public function ligar ();
    
    public function desligar ();
    
    public function abrirMenu ();
    
    public function fecharMenu ();
    
    public function maisVolume ();
    
    public function menosVolume ();
}
