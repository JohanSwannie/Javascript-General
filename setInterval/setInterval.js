const timeClock = () => {
  let seconds = 1;
  let minutes = 0;
  let hours = 0;

  let timerId = setInterval(() => {
    document.getElementById("seconds").innerHTML = seconds;
    function setTime() {
      document.getElementById("seconds").innerHTML = seconds;
      document.getElementById("minutes").innerHTML = minutes;
      document.getElementById("hours").innerHTML = hours;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      setTime();
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
      setTime();
    }

    if (hours === 1) {
      clearInterval(timerId);
      document.getElementById("timeHasEnd").style.display = "grid";
    }
    seconds++;
  }, 1000);
};

timeClock();
