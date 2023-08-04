/* 
E3.
Écrire un programme javascript qui demande un nombre
 compris entre 10 et 20, 
jusqu’à ce que la réponse convienne.
En cas de réponse supérieure à 20, 
on fera apparaître un message: « Plus petit! », 
et inversement, « Plus grand! » si le nombre est inférieur à 10. */

let nombre = "";  // ou let nombre

//utiliser un do  While pour éviter la répétition de l'instruction
while (true) {
    nombre = parseInt(prompt("Saisir un nombre entre 10 et 20 :")) || 0;

    if (nombre >= 10 && nombre <= 20) {
        alert("Bravo! Vous avez saisi un nombre valide.");
        break;

    } else if (nombre > 20) {
        alert("Plus petit!")

    } else if (nombre < 10) {
        alert("Plus grand!");

    } else {
        alert("Ce n'est pas un nombre valide. Veuillez réessayer.");
    }
}