function Letter(character) {
    this.character = character
    this.isGuessed = false
    this.getCharacter = function () {
        return this.isGuessed ? this.character : '_';
        // -- Another way to do above --
        // if (this.isGuessed) {
        //     return this.character;
        // } 
        // else {
        //     return '_';
        // }
    }
    this.checkGuess = function (guess) {
        if (guess.toLowerCase() === this.character.toLowerCase()) {
            this.isGuessed = true;
        }
        return this.isGuessed;
    }
}

module.exports = Letter;