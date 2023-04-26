let val1 = "3",
  val2 = 3;

document.getElementById(
  "comparison1"
).innerHTML = `Using the "==" Operator - Is "val1" equal to "val2" - ${
  val1 == val2
}`;

document.getElementById(
  "comparison2"
).innerHTML = `Using the "===" Operator - Is "val1" equal to "val2" - ${
  val1 === val2
}`;

document.getElementById(
  "comparison3"
).innerHTML = `Using the "!=" Operator - Is "val1" NOT equal to "val2" - ${
  val1 != val2
}`;

document.getElementById(
  "comparison4"
).innerHTML = `Using the "!==" Operator - Is "val1" NOT equal to "val2" - ${
  val1 !== val2
}`;

let val3 = 17,
  val4 = 12;

document.getElementById(
  "comparison5"
).innerHTML = `Using the ">" Operator - Is "val3" greater than "val4" - ${
  val3 > val4
}`;

document.getElementById(
  "comparison6"
).innerHTML = `Using the "<" Operator - Is "val3" smaller than "val4" - ${
  val3 < val4
}`;

document.getElementById(
  "comparison7"
).innerHTML = `Using the ">=" Operator - Is "val3" greater than or equal to "val4" - ${
  val3 >= val4
}`;

document.getElementById(
  "comparison8"
).innerHTML = `Using the "<=" Operator - Is "val3" smaller than or equal to "val4" - ${
  val3 <= val4
}`;
