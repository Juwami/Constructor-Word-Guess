const Word = require('./Word')
const inquirer = require('inquirer')

const wordbank = ['dog','cat','fish','bird'];

function startGame() {
    const randomIndex = Math.floor(Math.random() * wordbank.length);
    const selectedWord = new Word();
    selectedWord.populateLetters(wordbank[randomIndex]);
    showPuzzle(selectedWord)
    askLetter(selectedWord)

}

function askLetter() {
    const guess = prompt('Guess a letter')
    selectedWord.guessLetter(guess);
    showPuzzle(selectedWord);
    // if they won, say you win, and run startGame()
    // if haven't solved, run askLetter();
    // can add askCount
}

function showPuzzle(word) {
    console.log(word.getPuzzle())
}

startGame();