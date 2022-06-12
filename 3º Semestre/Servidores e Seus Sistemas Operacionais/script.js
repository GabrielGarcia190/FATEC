function buscarDados() {
    document.querySelector('[data-js="lista"]').style.display = "block";
    document.querySelector('[data-js="menu"]').style.display = "none";
    document.querySelector('[data-js="formulario"]').style.display = "none";
}


document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.querySelector('[data-js="formulario"]').style.display = "none";
        document.querySelector('[data-js="lista"]').style.display = "none";
        document.querySelector('[data-js="menu"]').style.display = "block";
    }
});


