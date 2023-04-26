let name1 = null;

let name2 = "Mike Goddard";

document.getElementById("nullish").innerHTML = `The name of the client is ${
  name1 ?? name2
}`;
