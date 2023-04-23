let array = [12, 19, 7, 10, 22, 4, 29, 21, 11, 5];

let endResult = 0;

for (let i = 0; i < array.length; i++) {
  endResult += array[i];
}

document.getElementById(
  "forLoop"
).innerHTML = `Values in array add up to ${endResult}`;
