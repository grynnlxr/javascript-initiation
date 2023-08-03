const max_attempts = 5;  // initialise à 5 tentatives
const code_pin_length = 4; //longueur du code PIN

let codePin;  // la valeur est différente en fonction de l'entrée donc LETF

while (true) {
    codePin = prompt("Veuillez définir un code PIN à 4 chiffres :")
    if (codePin.length === code_pin_length && !isNaN(codePin)) {
        break;
    } alert("le code PIN doit contenir 4 chiffres")

}

let codeATester;
let essais = 0;
while (essais < max_attempts) {
    codeATester = prompt(
        "veuillez saisir le code Pin à tesre")
};
if (isNaN(codeATester)) {
    alert("le code Pin doit uniquement contenir des chiffres")
}

if (codeATester === codePin) {
    alert("acces autorisé");
    break;
}
essais++;
alert(`code incoorrect, ${max_attempts - essais}`);
}

if 
