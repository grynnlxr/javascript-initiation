// Non terminé


// 1. Demander a l'utilisateur le nombre de notes a inserer
const nombreNotes = Number(prompt("Combien de notes souhaitez-vous inserer?"));

// 2. Inserer les notes dans le tableau
const notesCoursPhysique = [];
for (let i = 0; i < nombreNotes; i++) {
  //   notesCoursPhysique[i] = Number(
  //     prompt(`Veuillez inserer la note numero ${i}: `)
  //   );
  const note = Number(prompt(`Veuillez inserer la note numero ${i}: `));
  notesCoursPhysique.push(note);
}

console.log(notesCoursPhysique); //[12,13,14,15]

// 3.Calculer la somme
let somme = 0;
for (let i = 0; i < notesCoursPhysique.length; i++) {
 // do{
  //  note = Number(prompt(`veuillez insérer`))
  //}
  // i = 0,somme = somme +  notesCoursPhysique[0] => somme=0+12 = 12
  // i = 1, somme = somme + notesCoursPhysique[1] => somme=12+13 = 25
  // i = 2, somme = somme + notesCoursPhysique[2] => somme=25+14 = 39
  // i = 3, somme = somme + notesCoursPhysique[3] => somme=39+15=54
  somme = somme + notesCoursPhysique[i];
}
console.log(`Somme : ${somme}`);

// 4.Calculer la moyenne
const moyenne = somme / notesCoursPhysique.length;
console.log(`Moyenne : ${moyenne}`);

// 1. Seuls les valeurs > 1 sont acceptees pour le nombre de notes.
// Tant que cette condition n'est pas remplie, on ne passe pas a la prochaine etape

// 2. Les valeurs du tableau doivent etre dans [0,20] pour que les notes soient valides
// Sinon, on ne passe pas a l'etape suivante

