const Word = require('./Word.js')
const inquirer = require('inquirer')

const wordbank = ['Complete', 'Blanket', 'Tower', 'Doorbell', 'Brothers', 'Party', 'Wagon', 'Money', 'Vacation', 'Computer', 'Wheelchair', 'Fingernail', 'Vegetable', 'Television'];

let remainingGuesses = 15

function startGame() {
    remainingGuesses = 15
    const randomIndex = Math.floor(Math.random() * wordbank.length);
    const selectedWord = new Word();
    selectedWord.populateLetters(wordbank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter(selectedWord);
}

function askLetter(selectedWord) {
    // CHECK WIN CONDITION
    let puzzle = selectedWord.getPuzzle()
    if (puzzle.indexOf('_') === -1) {
        console.log('You have won!')
        inquirer
            .prompt([{
                type: "list",
                name: "endgame",
                message: "Do you want to play again?",
                choices: ["Yes", "No"]
            }])
            .then(function (response) {
                if (response.endgame === "Yes") {
                    startGame();
                } else {
                    return;
                }
            })
    } else {
        if (remainingGuesses > 0) {
            inquirer
                .prompt([{
                    type: "input",
                    message: "What letter do you guess?",
                    name: "guess"
                }])
                .then(function (response) {
                    remainingGuesses--
                    console.log(`You have ${remainingGuesses} guesses left.`)
                    selectedWord.guessLetter(response.guess);
                    showPuzzle(selectedWord);
                    askLetter(selectedWord);
                })
        } else {
            console.log('You have lost!')
            inquirer
                .prompt([{
                    type: "list",
                    name: "endgame",
                    message: "Do you want to play again?",
                    choices: ['Yes', 'No']
                }])
                .then(function (response) {
                    if (response.endgame === 'Yes') {
                        startGame();
                    } else {
                        return;
                    }
                })

        }
    }
}

function showPuzzle(word) {
    console.log(word.getPuzzle())
}


startGame();