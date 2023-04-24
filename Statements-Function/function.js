function determineDay(dayOfWeek) {
  let dayName = "";
  switch (dayOfWeek) {
    case 0:
      dayName = "Sunday";
      break;
    case 1:
      dayName = "Monday";
      break;
    case 2:
      dayName = "Tuesday";
      break;
    case 3:
      dayName = "Wednesday";
      break;
    case 4:
      dayName = "Thursday";
      break;
    case 5:
      dayName = "Friday";
      break;
    case 6:
      dayName = "Saturday";
      break;
  }
  return dayName;
}

function greeting(name) {
  let dayOfWeek = new Date().getDay();
  return `Hallo ${name}, Welcome to this lovely ${determineDay(
    dayOfWeek
  )} morning`;
}

const container = document.querySelector(".container");

let array = ["John", "Mike", "Mary", "Tom", "Luke", "Joe", "Carl"];

for (let name of array) {
  const paragraph = document.createElement("p");
  paragraph.innerHTML = `${greeting(name)}`;
  container.appendChild(paragraph);
}
