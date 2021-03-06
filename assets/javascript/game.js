// Starting the game with wins of 0
var score = 0;
// Starting the game with losses of 0
var losing = 0;
// Starting the game with 10 guesses
const guessesRemaining = 10;
// Displaying the letters already guessed
var letterGuesses = [];
var guessWord = [];
var currentWord;
var totalGuesses = 0;
var gameStart = false;
var gameOver = false;

// Alphabet array
var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Array of dog types to be guessed in the game
var boston = ["boston terrier"];

// Function to reset the game.
function resetGame() {
    totalGuesses = guessesRemaining;
    gameStart = false;

    currentWord = Math.floor(Math.random() * boston.length);

    guessWord = [];
    letterGuesses = [];

    for (var i = 0; i < boston[currentWord].length; i++) {
        guessWord.push("_");
    }

    updateDisplay();
}

// Function to update the page with the parameters needed for the game.
function updateDisplay() {
    document.getElementById("wins").innerHTML = "Wins: " + score;
    document.getElementById("current").innerHTML = "";
    for (var i = 0; i < guessWord.length; i++) {
        document.getElementById("current").innerHTML += guessWord[i];
    }
    document.getElementById("remaining").innerHTML = totalGuesses;
    document.getElementById("letters").innerHTML = letterGuesses;
    if (totalGuesses <= 0) {
        gameOver = true;
    }
}

// How to start the game.
document.onkeydown = function(event) {
    if (gameOver) {
        resetGame();
        gameOver = false;
    }
    else {
        var userInput = event.key.toLowerCase();
    }
}

// Function to start the game and check if the letter is included in the a array
function userInput(a) {
    if (guessesRemaining > 0) {
        gameStart = true

        if (letterGuesses.indexOf(a) === -1 ) {
        letterGuesses.push(a);
        checkGuess(a);
        }
    }

    updateDisplay();
}

// Function used to check if the letter pressed by the user is in the boston array and add it to the blank space on the page
function checkGuess(a) {
    var position = [];

    for (var i = 0; boston[currentWord].length; i++) {
        if (boston[currentWord][i] === a ) {
         position.push(i)
        }
    }

    if (positions.length <= 0) {
        guessesRemaining--;
    }
    else {
        for (var i = 0; i < positions.length; i++) {
            guessWord[position[i]] = a;
        }
    }
}