let attempts = 4;  // initialise à 4 tentatives
let codePin;
let codeATester = "";

while (attempts > 0) {
  codePin = prompt("Veuillez définir un code PIN à 4 chiffres : ");

  // 2. S'assurer que le code PIN ait toujours 4 chiffres
  // Vérfie si le code entré est un chiffre avec 4 numéros
  if (!/^\d{4}$/.test(codePin)) {
    // ^\d{}
    alert("Le code PIN doit être un nombre à 4 chiffres. Veuillez réessayer.");
    continue;
  }

  let codeATester = "";

  while (codeATester !== codePin) {
    codeATester = prompt(
      `Veuillez saisir le code PIN pour déverrouiller l'appareil (${attempts} essais restants) : `
    );

    if (codeATester !== codePin) {
      attempts--;
      if (attempts > 0) {
        alert("Code PIN incorrect. Veuillez réessayer.");
      } else {
        alert("Nombre d'essais épuisé. Appareil bloqué.");
      }
    } else {
      alert("Appareil débloqué.");
    }
  }

  break;
}

// 3. la valeur du code PIN doit être un nombre.


