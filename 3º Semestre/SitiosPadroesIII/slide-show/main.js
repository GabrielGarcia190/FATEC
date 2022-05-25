function editarSlide(){
    
}


function apresentar() {
    document.getElementById("slide").style.display = "block";
    document.getElementById("botoes").style.display = "none";
}

document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        document.getElementById("slide").style.display = "none";
        document.getElementById("botoes").style.display = "block";
    }
});

