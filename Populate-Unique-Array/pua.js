let detail1 = document.getElementById("detail1");
let detail2 = document.getElementById("detail2");
let inner = document.getElementById("inner");
let error = document.getElementById("error");

let array1 = [12, 8, 5, 18, 10, 22, 39, 4, 17, 30];
let array2 = [];

detail1.innerHTML = array1;

function errorInput(inputValue) {
  inner.value = "";
  error.innerHTML = `${inputValue} already exists`;
  error.style.display = "block";
  setTimeout(() => {
    error.innerHTML = "";
    error.style.display = "none";
  }, 2000);
}

function takeIt() {
  let inputValue = parseInt(inner.value);
  let IDX = array1.indexOf(inputValue);
  if (IDX === -1) {
    if (detail1.offsetWidth > 350) {
      let IDX2 = array2.indexOf(inputValue);
      if (IDX2 === -1) {
        array2.push(inputValue);
        detail2.innerHTML = array2;
        detail2.style.display = "block";
      } else {
        errorInput(inputValue);
      }
    } else {
      array1.push(inputValue);
      detail1.innerHTML = array1;
    }
    inner.value = "";
  } else {
    errorInput(inputValue);
  }
}
