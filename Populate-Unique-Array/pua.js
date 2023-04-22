let detail = document.getElementById("detail");
let inner = document.getElementById("inner");
let error = document.getElementById("error");

let array = [12, 8, 5, 18, 10, 22, 39, 4, 17, 30];

detail.innerHTML = array;

function takeIt() {
  let inputValue = parseInt(inner.value);
  let IDX = array.indexOf(inputValue);
  if (IDX === -1) {
    array.push(inputValue);
    detail.innerHTML = array;
    inner.value = "";
    error.style.display = "none";
  } else {
    inner.value = "";
    error.innerHTML = `${inputValue} is already in the array`;
    error.style.display = "block";
    setTimeout(() => {
      error.innerHTML = "";
      error.style.display = "none";
    }, 2000);
  }
}
