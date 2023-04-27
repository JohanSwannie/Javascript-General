const classRoom = {
  className: "Year 11",
  classTotal: 164,
  averagePoints: 68,
};

delete classRoom.averagePoints;

const container = document.querySelector(".container");

for (value in classRoom) {
  if (classRoom.hasOwnProperty(value)) {
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `${value} : ${classRoom[value]}`;
    container.appendChild(paragraph);
  }
}
