// Array of dog types to be guessed in the game
var dogTypes = ["Boston Terrier", "Pit Bull", "Heeler", "Husky", "German Shepard"];

// Starting the game with wins of 0
var score = 0;
// Starting the game with 10 guesses
var guessesRemaining = 10;
// Displaying the letters already guessed
var letterGuesses = 0;

// FUNCTIONS

// Function to update score
function updateScore() {
    document.querySelector("#score").innerhtml = "Wins: " + score;
}