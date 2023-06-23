function guessingGame() {
    let number = Math.floor((Math.random()) * 100);
    let gameOver = false;
    let guesses = 0;

    return function game(guess){
        if(gameOver) return `The game is over, you already won!`
        guesses++;
        if (guess === number) {
            gameOver = true;
            return `You win! You found ${number} in ${guesses} guesses.`
        } else if (guess < number) {
            return `${guess} is too low!`
        } else {
            return `${guess} is too high!`
        }
    }
}

module.exports = { guessingGame };
