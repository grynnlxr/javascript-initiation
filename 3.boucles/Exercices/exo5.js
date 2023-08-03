/* 
E5.
Écrire un algorithme qui permettra de calculer plusieurs tables de multiplication.
On va d’abord demander à l’utilisateur de saisir le 1er nombre  : "numberOne"
dont il faut connaître la table de multiple, 
ensuite on lui demandera le dernier nombre : "lastNumber"
Si par exemple le premier nombre est 3 et le dernier 8, 
on va afficher toutes les tables de multiplications de 3 à 8, donc : 3,4,5,6,7,8
Après on demandera à l’utilisateur d’entrer le premier nombre et le dernier nombre à multiplier.
Si par exemple il saisit comme premier nombre 3 et dernier nombre 7, on aura;
3 x 3 = 9	4 x 3 = 12	…	8 x 3 = 24
3 x 4 = 12	4 x 4 = 14	…	8 x 4 = 32
3 x 5 =15	4 x 5 = 20	…	8 x 5 = 40
3 x 6 = 18	4 x 6 = 24	…	8 x 6 = 48
3 x 7 = 21	4 x 7 = 28	…	8 x 7 = 56  */

let numberOne = Number(prompt("Entre le premier nombre pour les tables de multiplication :"));
let lastNumber = Number(prompt("Entre le dernier nombre pour les tables de multiplication :"));

if (isNaN(numberOne) || isNaN(lastNumber)) {
  alert("Il faut rentrer des chiffres. Recommence.");
}

for (let i = numberOne; i <= lastNumber; i++) {
  for (let j = numberOne; j <= lastNumber; j++) {
    let resultat = i * j;
    console.log(`${i} x ${j} = ${resultat}\t`);
    //console.log(`${i} x ${j} = ${resultat}\t`);
  }
  console.log("\n");
}