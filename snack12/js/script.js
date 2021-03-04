var numeri = [1, 666, 1, 666, 1, 666];
var risultato = 0;
// sommo soltanto i numeri che sono in posizione dispari "umana"
for (var i = 0; i < numeri.length; i++) {
  if ( i % 2 == 0) {
    risultato += numeri[i];
  }
}


console.log(risultato);
