let array = [];

const displayArray = document.getElementById("array");

let count = 1;

const addToArray = (inputValue) => {
  array.push(inputValue);
  displayArray.innerHTML = array;
};

const checkInput = () => {
  const errorMsg = document.getElementById("errorMsg");
  const input = document.getElementById("input");
  errorMsg.innerHTML = "";
  let inputValue = input.value;
  try {
    if (inputValue === "") {
      throw `Input Value should not be empty`;
    } else if (isNaN(inputValue)) {
      throw `Input value should be a number`;
    } else if (inputValue < 1) {
      throw `Number is too small`;
    } else if (inputValue > 30) {
      throw `Number is too big`;
    } else if (count < 11) {
      displayArray.style.display = "block";
      addToArray(inputValue);
      count++;
      throw `Number Accepted - Thanks`;
    } else {
      input.hidden = true;
      throw `Input now CLOSED`;
    }
  } catch (error) {
    errorMsg.innerHTML = `${error}`;
    input.value = "";
  }
};
