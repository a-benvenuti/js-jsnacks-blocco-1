do{
  var numero = parseInt(prompt("inserisci numero"));
}while (isNaN(numero));
for (var i = 1; i <= numero; i++) {
  console.log(Math.pow(i, 3));
}
