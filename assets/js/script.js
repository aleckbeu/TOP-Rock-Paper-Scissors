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

let playerScoreTotal = 0;
let computerScoreTotal = 0;

// We need totalRounds & currentRound in order to prevent the user to click on
// any other Pókemon while the currentRound is going on.

let currentRound = 1;
let totalRounds = 1;

let gameIsStarted = false;

let roundIsBeingPlayed = false;

const MESSAGES = [
    'Let´s the game begin! Choose your Pókemon, the computer will choose randomly.',
    'Second Round!',
    'Third Round!',
    'Forth Round',
    'Final ROUND!!!'
]

startButton.addEventListener('click', function() {
    if (gameIsStarted === false) {
        board.classList.toggle('visually-hidden');

        startGame();

    }
});



function startGame() {
    message.innerText = MESSAGES[0];
    numberOftotalRounds.innerText = 0;
    gameIsStarted = true;
    console.log(roundIsBeingPlayed);

}

function playRound(playerSelection) {
    roundIsBeingPlayed = true;
    numberOftotalRounds.innerText = totalRounds;
    console.log(roundIsBeingPlayed);
    playHuman(playerSelection);

}

squirtle.addEventListener('click', function() {
    if (roundIsBeingPlayed === false) {
        playerSelection = 'squirtle';
        playRound(playerSelection);
    }
});
bulbasaur.addEventListener('click', function() {
    if (roundIsBeingPlayed === false) {
        playerSelection = 'bulbasaur';
        playRound(playerSelection);

    }
});
charmander.addEventListener('click', function() {
    if (roundIsBeingPlayed === false) {
        playerSelection = 'charmander';
        playRound(playerSelection);

    }
});


function playHuman(playerSelection) {

    console.log('Human Selection: ' + playerSelection);
    let element = document.getElementById(playerSelection);
    element.classList.add('border', 'border-5', 'border-primary');

    message.innerText = "You´ve chosen " + playerSelection;

    setTimeout(playComputer, 3000, playerSelection);

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



function checkBattle(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.innerText = "Empate";
        console.log('EMPATE');
        console.log('Add +1 to Total Rounds');
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    if (computerSelection === 'charmander' && playerSelection === 'squirtle') {
        message.innerText = "You´ve win! Water beats Fire!";
        console.log("You´ve win! Water beats Fire!");
        console.log('Add +1 to Total Rounds');
        playerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    if (computerSelection === 'charmander' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Fire beats Grass!";
        console.log("You´ve lost! Fire beats Grass!");
        console.log('Add +1 to Total Rounds');
        computerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }
    if (computerSelection === 'squirtle' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Water beats Fire!";
        console.log("You´ve win! Water beats Fire!");
        console.log('Add +1 to Total Rounds');
        playerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    if (computerSelection === 'squirtle' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Grass beats Water!";
        console.log("You´ve lost! Grass beats Water!");
        console.log('Add +1 to Total Rounds');
        computerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    if (computerSelection === 'bulbasaur' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Fire beats Grass!";
        console.log("You´ve win! Fire beats Grass!");
        console.log('Add +1 to Total Rounds');
        playerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    if (computerSelection === 'bulbasaur' && playerSelection === 'squirtle') {
        message.innerText = "You´ve win! Grass beats Water!";
        console.log("You´ve win! Grass beats Water!");
        console.log('Add +1 to Total Rounds');
        computerScoreTotal++;
        updateBoard(playerScoreTotal, computerScoreTotal);
    }

    function updateBoard(playerScoreTotal, computerScoreTotal) {
        playerScore.innerHTML = playerScoreTotal;
        computerScore.innerHTML = computerScoreTotal;
        totalRounds = totalRounds + 1;

        if (totalRounds > 5) {
            setTimeout(chooseWinner, 3000, computerScoreTotal, playerScoreTotal);
        } else {

            setTimeout(resetChooses, 3000, computerSelection, playerSelection);
        }

    }

}


function chooseWinner(computerScoreTotal, playerScoreTotal) {
    if (computerScoreTotal === playerScoreTotal) {
        message.innerText = "There is no winner! Click on the Pókeball to play again.";
    } else if (computerScoreTotal > playerScoreTotal) {
        message.innerText = "The computer has won and you´ve lost. Click on the Pókeball to play again.";
    } else {
        message.innerText = "You have won the computer! Click on the Pókeball to play again.";
    }
}




// TRABAJAR EN HACER MÁXIMO 5 RONDAS

function resetChooses(computerSelection, playerSelection) {
    message.innerText = MESSAGES[totalRounds - 1];
    numberOftotalRounds.innerText = totalRounds;


    let foo = document.getElementById(playerSelection);
    foo.classList.remove('border', 'border-5', 'border-primary');

    let bar = document.getElementById(computerSelection);
    bar.classList.remove('border', 'border-5', 'border-secondary');

    console.log('Total Rounds: ' + totalRounds + 'Current Round:' + currentRound);
    console.log('RESET computerSelection & playerSelection');

    playerSelection = '';
    computerSelection = '';
    roundIsBeingPlayed = false;

}