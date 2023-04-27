let val1 = 15,
  val2 = 4;

document.getElementById("bitwise1").innerHTML = `The result is ${val1 & val2}`;

let val3 = 10,
  val4 = 7;

document.getElementById("bitwise2").innerHTML = `The result is ${val3 | val4}`;

let val5 = 9;

document.getElementById("bitwise3").innerHTML = `The result is ${~val5}`;

let val6 = 5,
  val7 = 3;

document.getElementById("bitwise4").innerHTML = `The result is ${val6 ^ val7}`;

let val8 = 5,
  val9 = 2;

document.getElementById("bitwise5").innerHTML = `The result is ${val8 >> val9}`;

let val10 = 4,
  val11 = 3;

document.getElementById("bitwise6").innerHTML = `The result is ${
  val10 << val11
}`;
