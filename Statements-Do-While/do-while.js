let array = ["t", "h", "e", " ", "b", "e", "s", "t", " ", "o", "n", "e"];
let i = 0;
let endResult = "";

do {
  endResult += array[i];
  i++;
} while (i < 12);

document.getElementById(
  "dowhile"
).innerHTML = `do while - end result = ${endResult}`;
