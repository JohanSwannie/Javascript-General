let val1 = 19,
  val2 = 10,
  val3 = 15,
  val4 = 7,
  val5 = 0,
  val6 = 0,
  val7 = 0,
  val8 = 0;

document.getElementById(
  "arith1"
).innerHTML = `"val1" added to "val2" results in ${val1 + val2}`;

document.getElementById(
  "arith2"
).innerHTML = `"val2" subtracted from "val1" results in ${val1 - val2}`;

document.getElementById(
  "arith3"
).innerHTML = `"val1" multiplied with "val2" results in ${val1 * val2}`;

document.getElementById(
  "arith4"
).innerHTML = `"val1" to the power of 3 results in ${val1 ** 3}`;

document.getElementById(
  "arith5"
).innerHTML = `"val1" devided by "val2" results in ${val1 / val2}`;

document.getElementById(
  "arith6"
).innerHTML = `"val1" devided by "val2" results in a remainder of ${
  val1 % val2
}`;

val5 = ++val1;

document.getElementById(
  "arith7"
).innerHTML = `"5" after pre incrementation of val1 results in "val5" to be ${val5} and "val1" to be ${val1}`;

val6 = val2++;

document.getElementById(
  "arith8"
).innerHTML = `"val6" after post incrementation of val2 results in "val6" to be ${val6} and "val2" to be ${val2}`;

val7 = --val3;

document.getElementById(
  "arith9"
).innerHTML = `"val7" after pre decrementation of val3 results in "val7" to be ${val7} and "val3" to be ${val3}`;

val8 = val4--;

document.getElementById(
  "arith10"
).innerHTML = `"val8" after post decrementation of val4 results in "val8" to be ${val8} and "val4" to be ${val4}`;
