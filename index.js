
// //setting game state

// const gameState = {
//     players: ['x', 'o'],
//     board: [
//         [null, null, null],
//         [null, null, null],
//         [null, null, null]
//     ]
// }

// let currentPlayer = gameState.players[0]; //this makes default current player 'x'


// variables
const onePlayerButton = document.getElementById("onePlayer");
const twoPlayerButton = document.getElementById("twoPlayer");
let playerOneName = document.getElementById('playerX');
let playerTwoName = document.getElementById("playerO")


let board = document.getElementById("board");
let cell = document.getElementsByClassName("cells");

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
