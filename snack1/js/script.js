
var primo = parseInt(prompt("inserisci il primo numero"));
var secondo = parseInt(prompt("inserisci il secondo numero"));
if (primo > secondo){
  document.getElementById('stamp').innerHTML = "il primo numero è il MAGGIORE";
  console.log(primo);
}else if (secondo > primo) {
  document.getElementById('stamp').innerHTML = "il secondo numero è il MAGGIORE";
  console.log(secondo);
}else {
  document.getElementById('stamp').innerHTML = "sono UGUALI";
  console.log(primo);
  console.log(secondo);
}
