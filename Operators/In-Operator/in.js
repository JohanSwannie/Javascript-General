const array1 = ["School", 13, true];

document.getElementById("in1").innerHTML = `Is length in array1 - ${
  length in array1
}`;

document.getElementById("in2").innerHTML = `Is 1 in array1 - ${1 in array1}`;

document.getElementById("in3").innerHTML = `Is random in Math - ${
  "random" in Math
}`;

document.getElementById("in4").innerHTML = `Is NaN in Number - ${
  "NaN" in Number
}`;

document.getElementById("in5").innerHTML = `Is length in String - ${
  "length" in String
}`;
