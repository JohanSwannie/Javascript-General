class Rectangle {
  constructor(_width, _height, _color) {
    this.width = _width;
    this.height = _height;
    this.color = _color;
  }
  getRectangleArea() {
    return `The area of the ${this.color} rectangle is ${
      this.width * this.height
    } square meters`;
  }

  set anotherObject(value) {
    let heightRange = [
      10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
    ];
    let colorRange = ["blue", "yellow", "green", "orange", "red", "purple"];
    this.width = value;
    this.height = heightRange[Math.floor(Math.random() * 16)];
    this.color = colorRange[Math.floor(Math.random() * 5)];
  }

  get theAreas() {
    return `The area of the randomly chosen ${this.color} rectangle is now ${
      this.width * this.height
    } square meters`;
  }
}

const rect1 = new Rectangle(5, 3, "skyblue");
const rect2 = new Rectangle(9, 4, "darkgreen");

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect1.getRectangleArea()} </span> </br>`);

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect2.getRectangleArea()} </span> </br>`);

rect1.anotherObject = 30;

document.write(`<span style='font-family: "Trirong", serif; color:
#FFF'>${rect1.theAreas} </span>`);
