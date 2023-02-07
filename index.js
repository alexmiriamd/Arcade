
//setting game state

const gameState = {
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

// variables
const onePlayerButton = document.getElementById('onePlayer');
const twoPlayerButton = document.getElementById('twoPlayer');

let playerOneName = document.getElementById('playerX');


let board = document.getElementById("board");
let cell = document.getElementsByClassName("cells");
let currentPlayer = gameState.players[0]; //this makes default current player 'x'

// player amount buttons

onePlayerButton.addEventListener('click', function(){
    let playerName = prompt('Player one name?', ['player one']);
    playerOneName.innerText = playerName;
    
})
