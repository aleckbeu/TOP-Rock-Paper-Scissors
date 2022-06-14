let startButton = document.getElementById('startButton');
let computerScore = document.getElementById('computerScore')
let playerScore = document.getElementById('playerScore')
let numberOftotalRounds = document.getElementById('numberOfRounds')
let charmander = document.getElementById('charmander')
let squirtle = document.getElementById('squirtle')
let bulbasaur = document.getElementById('bulbasaur')
let board = document.getElementById('board')
let message = document.getElementById('message')

let playerSelection;
let computerSelection;

let playerScoreTotal;
let computerScoreTotal;

let totalRounds = 0;
let currentRound = 0;

console.log(computerScore.innerText);
console.log(playerScore.innerText);

const MESSAGES = [
    'Let´s the game begin! Choose your Pókemon, the computer will choose randomly.',
    'Second Round!',
    'Third Round!',
    'Forth Round',
    'Final ROUND!!!'
]

startButton.addEventListener('click', function() {
    startGame();
});

function checkRound(totalRounds, currentRound) {
    if (currentRound === totalRounds) {
        console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);
        return true;

    } else {
        console.log(totalRounds, currentRound);
        return false;

    }
}

function startGame() {
    board.classList.toggle('visually-hidden');
    message.innerText = MESSAGES[0];



    squirtle.addEventListener('click', function() {

        if (checkRound(totalRounds, currentRound) === true) {
            currentRound++;
            console.log('Add +1 to Current Round');
            numberOftotalRounds.innerText = totalRounds;
            console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);

            playerSelection = 'squirtle';
            playHuman(playerSelection);
        } else {
            //from bootstrap
            squirtle.classList.add('pe-none');
        }

    });

    bulbasaur.addEventListener('click', function() {

        if (checkRound(totalRounds, currentRound) === true) {
            currentRound++;
            console.log('Add +1 to Current Round');
            numberOftotalRounds.innerText = totalRounds;
            console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);

            playerSelection = 'bulbasaur';
            playHuman(playerSelection);
        } else {
            bulbasaur.classList.add('pe-none');
        }
    });

    charmander.addEventListener('click', function() {

        if (checkRound(totalRounds, currentRound) === true) {
            currentRound++;
            console.log('Add +1 to Current Round');
            numberOftotalRounds.innerText = totalRounds;
            console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);

            playerSelection = 'charmander';
            playHuman(playerSelection);
        } else {
            charmander.classList.add('pe-none');
        }
    });

}

function playComputer(playerSelection) {

    const listOfPokemons = ['charmander', 'squirtle', 'bulbasaur'];

    let randomPokemon = Math.floor(Math.random() * listOfPokemons.length);
    let computerSelection = parseInt(randomPokemon);
    computerSelection = listOfPokemons[computerSelection];
    console.log('Computer selection: ' +
        computerSelection);

    let element = document.getElementById(computerSelection);
    element.classList.add('border', 'border-5', 'border-secondary');

    message.innerText = "The computer has chosen " + computerSelection;


    setTimeout(checkBattle, 3000, computerSelection, playerSelection);


}

function playHuman(playerSelection) {

    console.log('Human Selection: ' + playerSelection);
    let element = document.getElementById(playerSelection);
    element.classList.add('border', 'border-5', 'border-primary');

    message.innerText = "You´ve chosen " + playerSelection;

    setTimeout(playComputer, 3000, playerSelection);

}

function checkBattle(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.innerText = "Empate";
        console.log('EMPATE');
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');


    }

    if (computerSelection === 'charmander' && playerSelection === 'squirtle') {
        message.innerText = "You´ve win! Water beats Fire!";
        console.log("You´ve win! Water beats Fire!");
        playerScoreTotal = playerScoreTotal + 1;
        playerScore.innerText = playerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');




    }

    if (computerSelection === 'charmander' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Fire beats Grass!";
        console.log("You´ve lost! Fire beats Grass!");
        computerScoreTotal = computerScoreTotal + 1;
        computerScore.innerText = computerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');




    }
    if (computerSelection === 'squirtle' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Water beats Fire!";
        console.log("You´ve win! Water beats Fire!");
        playerScoreTotal = playerScoreTotal + 1;
        playerScore.innerText = playerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');




    }

    if (computerSelection === 'squirtle' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Grass beats Water!";
        console.log("You´ve lost! Grass beats Water!");
        computerScoreTotal = computerScoreTotal + 1;
        computerScore.innerText = computerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');




    }
    if (computerSelection === 'bulbasaur' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Fire beats Grass!";
        console.log("You´ve win! Fire beats Grass!");
        playerScoreTotal = playerScoreTotal + 1;
        playerScore.innerText = playerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');



    }

    if (computerSelection === 'bulbasaur' && playerSelection === 'squirtle') {
        message.innerText = "You´ve lost! Water beats Grass!";
        console.log("You´ve lost! Water beats Grass!");
        computerScoreTotal = computerScoreTotal + 1;
        computerScore.innerText = computerScoreTotal;
        totalRounds = totalRounds + 1;
        console.log('Add +1 to Total Rounds');



    }

    setTimeout(resetChooses, 3000, computerSelection, playerSelection);
}





// TRABAJAR EN HACER MÁXIMO 5 RONDAS

function resetChooses(computerSelection, playerSelection) {
    message.innerText = MESSAGES[totalRounds];

    let foo = document.getElementById(playerSelection);
    foo.classList.remove('border', 'border-5', 'border-primary');

    let bar = document.getElementById(computerSelection);
    bar.classList.remove('border', 'border-5', 'border-secondary');

    playerSelection = '';
    computerSelection = '';
    console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);
    console.log('RESET');
}