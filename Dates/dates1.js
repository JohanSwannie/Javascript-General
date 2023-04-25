function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("txt").innerHTML = h + " : " + m + " : " + s;
  if (s % 7 === 0) {
    document.getElementById("txt").classList.remove("lightTheme");
    document.getElementById("txt").classList.add("darkTheme");
  } else {
    document.getElementById("txt").classList.remove("darkTheme");
    document.getElementById("txt").classList.add("lightTheme");
  }
  setTimeout(startTime, 1000);
}

startTime();
