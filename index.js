const Word = require('./Word.js')
const inquirer = require('inquirer')

const wordbank = ['dog', 'cat', 'fish', 'bird'];

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordbank.length);
    const selectedWord = new Word();
    selectedWord.populateLetters(wordbank[randomIndex]);
    showPuzzle(selectedWord);
    askLetter(selectedWord);
}

function askLetter(selectedWord) {
    inquirer
        .prompt([{
            type: "input",
            message: "What letter do you guess?",
            name: "guess"
        }])
        .then(function (response) {
            console.log(response.guess)
            selectedWord.guessLetter(response.guess);
            showPuzzle(selectedWord);
            askLetter(selectedWord)
        })
    // if they won, say you win, and run startGame()
    // if haven't solved, run askLetter();
    // can add askCount
    // });
}

function showPuzzle(word) {
    console.log(word.getPuzzle())
}

startGame();