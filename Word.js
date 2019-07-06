const Letter = require('./Letter')

function Word (word) {
    this.lettersArr = []
    this.getPuzzle = function () {
        const puzzle = [];
        for (let i = 0; i < this.lettersArr.length; i++) {
            const currentLetter = this.lettersArr[i]
            const character = currentLetter.getCharacter();
            puzzle.push(character);
        }
        return puzzle.join(' ')
    }
    this.guessLetter = function(character) {
        for (let i = 0; i < this.lettersArr.length; i++) {
            const currentLetter = this.lettersArr[i];
            currentLetter.checkGuess(character);
        }
    }
}

module.export = Word;