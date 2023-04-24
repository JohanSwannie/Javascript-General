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
    }
  } catch (error) {
    errorMsg.innerHTML = `${error}`;
    input.value = "";
  }
};
