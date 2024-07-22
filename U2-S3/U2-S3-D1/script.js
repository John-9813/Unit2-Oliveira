console.log("--------ESERCIZIO 1--------");
class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} ${this.lastName} è più vecchio di ${otherUser.firstName} ${otherUser.lastName} e vive a ${this.location}`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} ${this.lastName} è più giovane di ${otherUser.firstName} ${otherUser.lastName} e vive a ${this.location}`;
    } else {
      return `${this.firstName} ${this.lastName} e ${otherUser.firstName} ${otherUser.lastName} hanno la stessa età`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 30, "Roma");
const user2 = new User("Luigi", "Verdi", 25, "Milano");

console.log(user1.compareAge(user2)); // "Mario Rossi è più vecchio di Luigi e vive a Roma"
console.log(user2.compareAge(user1)); // "Luigi Verdi è più giovane di Mario e vive a Milano"

console.log("--------ESERCIZIO 2--------");

// Definizione della classe Pet
class Pet {
    // Il costruttore inizializza le proprietà dell'oggetto
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;     // Nome dell'animale domestico
      this.ownerName = ownerName; // Nome del proprietario
      this.species = species;     // Specie dell'animale (es. cane, gatto)
      this.breed = breed;         // Razza dell'animale (es. labrador, soriano)
    }
  
    // Metodo per confrontare i proprietari di due animali
    compareOwners = function(otherPet) {
      return this.ownerName === otherPet.ownerName; // Ritorna true se i proprietari sono uguali
    }
  }
  
  // Stampa la definizione della classe Pet sulla console
  console.log(Pet);
  
  // Seleziona il form HTML con id "petForm"
  const petForm = document.getElementById("petForm");
  // Seleziona la lista HTML con id "petList"
  const petList = document.getElementById("petList");
  // Array per memorizzare gli oggetti Pet
  let pets = [];
  
  // Aggiunge un listener per l'evento di submit del form
  petForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene il comportamento predefinito del form (invio e ricarica della pagina)
  
    // Recupera i valori inseriti dall'utente nel form
    const petName = document.getElementById("petName").value;
    const ownerName = document.getElementById("ownerName").value;
    const species = document.getElementById("species").value;
    const breed = document.getElementById("breed").value;
  
    // Crea un nuovo oggetto Pet con i valori del form
    const newPet = new Pet(petName, ownerName, species, breed);
    // Aggiunge il nuovo oggetto Pet all'array pets
    pets.push(newPet);
  
    // Chiama la funzione per visualizzare tutti gli animali nella lista
    displayPets();
    // Resetta il form dopo l'invio
    petForm.reset();
  });
  
  // Funzione per visualizzare gli animali nella lista HTML
  function displayPets() {
    petList.innerHTML = ""; // Svuota la lista corrente
    pets.forEach((pet) => { // Per ogni oggetto Pet nell'array pets
      const listItem = document.createElement("li"); // Crea un nuovo elemento <li>
      listItem.className = "list-group-item"; // Imposta la classe CSS per lo stile
      // Imposta il testo dell'elemento <li> con i dettagli del Pet
      listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
      // Aggiunge l'elemento <li> alla lista HTML
      petList.appendChild(listItem);
    });
  }
  

console.log("--------ESERCIZIO 3 Personale--------");

class User1 {
    constructor(firstName, lastName, age, location, mail) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
        this.mail = mail
    }
    
    compareLocation(otherUser) {
        if (this.location === otherUser.location) {
            return `${this.firstName} ${this.lastName} are in the same location of ${otherUser.firstName} ${otherUser.lastName}`;
        } else { 
            return `${this.firstName} ${this.lastName} are not in the same location of ${otherUser.firstName} ${otherUser.lastName}`;
        }
    }
}

const locUser1 = new User1("Mario", "Rossi", 30, "Roma", "mario.rossi@");
const locUser2 = new User1("Luigi", "Verdi", 25, "Milano", "luigi.verdi@");

console.log(locUser1.compareLocation(locUser2)); // "Mario Rossi are in the same location of Luigi Verdi"
console.log(locUser2.compareLocation(locUser1)); // "Luigi Verdi are not in the same location of Mario Rossi"