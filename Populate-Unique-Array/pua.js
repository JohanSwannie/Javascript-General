let detail1 = document.getElementById("detail1");
let detail2 = document.getElementById("detail2");
let detail3 = document.getElementById("detail3");
let inner = document.getElementById("inner");
let error = document.getElementById("error");
let error2 = document.getElementById("error2");

let array1 = [1, 2, 3, 4, 5];
let array2 = [];
let array3 = [];

detail1.innerHTML = array1;

function errorInput(inputValue) {
  inner.value = "";
  error.innerHTML = `${inputValue} already exists`;
  error.style.display = "block";
  setTimeout(() => {
    error.innerHTML = "";
    error.style.display = "none";
  }, 3000);
}

function takeIt() {
  let inputValue = parseInt(inner.value);
  if (!isNaN(inputValue)) {
    if (inputValue > 100 || inputValue < -100) {
      error2.style.display = "block";
      error2.innerHTML = `Maximum value = 100 & Minimum value = -100`;
      inner.value = "";
      setTimeout(() => {
        error2.innerHTML = "";
        error2.style.display = "none";
      }, 3000);
    } else {
      let IDX = array1.indexOf(inputValue);
      if (IDX === -1) {
        if (array1.length === 20) {
          let IDX2 = array2.indexOf(inputValue);
          if (IDX2 === -1) {
            if (array2.length === 20) {
              let IDX3 = array3.indexOf(inputValue);
              if (array3.length === 20) {
                error3.style.display = "block";
                error3.innerHTML = `All Arrays now completed`;
                inner.value = "";
                inner.hidden = true;
              } else {
                if (IDX3 === -1) {
                  array3.push(inputValue);
                  detail3.innerHTML = array3;
                  detail3.style.display = "block";
                } else {
                  errorInput(inputValue);
                }
              }
            } else {
              array2.push(inputValue);
              detail2.innerHTML = array2;
              detail2.style.display = "block";
            }
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
  }
}
