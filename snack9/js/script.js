var risultato = 0;
var risultatoBis = 0;

//eseguito con il for
for (var i = 0; i < 5; i++) {
  do {
    var numero = parseInt(prompt("inserisci un numero"));
  } while (isNaN(numero));
  risultato += numero;
}

// eseguito con il while
var j=0;
while (j < 5) {
  do {
    var numeroBis = parseInt(prompt("inserisci un numero"));
  } while (isNaN(numero));
  risultatoBis += numeroBis;
  j++;
}
// stampa in console dei risultati
console.log(risultato);
console.log(risultatoBis);
