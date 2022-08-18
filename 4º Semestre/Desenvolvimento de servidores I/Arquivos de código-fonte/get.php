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
    echo "<h3>Personalizando os valores inseridos</h3>";
    //GET vai pgar na URL o paramêtro de "a" e colocar em $n1
    $n1 = $_GET["a"];
    //GET vai pgar na URL o paramêtro de "b" e colocar em $n2
    $n2 = $_GET["b"];
    // mostra  somatória dos paramêtros digitados na URL
    echo " A soma = " . ($n1 + $n2);
    ?>
</body>

</html>