// Typage dynamique
var age = 45;
age = "78";
age = true;

// Hoisting
console.log("Firstname before declaration :" + firstName);
var firstName = "Christian";
console.log("Firstname after declaration :" + firstName);

// Variables globales
for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i);
