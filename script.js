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
