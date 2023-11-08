function numeroAleatorioDeCincoDigitosConCeros() {
    var numeroSecreto = Math.floor(10000 + Math.random() * 90000);
    return numeroSecreto.toString().padStart(5, '0');
}
  
  var numeroRandom = numeroAleatorioDeCincoDigitosConCeros();
  console.log(numeroRandom);
  

function enviar(){

    let numeros = document.getElementById("numero").value
    if (numeros.length != 5){
        window.alert("El numero esta fuera de rango");
    }
    else{
        let numerosSeparados = numero.split("");
    }

    var tabla = document.getElementsByName("div")
    var newRow = tabla.insertRow(tabla.rows.length)


    for(let i=0; i < 5; i++){
        var celda = newRow.insertCelda(i);
        celda.innerHTML = "$numeros";
        
    }
}
var botonAgregarFila = document.getElementsByClassName('enviar');
botonAgregarFila.addEventListener('click', enviar);
