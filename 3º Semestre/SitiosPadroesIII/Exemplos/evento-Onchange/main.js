function myFunction() {
    let x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
    console.log(x.value);
}

let btn = document.getElementById("fname");
btn.addEventListener("change", myFunction);// OU blur