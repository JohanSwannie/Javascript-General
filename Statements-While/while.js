let i = 100;

let endResult = 1;

while (i > 0) {
  endResult *= 2;
  i -= 15;
}

document.getElementById(
  "while"
).innerHTML = `The end result with the value of i at ${i} is ${endResult}`;
