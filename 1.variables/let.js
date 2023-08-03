console.log(name); // erreur de hostling
let name="chris";


// let permet de créer des variables locales
for (var i = 0; i < 3 ; i++){
    console.log(i); //ici le console log fonctionne > "i" est dans la fonction
}
console.log(i); // ici erreur car "i" n'existe pas en dehors de la fonction

