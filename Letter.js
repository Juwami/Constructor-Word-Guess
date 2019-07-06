function Letter(character) {
    // Constructor letter
    this.character = character
    // isGuessed default boolean value
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

// Code to export Letter constructor
module.exports = Letter;