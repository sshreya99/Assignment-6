var coinFlip = Math.floor(Math.random() * 10);
var choice = window.prompt("(H) for Heads or (T) for Tails?").toUpperCase();
var result = coinFlip > 4 ? 'H' : 'T';

if (choice === result) {
    window.alert("The flip was " + result + " and you chose " + choice + "...you win!");
} else {
    window.alert("The flip was " + result + " but you chose " + choice + "...you lose!");
}
