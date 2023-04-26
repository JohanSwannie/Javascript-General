let val1 = 11,
  val2 = 17;

document.getElementById(
  "logical1"
).innerHTML = `The values in "val1" and "val2" are both Greater than 10 - ${
  val1 && val2 > 10
}`;

let val3 = 21,
  val4 = 33;

document.getElementById(
  "logical2"
).innerHTML = `Either the value in "val3" or the value in "val4" divided by 3, will leave a remainder of zero -  ${
  val3 % 3 || val4 % 3 === 0
}`;

let val5 = 23,
  val6 = 29;

document.getElementById(
  "logical3"
).innerHTML = `The value in "val5" is NOT equal to the value in "val6" - ${!(
  val5 === val6
)}`;
