const sportsRatings = {
  tennis: 7,
  rugby: 7.75,
  golf: 8.25,
  cricket: 6.5,
  swimming: 7.5,
};

document.getElementById(
  "chaining1"
).innerHTML = `The rating for Golf is ${sportsRatings?.golf}`;

document.getElementById(
  "chaining2"
).innerHTML = `The rating for Basketball is ${sportsRatings?.basketball}`;
