// * Break with For loop

let endResult1 = 5;

for (let i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }
  endResult1 += 5;
}

document.getElementById(
  "break1"
).innerHTML = `Break 1 - end result = ${endResult1}`;

// * Break with While loop

let i = 0;
let endResult2 = 80;

while (i < 10) {
  endResult2 -= 8;
  i++;
  if (i === 5) {
    break;
  }
}

document.getElementById(
  "break2"
).innerHTML = `Break 2 - end result = ${endResult2}`;

// * Break with switch

let dayOfWeek = "";

switch (new Date().getDay()) {
  case 0:
    dayOfWeek = "Sunday";
    break;
  case 1:
    dayOfWeek = "Monday";
    break;
  case 2:
    dayOfWeek = "Tuesday";
    break;
  case 3:
    dayOfWeek = "Wednesday";
    break;
  case 4:
    dayOfWeek = "Thursday";
    break;
  case 5:
    dayOfWeek = "Friday";
    break;
  case 6:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Unknown";
}

document.getElementById("break3").innerHTML = `Break 3 - Today is ${dayOfWeek}`;
