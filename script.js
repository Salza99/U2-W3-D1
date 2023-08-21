class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static ageComparison(ageA, ageB) {
    if (ageA.age > ageB.age) {
      console.log(ageA.firstName + " è più vecchio di " + ageB.firstName);
    } else if (ageA.age < ageB.age) {
      console.log(ageA.firstName + " è più giovane di " + ageB.firstName);
    } else {
      console.log(ageA.firstName + " " + ageB.firstName + " hanno la stessa età");
    }
  }
}

const users = [new User("Davide", "Salzani", 24, "Verona"), new User("Marco", "Rossi", 29, "Parma")];

User.ageComparison(users[0], users[1]);

class Pet {
  constructor(name, ownerName, species, breed) {
    this.name = name;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  sameOwner(ownerA, ownerB) {
    if (ownerA.ownerName === ownerB.ownerName) {
      return true;
    }
  }
}

const showList = () => {
  let petName = document.getElementById("nome").innerText;
  let ownerName = document.getElementById("nome_padrone").innerText;
  let species = document.getElementById("specie").innerText;
  let breed = document.getElementById("razza").innerText;

  const pets = [new Pet(petName, ownerName, species, breed)];
};
