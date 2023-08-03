/*
E6
Écrire un programme Javascript qui demande à l'utilisateur de 
créer 2 listes composées de nombres.
Ensuite, remplir ces 2 listes à partir de la lecture du clavier tout en sachant 
que ces 2 listes doivent avoir la même taille(aussi définie par une lecture).
Puis, calculer la liste résultante  qui va être construite par la somme des  
éléments aux mêmes index des 2 listes précédentes.
Exemple :
Liste 1 : [ 2 , 4 , 5 , 7 ,8 ]
Liste 2 : [ 3 , 7 , 2 , 5 , 6 ]
List 3(résultante) : [ 5(2+3) , 11(4+7), 7(5+2) , 12(7+5), 14(8+6) ]  */


let tailleListes = Number(prompt("Veuillez entrer la taille des listes :"));

if (isNaN(tailleListes) || tailleListes <= 0) {
    alert("La taille des listes doit être un nombre valide et supérieur à zéro.");
    return;
}

let liste1 = [];
let liste2 = [];
let listeResultante = [];

for (let i = 0; i < tailleListes; i++) {
    let valeurListe1 = parseFloat(prompt(`Liste 1 - Entrez la valeur ${i + 1}:`));
    let valeurListe2 = parseFloat(prompt(`Liste 2 - Entrez la valeur ${i + 1}:`));

    if (isNaN(valeurListe1) || isNaN(valeurListe2)) {
        alert("Les valeurs entrées doivent être des nombres valides.");
        return;
    }

    liste1.push(valeurListe1);
    liste2.push(valeurListe2);
    listeResultante.push(valeurListe1 + valeurListe2);
}

console.log(`Liste 1 : [${liste1.join(", ")}]`);
console.log(`Liste 2 : [${liste2.join(", ")}]`);
console.log(`Liste Resultante : [${listeResultante.join(", ")}]`);