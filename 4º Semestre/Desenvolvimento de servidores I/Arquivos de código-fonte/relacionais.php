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
    echo "<h3> Operadores relacionais</h3>";
    $num1 = 5;
    $num2 = 3;
    $tipo = "s";
    $r = $tipo == "s" ? $num1 + $num2 : $num1 * $num2;
    echo "O resultado  = $r";
    ?>
</body>

</html>