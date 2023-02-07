

// variables
        //buttons and names
const onePlayerButton = document.getElementById("onePlayer");
const twoPlayerButton = document.getElementById("twoPlayer");
let playerOneName = document.getElementById('playerX');
let playerTwoName = document.getElementById("playerO")

        //game play
let board = document.getElementById("board");
let cell = document.getElementsByClassName("cells");

const gameState = {           //setting game state object; to keep track of moves, player turns, and wins/ties.
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

let currentPlayer = gameState.players[0];       //this makes default current player 'x'; [1] would be 'o'


// player amount buttons

onePlayerButton.addEventListener('click', function(){
    let playerName = prompt('Player one name?', ['player one']);
    playerOneName.innerText = playerName;
    playerTwoName.innerText = "computer"
})

twoPlayerButton.addEventListener('click', function(){
    let playerName01 = prompt("Player one name?", ['player one']);
    playerOneName.innerText = playerName01;
    let playerName02 = prompt("Player two name?", ['player two']);
    playerTwoName.innerText = playerName02;
})

//playing the game.

board.addEventListener('click', placeMark)          // rn, this is reliant on currentPlayer; which should be switching after each turn. not yet
    function placeMark(event){                          // this also needs to reflect the mark in the gameState array...
        if(event.target){
            const target = event.target;
            if(currentPlayer === 'x'){
                target.innerText = 'x';
                turnChange();
            }
            if(currentPlayer ==='o'){
                target.innerText = 'o';
                turnChange();
            }
        }
    }

function turnChange(){
    if(currentPlayer === 'x'){
        currentPlayer = gameState.players[1];
        
    }
    if(currentPlayer === 'o'){
        currentPlayer = gameState.players[0];
    }
    console.log(currentPlayer);
}