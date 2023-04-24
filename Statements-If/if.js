let array = [4, 15, 35, 49, 71];

for (let value of array) {
  if (value % 2 === 0) {
    document.getElementById(
      "iffy1"
    ).innerHTML = `${value} divided by 2 gives a remainder of zero`;
  } else if (value % 3 === 0) {
    document.getElementById(
      "iffy2"
    ).innerHTML = `${value} divided by 3 gives a remainder of zero`;
  } else if (value % 5 === 0) {
    document.getElementById(
      "iffy3"
    ).innerHTML = `${value} divided by 5 gives a remainder of zero`;
  } else if (value % 7 === 0) {
    document.getElementById(
      "iffy4"
    ).innerHTML = `${value} divided by 7 gives a remainder of zero`;
  } else {
    document.getElementById("iffy5").innerHTML = `${value} is the odd one out`;
  }
}
