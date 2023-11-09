// Función para generar un número aleatorio de cinco dígitos con ceros a la izquierda
function numeroAleatorioDeCincoDigitosConCeros() {
    var numeroSecreto = Math.floor(10000 + Math.random() * 90000);
    return numeroSecreto.toString().padStart(5, '0');
}

// Generar un número aleatorio y convertirlo en un array de dígitos
var numeroRandom = numeroAleatorioDeCincoDigitosConCeros();
console.log(numeroRandom);

var digitos = numeroRandom.split('').map(Number);

// Mostrar en la consola el array con cada dígito del número aleatorio
console.log(digitos);

// Inicializar el número de intentos y mostrarlo en el elemento con clase "intentos"
let intentos = 5;
let info = document.getElementsByClassName("intentos")[0];
info.innerHTML = "Tienes 5 intentos";

// Función para manejar el evento de enviar el número
function enviar() {
    let valor;
    let Numero = document.getElementById("numero"); // Obtener referencia al input

    // Verificar si el juego ya ha terminado (por ganar o perder)
    if (intentos === 0 || numeroRandom === valor) {
        if (numeroRandom === valor) {
            alert("¡HAS GANADO!");
            info.innerHTML = "¡HAS GANADO!"; // Actualizar mensaje de victoria
            // Deshabilitar el input y el botón después de ganar
            Numero.disabled = true;
            document.getElementById("enviar").disabled = true;
            // Mostrar los dígitos en el div con clase "columnas"
            mostrarDigitosEnColumnas(digitos);
        } else {
            alert("El juego ha terminado. Reinicia para jugar de nuevo.");
        }
        return;
    }

    intentos--;

    valor = Numero.value; // Obtener el valor ingresado por el usuario
    Numero.value = ""; // Limpiar el input

    // Validar que el valor ingresado tenga exactamente 5 cifras
    if (/^\d{5}$/.test(valor)) {
        console.log(valor);
        var numeroSeparado = valor.split('').map(Number);
        console.log(numeroSeparado);
    } else {
        alert("El valor debe contener exactamente 5 cifras.");
        return; // Salir de la función si la validación no pasa
    }

    // Iterar sobre los dígitos y actualizar la interfaz gráfica
    for (i = 0; i < 5; i++) {
        var currentDiv = document.getElementById("cuadroNumeros");
        console.log(typeof currentDiv);
        var newDiv = document.createElement("div");
        newDiv.textContent = numeroSeparado[i];
        currentDiv.appendChild(newDiv);
        newDiv.classList.add("numerosIntroducidos");

        // Cambiar el color del fondo según la coincidencia con el número aleatorio
        if (numeroSeparado[i] === digitos[i]) {
            newDiv.style.backgroundColor = "green";
        } else if (digitos.includes(numeroSeparado[i])) {
            newDiv.style.backgroundColor = "yellow";
        } else {
            newDiv.style.backgroundColor = "grey";
        }
    }

    // Verificar si el número ingresado es igual al número aleatorio
    if (numeroRandom === valor) {
        alert("¡HAS GANADO!");
        info.innerHTML = "¡HAS GANADO!"; // Actualizar mensaje de victoria
        // Deshabilitar el input y el botón después de ganar
        Numero.disabled = true;
        document.getElementById("enviar").disabled = true;
        // Mostrar los dígitos en el div con clase "columnas"
        mostrarDigitosEnColumnas(digitos);
        return;
    }

    info.innerHTML = `Tienes ${intentos} intentos`; // Actualizar mensaje de intentos restantes

    // Verificar si se agotaron los intentos y no se ha ganado
    if (intentos === 0 && numeroRandom !== valor) {
        info.innerHTML = "Eres Malisimo";
        // Mostrar los dígitos en el div con clase "columnas"
        mostrarDigitosEnColumnas(digitos);
    }
}

// Función para mostrar los dígitos en el div con clase "columnas"
function mostrarDigitosEnColumnas(digitos) {
    var columnas = document.getElementsByClassName("columnas");

    for (var i = 0; i < digitos.length; i++) {
        columnas[i].textContent = digitos[i];
    }
}