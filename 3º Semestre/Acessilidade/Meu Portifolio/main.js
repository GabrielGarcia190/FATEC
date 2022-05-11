function altoContraste() {
    modicarClassHero();
    modicarClassSobre();
    modicarClassService();
    modificarContato();
    modificarVideo();
    modificarFooter();
    document.getElementById("btn").style.display = "none";
    document.getElementById("btn-1").style.display = "block";
}


function modicarClassHero() {
    document.getElementById('hero').style.cssText = "  background-image: url(Img/background_invertido.jpg);";
    document.getElementById('lista').style.cssText = " color: black;";
    document.getElementById('lista1').style.cssText = " color: black;";
    document.getElementById('lista2').style.cssText = " color: black;";
    document.getElementById('lista3').style.cssText = " color: black;";
    document.getElementById('lista4').style.cssText = " color: black;";
    document.getElementById('btn-1').style.cssText = " color: white; background-color: black;";
    document.getElementById("span1").style.cssText = " color: rgb(0,0,205);";
    document.getElementById("span").style.cssText = " color: rgb(0,0,205);";
    document.getElementById('h1').style.cssText = " color:  rgb(128,128,128)";
    document.getElementById('h4').style.cssText = " color: black;";
    document.getElementById('h4').style.cssText = " color: black;";
    document.getElementById('logo').style.cssText = " color:  rgb(128,128,128)";
}

function modicarClassSobre() {
    document.getElementById('img').src = "Img/imagem2_invertida.jpg";
    document.getElementById('sobre').style.cssText = "background-color: rgb(250, 235, 215)";
    document.getElementById('sobre-h2').style.cssText = "color: black";
    document.getElementById('sobre-h5').style.cssText = "color: rgb(128,128,128)";
    document.getElementById('sobre-p').style.cssText = "color:  rgb(128,128,128);";
    document.getElementById('sobre-btn').style.cssText = "color: black; background-color: rgb(0,0,205)";

}

function modicarClassService() {
    document.getElementById('service').style.cssText = "background-color: white;";
    document.getElementById('card').style.cssText = "background-color: rgb(250, 235, 215)";
    document.getElementById('card1').style.cssText = "background-color: rgb(250, 235, 215)";
    document.getElementById('card2').style.cssText = "background-color: rgb(250, 235, 215)";
    document.getElementById('title').style.cssText = "color: black;";
    document.getElementById('i').style.cssText = "color: rgb(0,0,205);";
    document.getElementById('i1').style.cssText = "color: rgb(0,0,205);";
    document.getElementById('i2').style.cssText = "color: rgb(0,0,205);";
    document.getElementById('card-btn').style.cssText = "color: black; background-color: rgb(0,0,205);";
    document.getElementById('card-btn1').style.cssText = "color: black; background-color: rgb(0,0,205);";
    document.getElementById('card-btn2').style.cssText = "color: black; background-color: rgb(0,0,205);";
    document.getElementById('card-p').style.cssText = "color: rgb(128,128,128);";
    document.getElementById('card-p1').style.cssText = "color: rgb(128,128,128);";
    document.getElementById('card-p2').style.cssText = "color: rgb(128,128,128);";
    document.getElementById('card-p2').style.cssText = "color: rgb(128,128,128);";
    document.getElementById('card-h5').style.cssText = "color: black;";
    document.getElementById('card-h51').style.cssText = "color: black;";
    document.getElementById('card-h52').style.cssText = "color: black;";
}

function modificarContato() {
    document.getElementById('contato').style.cssText = "background-color: rgb(250, 235, 215);"
    document.getElementById('contato-title').style.cssText = "color: black;"
    document.getElementById('contato-btn').style.cssText = "color: black; background-color: rgb(0,0,205);"
}

function modificarVideo() {
    document.getElementById('video').style.cssText = "background-color:white;"
}

function modificarFooter() {
    document.getElementById('footer').style.cssText = "background-color: rgb(250, 235, 215);"
    document.getElementById('social-i').style.cssText = "color: black; "
    document.getElementById('social-i1').style.cssText = "color: black; "
    document.getElementById('social-i2').style.cssText = "color: black; "
    document.getElementById('social-i3').style.cssText = "color: black; "
    document.getElementById('social-a').style.cssText = "background-color: rgb(0,0,205); "
    document.getElementById('social-a1').style.cssText = "background-color: rgb(0,0,205); "
    document.getElementById('social-a2').style.cssText = "background-color: rgb(0,0,205); "
    document.getElementById('social-a3').style.cssText = "background-color: rgb(0,0,205); "
    document.getElementById('social-p').style.cssText = "color: rgb(0,0,205); "
    document.getElementById('gg').style.cssText = "color: black; "
    document.getElementById('text').style.cssText = "color: black; "
}

function voltarNormal() {
    document.location.reload(true);
}

// function altoContraste() {
//     var body = document.getElementsByTagName("BODY")[0];
//     var html = document.getElementsByTagName("HTML")[0];
//     html.style.backgroundColor = "#303000";
//     body.style.backgroundColor = "white";
//     body.style.color = "#f0e000";
//     var tags = ["FOOTER", "HEADER", "MAIN", "SECTION",
//         "NAV", "FORM",
//         "FONT", "EM", "B", "I", "U",
//         "INPUT", "P", "BUTTON", "OL", "UL", "A", "DIV",
//         "TD", "TH", "SPAN", "LI",
//         "H1", "H2", "H3", "H4", "H5", "H6",
//         "DD", "DT",
//         "INCLUDE-FRAGMENT", "ARTICLE"
//     ];
//     for (let tag of tags) {
//         for (let item of document.getElementsByTagName(tag)) {
//             item.style.backgroundColor = "white";
//             item.style.color = "#ffe000";
//         }
//     }
//     for (let tag of ["CODE", "PRE"]) {
//         for (let item of document.getElementsByTagName(tag)) {
//             item.style.backgroundColor = "white";
//             item.style.color = "green";
//         }
//     }
//     for (let tag of document.getElementsByTagName("INPUT")) {
//         tag.style.border = "solid 1px #bbb";
//     }
//     var videos = document.getElementsByTagName("VIDEO");
//     for (let video of videos) {
//         video.style.backgroundColor = "white";
//     }
//     for (let tag of document.getElementsByTagName("TH")) {
//         tag.style.borderBottom = "solid 1px yellow";
//     }
//     for (let tag of document.getElementsByTagName("A")) {
//         tag.style.color = "cyan";
//     }
// }