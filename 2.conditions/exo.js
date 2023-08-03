// déclaration de 2 variables
const number1 = 12;
const number2 = 8;

// déclaration d'une constante qui est la somme des 2 variables
const sum = number1 + number2;

// affichage d'un message d'alert
alert("Bienvenue sur la page de formulaire");

// affichage du contenu des variables dans la console du navigateur
console.log("Contenu de variable1 : " + number1);
console.log("Contenu de variable2 : " + number2);

// Affichage du résultat du calcul dans la console du navigateur
console.log("Le résultat est : " + sum);

// EXO 2

// Demander à l'utilisateur d'entrer la distance parcourue (en mètres) et le temps (en secondes)
let distance = prompt("Entrez la distance parcourue (en mètres) :");
let time = prompt("Entrez le temps écoulé (en secondes) :");

// Calculer la vitesse en mètres par seconde (m/s)
let speed = distance / time;

// Afficher le résultat à l'aide d'une alerte
alert("La vitesse est de : " + speed + " m/s");

// Afficher le résultat dans la console
console.log("La vitesse est de : " + speed + " m/s");


// EXO 3
// Écrire un programme Javascript qui demande l’âge d’un enfant. 
// Ensuite, il l’informe de sa catégorie :

let age = prompt("Veuillez entrer votre age : ");

/*
« Poussin » de 7 à 9 ans
« Pupille » de 10 à 11 ans
« Benjamin » de 12 à 13 ans
« Minime » de 14 à 15 ans
« Cadet » 16 à 17 ans

if (age >= 7 && age <=9) {
    console.log("categorie = Poussin");
  } else if {
    console.log("Noonnn");
  }else {

  } */