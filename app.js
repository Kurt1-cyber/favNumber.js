const theFavNumber = 14;
let guess;

while (true) {
  guess = parseInt(prompt("Guess my favorite number:"));

  if (guess === theFavNumber) {
    console.log("Correct! You guessed my favorite number.");
    break;
  } else if (guess > theFavNumber) {
    console.log("Too high, try again.");
  } else {
    console.log("Too low, try again.");
  }
}
