// you can write js here
console.log('exo-3');



const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
        return userInput;
    } else {
        console.log('error!');
    }
};


// meme chose qu'au dessus

/* function getUserChoice (userInput) {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('error!');
    }
} */


function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors'
            break;
    }
}

// fonction qui prend deux parametre  , Cette fonction va comparer les deux choix joués et ensuite returnsi le joueur humain a gagné, perdu ou égalité.
const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) { // si le choix de user et le meme que le choix du computer sa retourne 'le jeux et une égalité'
        return 'The game is a tie'
    }

    // conditions : si le choix user est pierre et si le choix pc et papier sa retourne 'the computer won' sinon cela veux dire que  le pc fait ciseaux donc return 'you won'
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'The computer won!';
        } else {
            return 'You won!';
        }
    }

    // si le choix user est papier et si le choix pc et ciseaux sa retourne 'the computer won' sinon cela veux dire que le pc fait pierre donc return 'you won'
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'The computer Won!';
        } else {
            return 'You won!';
        }
    }

    // si le choix user est ciseaux et si le choix pc et pierre sa retourne 'the computer won' sinon cela veux dire que le pc fait papiers donc return 'you won'
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'The computer won!'
        } else {
            return 'You won!';
        }
    }

    if (userChoice === 'bomb') {
        return 'You won!';
    }
}

// Pour tester ma fonction
/*
console.log(determineWinner('paper', 'scissors')); // prints something like 'The computer won!'
console.log(determineWinner('paper', 'paper')); // prints something like 'The game is a tie!'
console.log(determineWinner('paper', 'rock')); // prints something like 'The user won!'
*/


const playGame = () => {
    const playerInput = prompt("Your choice ( rock, paper, scissors, bomb) ?")
    const userChoice = getUserChoice(playerInput);
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw:' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
};
playGame();