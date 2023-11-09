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
    let numeroSeparado = valor.split('').map(Number);
    console.log(numeroSeparado)
  } else {
    alert("El valor debe contener exactamente 5 cifras.");
  }

  
}
