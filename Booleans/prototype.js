Boolean.prototype.determineValue = function () {
  if (this.valueOf() == true) {
    return 100;
  } else {
    return -100;
  }
};

let x = true;

document.getElementById(
  "prototype"
).innerHTML = `The Value is ${x.determineValue()}`;
