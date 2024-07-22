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

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

 compareOwners = function(otherPet) {
    return this.ownerName === otherPet.ownerName;
 }
 }


console.log(Pet);

const petForm = document.getElementById("petForm");
const petList = document.getElementById("petList");
let pets = [];

petForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);

  displayPets();
  petForm.reset();
});

function displayPets() {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const listItem = document.createElement("li");
    listItem.className = "list-group-item";
    listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
    petList.appendChild(listItem);
  });
}
