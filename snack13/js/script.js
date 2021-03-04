var array1 = [0, 1, 2, 3];
var array2 = [0, 1, 2, 3, 4, 5];
// PRIMA
console.log(array1);
console.log(array2);
var differenza = array2.length - array1.length;
for (var i = 0; i < differenza; i++) {
  array1.push(Math.floor(Math.random() * 6));
}

// DOPO
console.log(array1);
console.log(array2);
