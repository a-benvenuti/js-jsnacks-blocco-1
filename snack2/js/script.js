var parola1 = prompt("inserisci la prima parola");
var parola2 = prompt("inserisci la seconda parola");
if (parola1.length == 0 || parola2.length == 0){
  alert("errore, devi inserire almeno un carattere");
  location.reload();
}
if (parola1.length > parola2.length){
  console.log(parola2);
  console.log(parola1);
} else if (parola1.length < parola2.length) {
  console.log(parola1);
  console.log(parola2);
} else if (parola1.length == parola2.length) {
  console.log("le due parole sono della stessa lunghezza");
}
