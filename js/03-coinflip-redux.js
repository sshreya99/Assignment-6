var coinFlip, i;
for (i = 0; i < 10; i++) {
    coinFlip = Math.round(Math.random());
    console.log(coinFlip == 0 ? 'Heads' : 'Tails');
}
