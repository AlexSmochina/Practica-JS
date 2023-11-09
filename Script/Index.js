var intentos = 0;

function numeroAleatorioDeCincoDigitosConCeros() {
    var numeroSecreto = Math.floor(10000 + Math.random() * 90000);
    return numeroSecreto.toString().padStart(5, '0');
}
  
var numeroRandom = numeroAleatorioDeCincoDigitosConCeros();
console.log(numeroRandom);
  
var digitos = numeroRandom.split('').map(Number);

console.log(digitos); // Esto mostrará un array con cada dígito del número

function enviar() {
    let Numero = document.getElementById("numero");
    let valor = Numero.value;
    Numero.value = ""; // Corregido, cambié valor.value a Numero.value

    if (/^\d{5}$/.test(valor)) {
        console.log(valor);
        var numeroSeparado = valor.split('').map(Number);
        console.log(numeroSeparado);
    } else {
        alert("El valor debe contener exactamente 5 cifras.");
        return; // Salir de la función si la validación no pasa
    }

    for (i = 0; i < 5; i++) {
        var currentDiv = document.getElementById("cuadroNumeros");
        console.log(typeof currentDiv);
        var newDiv = document.createElement("div");
        newDiv.textContent = numeroSeparado[i];
        currentDiv.appendChild(newDiv);
        newDiv.classList.add("numerosIntroducidos"); // Corregido, eliminé el signo de dólar $

        if (numeroSeparado[i] === digitos[i]) {
            newDiv.style.backgroundColor = "green";
        } else if (digitos.includes(numeroSeparado[i])) {
            newDiv.style.backgroundColor = "yellow";
        } else {
            newDiv.style.backgroundColor = "grey";
        }
    }
}
