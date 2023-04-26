// * Get today's full date

let todaysDate = new Date();

document.getElementById("dates1").innerHTML = `Todays date is ${todaysDate}`;

// * Get a specific date

let specificDate = new Date("2019-04-17");

document.getElementById(
  "dates2"
).innerHTML = `Specific date is ${specificDate}`;

// * Get the date in milliseconds

let dateInMilliseconds = new Date(1000000000000);

document.getElementById(
  "dates3"
).innerHTML = `Date in Milliseconds is ${dateInMilliseconds}`;

// * Get the date with parameters - year - month - day - hours - minutes - seconds - milliseconds

let dateWithParameters = new Date(2022, 09, 08, 06, 30, 17, 1);

document.getElementById(
  "dates4"
).innerHTML = `Date with parameters is ${dateWithParameters}`;

// * Get specific parameters of a date

let todaysDate2 = new Date();

let monthOfYear = todaysDate.getMonth();

let monthDescription = "";

switch (monthOfYear) {
  case 0:
    monthDescription = "January";
    break;
  case 1:
    monthDescription = "February";
    break;
  case 2:
    monthDescription = "March";
    break;
  case 3:
    monthDescription = "April";
    break;
  case 4:
    monthDescription = "May";
    break;
  case 5:
    monthDescription = "June";
    break;
  case 6:
    monthDescription = "July";
    break;
  case 7:
    monthDescription = "August";
    break;
  case 8:
    monthDescription = "September";
    break;
  case 9:
    monthDescription = "October";
    break;
  case 10:
    monthDescription = "November";
    break;
  case 11:
    monthDescription = "Decemeber";
    break;
  default:
    monthDescription = "Unknown";
}

let dayOfMonth = todaysDate.getDate();

document.getElementById(
  "dates5"
).innerHTML = `Todays is day number ${dayOfMonth} of ${monthDescription}`;

let hours = todaysDate.getHours();
let minutes = todaysDate.getMinutes();
let seconds = todaysDate.getSeconds();

const correctTime = (tp) => {
  if (tp < 10) {
    tp = "0" + tp;
  }
  return tp;
};

hours = correctTime(hours);
minutes = correctTime(minutes);
seconds = correctTime(seconds);

document.getElementById(
  "dates6"
).innerHTML = `The time is now ${hours}:${minutes}:${seconds}`;

let timeInMilliseconds = todaysDate.getTime();

document.getElementById(
  "dates7"
).innerHTML = `Time in milliseconds since January 1, 1970 is ${timeInMilliseconds}`;

let timeDifference = todaysDate.getTimezoneOffset();

document.getElementById(
  "dates8"
).innerHTML = `Time difference between UTC time and Local time is ${timeDifference}`;

// * Calculate the number of years since 1 January 1970

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

let years = Math.round(Date.now() / year);

document.getElementById("dates9").innerHTML = `The number of years is ${years}`;
