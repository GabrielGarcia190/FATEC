<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
    echo "<h3> Operadores logicos</h3>";
    $ano = 2000;
    $idade = 2018 - $ano;
    echo "Quem nasceu $ano tem de idade $idade anos";
    $tipo = ($idade >= 18 && $idade < 65) ? "é obrigatório" : "não é obrigatório";
    echo "</br> Seu voto $tipo";
    ?>
</body>
</html>