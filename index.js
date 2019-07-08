const Word = require('./Word.js')
const inquirer = require('inquirer')

const wordbank = ['Complete','Blanket','Tower','Doorbell','Brothers','Party','Wagon','Money','Vacation','Computer','Wheelchair','Fingernail','Vegetable','Television'];

let remainingGuesses = 2

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordbank.length);
    const selectedWord = new Word();
    selectedWord.populateLetters(wordbank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter(selectedWord);
}

function askLetter(selectedWord) {
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
            // console.log(response.guess)
            selectedWord.guessLetter(response.guess);
            showPuzzle(selectedWord);
            askLetter(selectedWord)
        })
    }
    else {
        console.log('You have lost!')
        inquirer
        .prompt([{
            type: "list",
            name: "endgame",
            message: "Do you want to start over?",
            choices: ['Yes','No']
        }])
        .then(function (response) {
            console.log(response)
            // if (response.yes) {
            //     startGame();
            // }
        })
    }
    // if they won, say you win, and run startGame()
    // if haven't solved, run askLetter();
    // can add askCount
}

function showPuzzle(word) {
    console.log(word.getPuzzle())
}

startGame();