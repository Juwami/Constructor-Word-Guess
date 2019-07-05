// A string value to store the underlying character for the letter
let guessedLetter = []

// A boolean value that stores whether that letter has been guessed yet
let wasLetterAlreadyGuess

// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
function letterReturned(letter) {
    if (wasLetterAlreadyGuessed === 'false') {
        return letter
    }
    else {
        console.log('Letter has already been guessed, try again.')
    }
}
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
function checkLetterGuessed(letter) {

}