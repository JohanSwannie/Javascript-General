let string1 = "They walked down ",
  string2 = "the river ",
  string3 = "yesterday";

let string4 = string1 + string2 + string3;

document.getElementById(
  "string1"
).innerHTML = `The value of "string4" is now "${string4}"`;

let string5 = " afternoon at 5pm";

string4 += string5;

document.getElementById(
  "string2"
).innerHTML = `The value of "string4" is now "${string4}"`;
