const employee = {
  firstName: "Mike",
  lastName: "Davidson",
  age: 55,
  career: "Senior Project Manager",
};

const container = document.querySelector(".container");

for (let value in employee) {
  if (employee.hasOwnProperty(value)) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${value} : ${employee[value]}`;
    container.appendChild(paragraph);
  }
}
