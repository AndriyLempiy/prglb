const readlineSync = require('readline-sync');

const size = readlineSync.question('Set size of word: ');
game(numberGenerator(size));

function numberGenerator(size) {
    let numbers = [];
    for (let i = 0; i < size; i++) {
        let num = randomInteger(0, 9);
        if (!numbers.includes(num)) {
            numbers.push(num);
        } else {
            i--;
        }
    }
    return numbers.join('');
}

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

function game(word) {
    let Attempt = 0;
    while (true) {
        let number = readlineSync.question('Attempt: ');
        Attempt++
        if (word === number) {
            console.log('Your got right! Attempts: ' + Attempt)
            return 0;
        }
        let cows = 0;
        let bulls = 0;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < word.length; j++) {
                if (word[i] === number[j]) {
                    if (i === j) {
                        bulls++;
                    } else {
                        cows++;
                    }
                }
            }
        }

        console.log(`Bulls: ${bulls}; Cows: ${cows}`)
    }
}



