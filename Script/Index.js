
var intentos = 0

function numeroAleatorioDeCincoDigitosConCeros() {
    var numeroSecreto = Math.floor(10000 + Math.random() * 90000);
    return numeroSecreto.toString().padStart(5, '0');
}
  
  var numeroRandom = numeroAleatorioDeCincoDigitosConCeros();
  console.log(numeroRandom);
  
  var digitos = numeroRandom.split('').map(Number);

console.log(digitos); // Esto mostrará un array con cada dígito del número

function enviar(){

  let Numero = document.getElementById("numero");
  let valor = Numero.value;
  valor.value = ""
  
  if (/^\d{5}$/.test(valor)) {
    console.log(valor)
    var numeroSeparado = valor.split('').map(Number);
    console.log(numeroSeparado)
  } else {
    alert("El valor debe contener exactamente 5 cifras.");
  }

  for (i=0 ;i<5; i++){
  var currentDiv = document.getElementById("cuadroNumeros");
  console.log(typeof currentDiv);
  var newDiv = document.createElement("div");
  newDiv.textContent = numeroSeparado[i];
  currentDiv.appendChild(newDiv);
  newDiv.classList.add("numerosIntroducidos", "$numeroSeparado")
  
  }
}
