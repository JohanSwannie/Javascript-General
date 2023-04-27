const object = {
  firstName: "Mike",
  lastName: "Morrisen",
  age: 42,
  jobDescription: "Senior Project Manager",
};

myObject = JSON.stringify(object);

localStorage.setItem("storedObject", myObject);

let retrievedObject = localStorage.getItem("storedObject");

let objectToUse = JSON.parse(retrievedObject);

document.getElementById(
  "json1"
).innerHTML = `First Name is ${objectToUse.firstName}`;

document.getElementById(
  "json2"
).innerHTML = `Last Name is ${objectToUse.lastName}`;

document.getElementById("json3").innerHTML = `Age is ${objectToUse.age}`;

document.getElementById(
  "json4"
).innerHTML = `Job description is ${objectToUse.jobDescription}`;
