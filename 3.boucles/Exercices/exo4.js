/*
E4.
Écrire un programme Javascript qui demande un nombre de départ, 
et qui affiche ensuite les dix nombres suivants. 
Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27. */

let nombreDepart = Number(prompt("Entre un nombre :"));

if (isNaN(nombreDepart)) {
    alert("Ce n'est pas un nombre valide. Essaye encore.");
    //break;
}


let nombreSuivants = [];
for (let i = 1; i <= 10; i++) {
    nombreSuivants.push(nombreDepart + i);  // push = add de Java
}
console.log(`Les dix nombres suivants sont : ${nombreSuivants.join(" , ")}`);
alert(`Les dix nombres suivants sont : ${nombreSuivants}`);  //  pour créer une séparation entre chaque ajout .join(", ")