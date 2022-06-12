let startButton = document.getElementById('startButton');
let computerScore = document.getElementById('computerScore')
let playerScore = document.getElementById('playerScore')
let numberOfRounds = document.getElementById('numberOfRounds')
let charmander = document.getElementById('charmander')
let squirtle = document.getElementById('squirtle')
let bulbasaur = document.getElementById('bulbasaur')
let board = document.getElementById('board')
let message = document.getElementById('message')

let playerSelection;
let computerSelection;

let playerScoreTotal;
let computerScoreTotal;
let rounds = 0;

startButton.addEventListener('click', function() {
    startGame();
});


console.log(startButton);
console.log(computerScore);
console.log(playerScore);
console.log(numberOfRounds);
console.log(charmander);
console.log(squirtle);
console.log(bulbasaur);
console.log(board);
console.log(message);



function startGame() {
    board.classList.toggle('visually-hidden');
    message.innerText = "Let´s the game begin! Choose your Pókemon, the computer will choose randomly.";


    squirtle.addEventListener('click', function() {
        playerSelection = 'squirtle';
        humanPlay(playerSelection);
    });

    bulbasaur.addEventListener('click', function() {
        playerSelection = 'bulbasaur';
        humanPlay(playerSelection);
    });

    charmander.addEventListener('click', function() {
        playerSelection = 'charmander';
        humanPlay(playerSelection);
    });

}

function computerPlay(playerSelection) {
    const listOfPokemons = ['charmander', 'squirtle', 'bulbasaur'];

    let randomPokemon = Math.floor(Math.random() * listOfPokemons.length);
    let computerSelection = parseInt(randomPokemon);
    computerSelection = listOfPokemons[computerSelection];
    console.log('Computer selection: ' +
        computerSelection);

    let element = document.getElementById(computerSelection);
    element.classList.add('border', 'border-5', 'border-secondary');

    message.innerText = "The computer has chosen " + computerSelection;


    setTimeout(battleCheck, 3000, computerSelection, playerSelection);


}

function humanPlay(playerSelection) {

    console.log('Human Selection: ' + playerSelection);
    let element = document.getElementById(playerSelection);
    element.classList.add('border', 'border-5', 'border-primary');

    message.innerText = "You´ve chosen " + playerSelection;

    playRound(playerSelection);

}

function playRound(playerSelection) {
    rounds++;
    numberOfRounds.innerText = rounds;

    setTimeout(computerPlay, 3000, playerSelection);

}

function battleCheck(computerSelection, playerSelection) {
    if (computerSelection === playerSelection) {
        message.innerText = "Empate";
    }

    if (computerSelection === 'charmander' && playerSelection === 'squirtle') {
        message.innerText = "You´ve win! Water beats Fire!";
        playerScoreTotal++;
        playerScore.innerText++;
    }

    if (computerSelection === 'charmander' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Fire beats Grass!";
        computerScoreTotal++;
        computerScoreTotal.innerText++;
    }
    if (computerSelection === 'squirtle' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Water beats Fire!";
        playerScoreTotal++;
        playerScore.innerText++;
    }

    if (computerSelection === 'squirtle' && playerSelection === 'bulbasaur') {
        message.innerText = "You´ve lost! Grass beats Water!";
        computerScoreTotal++;
        computerScoreTotal.innerText++;
    }
    if (computerSelection === 'bulbasaur' && playerSelection === 'charmander') {
        message.innerText = "You´ve win! Fire beats Grass!";
        playerScoreTotal++;
        playerScore.innerText++;
    }

    if (computerSelection === 'bulbasaur' && playerSelection === 'squirtle') {
        message.innerText = "You´ve lost! Water beats Grass!";
        computerScoreTotal++;
        computerScoreTotal.innerText++;
    }

    setTimeout(resetChooses, 3000, computerSelection, playerSelection);
}

function resetChooses(computerSelection, playerSelection) {
    console.log(computerSelection, playerSelection);
    message.innerText = "Second Round!! Choose your Pokémon!";

    let foo = document.getElementById(playerSelection);
    foo.classList.remove('border', 'border-5', 'border-primary');

    let bar = document.getElementById(computerSelection);
    bar.classList.remove('border', 'border-5', 'border-secondary');

    playerSelection = '';
    computerSelection = '';
}