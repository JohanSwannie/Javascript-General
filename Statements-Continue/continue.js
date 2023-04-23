// * Continue - Example 1

let endResult1 = 1;

for (let i = 0; i < 12; i++) {
  if (i > 4 && i < 7) {
    continue;
  }
  endResult1 *= 2;
}

document.getElementById(
  "continue1"
).innerHTML = `Continue 1 - end result = ${endResult1}`;

// * Continue - Example 2

let i = 50;
let endResult2 = 199;

while (i > 30) {
  if (i < 10) {
    continue;
  }
  endResult2 -= 19;
  i -= 5;
}

document.getElementById(
  "continue2"
).innerHTML = `Continue 2 - end result = ${endResult2}`;
