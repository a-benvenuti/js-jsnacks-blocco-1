var numero = prompt("inserisci un numero di 4 cifre");
var risultato = 0;
for (var i = 0; i < numero.length; i++) {
  risultato += parseInt(numero[i]);
}
console.log(risultato);
