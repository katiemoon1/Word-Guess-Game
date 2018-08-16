// Starting the game with wins of 0
var score = 0;
// Starting the game with losses of 0
var losing = 0;
// Starting the game with 10 guesses
var guessesRemaining = 10;
// Displaying the letters already guessed
var letterGuesses = 0;

// Alphabet array
var a = ["abcdefghijklmnopqrstuvwxyz"]

// Array of dog types to be guessed in the game
var dogTypes = ["Boston Terrier", "Pit Bull", "Heeler", "Husky", "German Shepard"];

// Var to pick a word from the array
var dogTypes = dogTypes[Math.floor(Math.random() * words.length)];

// Creating empty array to match the length of the words in the initial array
var guessArray = [];
for (var i = 0; i < word.length; i++) {
    guessArray[i] = "_";
}

var remaining = word.length;

// FUNCTIONS
function renderGuesses() {
    if (guessesRemaining <= (letterGuesses - 1)) {
        document.querySelector("#current").innerHTML = guessArray[remaining];
    }

    else {
        document.querySelector("#current").innerHTML = "Bummer! Game over!";
        document.querySelector("#losses").innerHTML = "Losses: " + losing;
    }
}

// Function to update score
function updateScore() {
    document.querySelector("#score").innerhtml = "Wins: " + score;
}

// Main Processes of the game
// Call the functions to start the game
renderGuesses();
updateScore();

// When the player presses a key to start the game, this function will run
document.onkeyup = function(event) {
    // If guessesRemaining is equal to 0, stop the function
    if (guessesRemaining === 0) {
        return;
    }
    // Determine which key is pressed and make it lowercase
    var userInput = event.key.toLowerCase();

    if (userInput === a) {
        
        if (userInput === guessArray[remaining]) {
            document.querySelector("#current");
            guessesRemaining--;
            document.querySelector("#letters");
        }
    }

}