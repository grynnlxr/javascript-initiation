var age = 45;
age = "78";
age = true;   // en JS c'est un typage dynamique


// Hoisting
console.log("firstname before declaration :" + firstname); // undefined
var firstname = "christian"; // defintion de la variable
console.log("firstname before declaration :" + firstname); // ici firstname est déclaré

// varaibles globales
for (var i = 0; i < 3 ; i++){
    console.log(i); //ici le console log fonctionne > "i" est dans la fonction
}
