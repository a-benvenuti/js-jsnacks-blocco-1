// creo un array contenete l'elenco degli invitati
var elencoInvitati = ["pippo" , "franco" , "luigi" , "mario" , "gianni"];
console.log(elencoInvitati);

// chiedo all'utente di inserire la mail da verificare
var verificaInvitato = prompt("Inserisci qui, il tuo nome");
var accesso = 0;
// controllo se l'accesso dell'invitato è consentito
for (var i = 0; i < elencoInvitati.length; i++) {

  if (verificaInvitato.toLowerCase() === elencoInvitati[i].toLowerCase()) {
   console.log("Si può accedere");
   accesso = 1;
  }
// stampa se l'utente e autorizzato o non
}
if (accesso == 1){
  document.getElementById('stamp').innerHTML = "BENVENUTO, Accesso Autorizzato";
} else {
  document.getElementById('stamp').innerHTML = "MI DISPIACE, Accesso NON Autorizzato";
}
