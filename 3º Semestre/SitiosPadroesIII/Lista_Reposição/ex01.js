lista();


function lista() {
    let ordenar = "d";
    console.log(ordenar);
    const fruits = [2, 128, -32, 47, 34, 111, -67];
    reodenar(fruits, ordenar);

}

function reodenar(fruits, ordenar) {
    if (ordenar == "c") {
        fruits.sort(function (a, b) {
            return a - b;
        });
    } else if (ordenar == "d") {
        fruits.sort((a, b) => b - a);

}
console.log(fruits);
}