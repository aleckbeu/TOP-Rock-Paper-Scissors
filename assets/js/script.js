let startButton = document.getElementById('startButton');
let computerScore = document.getElementById('computerScore')
let playerScore = document.getElementById('playerScore')
let numberOfTotalRounds = document.getElementById('numberOfRounds')
let charmander = document.getElementById('charmander')
let squirtle = document.getElementById('squirtle')
let bulbasaur = document.getElementById('bulbasaur')
let board = document.getElementById('board')
let message = document.getElementById('message')




let playerSelection;
let computerSelection;

let playerScoreTotal = 0;
let computerScoreTotal = 0;

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
        if (board.classList.contains('hidden')) {
            board.classList.remove('hidden');
        }

        startGame();

    }
});



function startGame() {
    message.innerText = MESSAGES[0];
    numberOfTotalRounds.innerText = 0;
    startButton.nextElementSibling.classList.add('undisplay');

    startButton.nextElementSibling.nextElementSibling.classList.remove('hidden');


    gameIsStarted = true;
}

function playRound(playerSelection) {
    roundIsBeingPlayed = true;
    numberOfTotalRounds.innerText = totalRounds;
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
    element.classList.add('playerSelection');
    message.innerText = "You´ve chosen " + playerSelection;
    setTimeout(playComputer, 1000, playerSelection);
}

function playComputer(playerSelection) {

    const listOfPokemons = ['charmander', 'squirtle', 'bulbasaur'];

    let randomPokemon = Math.floor(Math.random() * listOfPokemons.length);
    let computerSelection = parseInt(randomPokemon);

    computerSelection = listOfPokemons[computerSelection];

    console.log('Computer selection: ' +
        computerSelection);

    let element = document.getElementById(computerSelection);
    element.classList.add('computerSelection');

    message.innerText = "The computer has chosen " + computerSelection;


    setTimeout(checkBattle, 1000, computerSelection, playerSelection);
}



function checkBattle(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.innerText = "Draw!";
        console.log('Draw!');
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
            setTimeout(chooseWinner, 1000, computerScoreTotal, playerScoreTotal, computerSelection);
        } else {

            setTimeout(resetChooses, 1000, computerSelection, playerSelection);
        }

    }

}


function chooseWinner(computerScoreTotal, playerScoreTotal, computerSelection) {

    if (computerScoreTotal === playerScoreTotal) {
        message.innerText = "There is no winner! Click on the Start button to play again.";
    } else if (computerScoreTotal > playerScoreTotal) {
        message.innerText = "The computer has won and you´ve lost. Click on the Start button to play again.";
    } else {
        message.innerText = "You have won the computer! Click on the Start button to play again.";
    }

    document.getElementById(playerSelection).classList.remove('playerSelection');
    document.getElementById(computerSelection).classList.remove('computerSelection');



    playerSelection = '';
    computerSelection = '';

    totalRounds = 1;
    numberOfTotalRounds.innerText = 0;
    computerScore.innerText = 0;
    playerScore.innerText = 0;

    roundIsBeingPlayed = false;
    gameIsStarted = false;


}



function resetChooses(computerSelection, playerSelection) {
    message.innerText = MESSAGES[totalRounds - 1];
    numberOfTotalRounds.innerText = totalRounds;


    let foo = document.getElementById(playerSelection);
    foo.classList.remove('playerSelection');

    let bar = document.getElementById(computerSelection);
    bar.classList.remove('computerSelection');

    console.log('RESET computerSelection & playerSelection & roundIsBeingPlayed');

    playerSelection = '';
    computerSelection = '';
    roundIsBeingPlayed = false;

}