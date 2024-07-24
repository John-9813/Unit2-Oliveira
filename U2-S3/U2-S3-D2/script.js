console.log("--------Esercizio 1-------");

document.addEventListener("DOMContentLoaded", function () {
  // Classe per gestire i nomi
  class Identity {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  // Elementi del DOM
  const identityForm = document.getElementById("identityForm");
  const deleteButton = document.getElementById("deleteButton");
  const savedNameDiv = document.getElementById("savedName");

  // Funzione per mostrare il nome salvato
  const displaySavedName = () => {
    const savedIdentity = localStorage.getItem("identity");
    if (savedIdentity) {
      const identity = JSON.parse(savedIdentity);

      savedNameDiv.textContent = `Nome: ${identity.firstName} ${identity.lastName}`;
    } else {
      savedNameDiv.textContent = "Nessun nome salvato";
    }
  };

  // Mostra il nome salvato al caricamento della pagina
  displaySavedName();

  // Evento per salvare il nome
  identityForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const newIdentity = new Identity(firstName, lastName);

    localStorage.setItem("identity", JSON.stringify(newIdentity));

    displaySavedName();
    identityForm.reset();
  });

  // Evento per cancellare il nome
  deleteButton.addEventListener("click", function () {
    localStorage.removeItem("identity");
    displaySavedName();
  });
});

console.log("--------Esercizio 2-------");

document.addEventListener("DOMContentLoaded", function () {
  // Recupera il valore del contatore da sessionStorage, oppure imposta a 0 se non esiste
  let counterValue = sessionStorage.getItem("counter")
    ? parseInt(sessionStorage.getItem("counter"))
    : 0;

  // Elemento del DOM per mostrare a schermo il contatore
  const counterDisplay = document.getElementById("counter");

  // Funzione per aggiornare il contatore
  const updateCounter = () => {
    counterValue++;
    counterDisplay.textContent = counterValue;
    sessionStorage.setItem("counter", counterValue);
  };

  // Aggiorna il contatore ogni secondo
  setInterval(updateCounter, 1000);

  // Visualizza il valore corrente del contatore
  counterDisplay.textContent = counterValue;
});
