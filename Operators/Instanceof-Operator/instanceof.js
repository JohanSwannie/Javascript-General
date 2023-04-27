const numbers = [27, 33, 21, 16, 14, 7];

document.getElementById(
  "instanceof1"
).innerHTML = `Is numbers an instance of Array - ${numbers instanceof Array}`;

document.getElementById(
  "instanceof2"
).innerHTML = `Is numbers an instance of Object - ${numbers instanceof Object}`;

document.getElementById(
  "instanceof3"
).innerHTML = `Is numbers an instance of String - ${numbers instanceof String}`;
