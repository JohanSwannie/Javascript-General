const array = [19, 29, "Yes", true, "James", false];

const arrayEntries = Object.entries(array);
const arrayKeys = Object.keys(array);
const arrayValues = Object.values(array);

document.getElementById(
  "objects1"
).innerHTML = `[ The entries of the array are ${arrayEntries} ] - [ The keys of the array are ${arrayKeys} ] - [ The values of the array are ${arrayValues} ]`;

const string = "Badminton";

const stringEntries = Object.entries(string);
const stringKeys = Object.keys(string);
const stringValues = Object.values(string);

document.getElementById(
  "objects2"
).innerHTML = `[ The entries of the string are ${stringEntries} ] - [ The keys of the string are ${stringKeys} ] - [ The values of the string are ${stringValues} ]`;

const object = {
  firstName: "Mike",
  lastName: "Murdock",
  age: 55,
  career: "Senior Technical Specialist",
};

const objectEntries = Object.entries(object);
const objectKeys = Object.keys(object);
const objectValues = Object.values(object);

document.getElementById(
  "objects3"
).innerHTML = `[ The entries of the object are ${objectEntries} ] - [ The keys of the object are ${objectKeys} ] - [ The values of the object are ${objectValues} ]`;
