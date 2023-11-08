function numeroAleatorioDeCincoDigitosConCeros() {
    var numeroSecreto = Math.floor(10000 + Math.random() * 90000);
    return numeroSecreto.toString().padStart(5, '0');
}
  
  var numeroRandom = numeroAleatorioDeCincoDigitosConCeros();
  console.log(numeroRandom);
  
  var digitos = numeroRandom.split('').map(Number);

console.log(digitos); // Esto mostrará un array con cada dígito del número

function enviar(){

    valor
    
}
