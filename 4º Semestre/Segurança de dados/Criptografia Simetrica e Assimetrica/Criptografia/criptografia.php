<?php
define('CHARS', 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'); //characteres possiveis de serem utilizadas na msg....';
define('CHAVE', 'ZYXWVUTSRQPONMLKJIHGFEDCBAzyxwvutsrqponmlkjihgfedcba9876543210'); //substitui os valores correspondentes dos caracteres acima....';

/////funcao cifragem
function cifrar($m)
{
//$m = strtoupper($m);
$cifrada='';
$qtde = strlen($m);

      for ($i = 0; $i < $qtde; $i++) {
          $c = substr($m,$i,1);
          $posicao = strpos(CHARS,$c);
          $cifrada=$cifrada.substr(CHAVE,$posicao,1);
      }

return $cifrada;
}

/////funcao decifragem
function decifrar($m)
{
//$m = strtoupper($m);
$decifrada='';
$qtde = strlen($m);

      for ($i = 0; $i < $qtde; $i++) {
          $c = substr($m,$i,1);
          $posicao = strpos(CHAVE,$c);
          $decifrada=$decifrada.substr(CHARS,$posicao,1);
      }

return $decifrada;
}
?>
