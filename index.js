

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

board.addEventListener('click', placeMark)
function placeMark(event){
        if(event.target){
            const target = event.target;
            if(currentPlayer === 'x'){
                target.innerText = 'x';
            }
            if(currentPlayer ==='o'){
                target.innerText = 'o';
            }
        }
    }