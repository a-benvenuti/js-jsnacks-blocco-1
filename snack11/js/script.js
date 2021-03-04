var cognomi = ["Periello", "Logli", "Ferretti"];
var nomi = ["Sara", "Stefano", "Laura"];
var lista = [ ];
for (var i = 0; i < 3; i++) {
  lista[i] = (cognomi[Math.floor(Math.random() * cognomi.length)] + " " + nomi[Math.floor(Math.random() * nomi.length)]);
}
console.log(lista);

//  stampo il mio array sotto forma di lista a schermo
for (var j = 0; j < lista.length; j++) {
  document.getElementById('lista_array').innerHTML += "<li>" + lista[j] + "</li>";
}
