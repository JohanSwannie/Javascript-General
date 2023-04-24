// * Class - Example 1

class SportRatings {
  constructor(_sport, _rating) {
    this.sport = _sport;
    this.rating = _rating;
  }

  getSportDetails() {
    return `${this.sport} has a rating of ${this.rating} out of 10`;
  }
}

const sportRating1 = new SportRatings("Tennis", 8.3);

document.getElementById("class1").innerHTML = sportRating1.getSportDetails();

// * Class - Example 2

class Persons {
  constructor(_firstName, _lastName, _age, _career) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.career = _career;
  }

  getPersonDetails() {
    const anotherParagraph1 = document.createElement("p");
    anotherParagraph1.innerHTML = `${this.firstName} ${this.lastName} is ${this.age} years old and is a ${this.career}`;
    container.appendChild(anotherParagraph1);
  }
}

class ExtraDetails extends Persons {
  constructor(_firstName, _lastName, _age, _career, _salary) {
    super(_firstName, _lastName, _age, _career);
    this.salary = _salary;
  }

  getPersonDetails() {
    super.getPersonDetails();
    return `${this.firstName} is getting a salary of ${this.salary} dollars per year`;
  }
}

const person1 = new Persons("Mike", "Davidson", 58, "Senior Project Manager");
const person2 = new ExtraDetails(
  "Mike",
  "Davidson",
  58,
  "Senior Project Manager",
  175000
);

const container = document.querySelector(".container");

for (value in person1) {
  if (person1.hasOwnProperty(value)) {
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = `${value} : ${person1[value]}`;
    container.appendChild(newParagraph);
  }
}

const anotherParagraph2 = document.createElement("p");
anotherParagraph2.innerHTML = `${person2.getPersonDetails()}`;
container.appendChild(anotherParagraph2);
