let array1 = ["Mary", "Mike", "Larry", "Thomas", "Matthew"];
let array2 = ["Sarah", "Larissa", "Natasha", "Alexander", "Trish"];
let array3 = ["Danny", "Mark", "Louise", "Terry", "Fred"];

document.getElementById(
  "spread1"
).innerHTML = `The list of people invited for the dinner is ${[
  ...array1,
  ...array2,
  ...array3,
]}`;

let array4 = [17, 7, 10, 4, 24, 18, 13, 27];

document.getElementById(
  "spread2"
).innerHTML = `The highest number in array 4 is ${Math.max(...array4)}`;
