var risultato = 0;
for (var i = 0; i < 10; i++) {
  var dato = parseInt(prompt("insirisci il valore"));
  if (!isNaN(dato)) {
    risultato = risultato + dato;
  }

}
console.log(risultato);
