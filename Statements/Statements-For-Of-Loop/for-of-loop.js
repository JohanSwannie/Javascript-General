let array1 = ["John", "Mary", "Noel", "james", "Aaron", "Jill", "Mike", "Jack"];
let array2 = [];
let array3 = [];

for (let name of array1) {
  if (name[0].toLowerCase() === "j") {
    array2.push(name);
  } else {
    array3.push(name);
  }
}

document.getElementById(
  "forOfLoop1"
).innerHTML = `Names started with the letter j are ${array2}`;

document.getElementById(
  "forOfLoop2"
).innerHTML = `Other names remaining are ${array3}`;
