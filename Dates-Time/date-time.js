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
  if (s % 3 === 0) {
    document.getElementById("txt").style.backgroundColor = "rgb(200, 195, 210)";
    document.getElementById("txt").style.color = "#000";
    document.getElementById("txt").style.textShadow = "1px 8px 8px #FFF";
  } else {
    document.getElementById("txt").style.backgroundColor = "rgb(195, 152, 238)";
    document.getElementById("txt").style.color = "#FFF";
    document.getElementById("txt").style.textShadow = "1px 8px 8px #000";
  }
  setTimeout(startTime, 1000);
}

startTime();
