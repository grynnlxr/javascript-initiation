/*E2.
Écrire un programme Javascript qui permet à l’utilisateur de :
-  définir une adresse email et un mot de passe.
Ensuite dans un second temps, il sera demandé à l’utilisateur de : 
> fournir l’email et le mot de passe:
Si l’email et le mot de passe ne correspondent pas aux valeurs définies, le message “Identifiants incorrects devra s’afficher”,
 et l’utilisateur devra recommencer la saisie des valeurs.
Sinon, le message “Bienvenu dans votre espace client” devra s’afficher.
Le nombre de fois que l’utilisateur peut saisir des mauvais identifiants est limité à 5, ensuite le programme va s’arrêter avec un message disant
“Vous avez saisi des mauvais identifiants x fois, votre compte est bloqué”. */

// demande pour la creation des infos de base : email + mdp
let email = prompt("Quel est ton email : ");
let password = prompt("enregistre ton mot de passe : ");
// Nombre de tentatives autorisées
let attempts = 5;

while (attempts > 0) {
    let testEmail = prompt("Veuillez saisir votre adresse email : ");
    let testPassword = prompt("Veuillez saisir votre mot de passe : ");

    if (testEmail === email && testPassword === password) {
        alert("Bienvenue dans votre espace client.");
        break;
    } else {
        attempts--; // on décrémente de 1 après chaque tentative qui échoue
        if (attempts > 0) {
            alert(`Identifiants incorrects. Il vous reste ${attempts} essais.`);
        } else {
            alert(`Ca fait 5 fois que tu testes, ton compte est kéblo.`);
        }
    }
}

