// Erreur : Plus de hoisting
// console.log(name);
// let name = "Chris";

// Permet de creer des variables locales
for (let i = 0; i < 3; i++) {
  console.log(i);
}

console.log(i); // Erreur, car "i" n'existe pas en dehors de la boucle
