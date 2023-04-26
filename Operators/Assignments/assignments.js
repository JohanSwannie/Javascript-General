let val1 = 0,
  val2 = 17;

val1 = val2;

document.getElementById(
  "assignment1"
).innerHTML = `"val1" has been set to "val2" and therefore the result of "val1" is now ${val1}`;

let val3 = 3,
  val4 = 10;

val3 += val4;

document.getElementById(
  "assignment2"
).innerHTML = `Add "val4" to "val3" which result in "val3" to be ${val3}`;

let val5 = 21,
  val6 = 16;

val5 -= val6;

document.getElementById(
  "assignment3"
).innerHTML = `Subtract "val6" from "val5" which result in "val5" to be ${val5}`;

let val7 = 12,
  val8 = 4;

val7 *= val8;

document.getElementById(
  "assignment4"
).innerHTML = `Multiply "val7" by "val8" which result in "val7" to be ${val7}`;

let val9 = 27,
  val10 = 3;

val9 /= val10;

document.getElementById(
  "assignment5"
).innerHTML = `Divide "val9" by "val10" which result in "val9" to be ${val9}`;

let val11 = 17,
  val12 = 8;

val11 %= val12;

document.getElementById(
  "assignment6"
).innerHTML = `Divide "val12" into "val11" which result in "val11" to result in the remainder of ${val11}`;

const object = { val1: 9, val2: 7, val3: 11 };

document.getElementById(
  "assignment7"
).innerHTML = `The Three object values added together result in  ${
  object.val1 + object.val2 + object.val3
}`;
