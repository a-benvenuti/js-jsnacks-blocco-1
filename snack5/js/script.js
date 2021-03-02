var elenco = [];
for (var i = 0; i < 6; i++) {
  var numero= parseInt(prompt("inserisci numero"));
  if(numero %2 == 1){
    elenco.push(numero);
  }
}
console.log(elenco);
