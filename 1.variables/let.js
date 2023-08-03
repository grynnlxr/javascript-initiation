<<<<<<< HEAD
console.log(name); // erreur de hostling
let name="chris";


// let permet de créer des variables locales
for (var i = 0; i < 3 ; i++){
    console.log(i); //ici le console log fonctionne > "i" est dans la fonction
}
console.log(i); // ici erreur car "i" n'existe pas en dehors de la fonction

=======
// Erreur : Plus de hoisting
// console.log(name);
// let name = "Chris";

// Permet de creer des variables locales
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Erreur, car "i" n'existe pas en dehors de la boucle
>>>>>>> main
