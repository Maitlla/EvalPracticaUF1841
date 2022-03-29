// Contador Javascript 

let buttonSuma = document.querySelector('#sum');
let hUnoSuma = 0;

// Función suma 
function suma (event) {
    console.log("click en el botón");

    let resultadoSuma = hUnoSuma;
    resultadoSuma++;
    hUnoSuma = resultadoSuma;
    // para pintar el código
   const h1 = document.createElement("h1");
   const elS = document.getElementsByTagName('span')[0];
   elS.innerHTML = hUnoSuma;
}
buttonSuma.addEventListener("click", suma);





 
 