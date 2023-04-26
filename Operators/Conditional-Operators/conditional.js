let val1 = 14,
  val2 = 20;

document.getElementById(
  "conditional"
).innerHTML = `Using the ternary operator, the biggest value between "val1" and "val2" is ${
  val1 > val2 ? val1 : val2
}`;
