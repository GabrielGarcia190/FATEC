var segundos = parseInt(0);

// function imprime(){
//     segundos ++;
//     console.log(`segundos passados ${segudos}`);

// }

var temp = setInterval(() => {
  segundos++;
  console.log(`segundos passados ${segundos}`);
  if (segundos >= 10) clearInterval(temp);
}, 1000);
