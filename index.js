

// variables
        //buttons and names variables
const onePlayerButton = document.getElementById("onePlayer");
const twoPlayerButton = document.getElementById("twoPlayer");
let playerOneName = document.getElementById('playerX');
let playerTwoName = document.getElementById("playerO")

        //game play variables
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

let currentPlayer = gameState.players[0];       //tic-tac-toe rules player x always first; [1] would be 'o'.


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
                updateGameBoard(target);
            } else {
                target.innerText = 'o';
                updateGameBoard(target);
            }
            turnChange();
        }
    }

function turnChange(){
    if(currentPlayer === 'x'){
        currentPlayer = gameState.players[1];
        
    } else {
        currentPlayer = gameState.players[0];
    }
}

function updateGameBoard(target){                       //reflecting the turns to the gameBoard array
    if(target.id === "cell1"){
        gameState.board[0][0] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell2"){              
        gameState.board[0][1] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell3"){
        gameState.board[0][2] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell4"){
        gameState.board[1][0] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell5"){
        gameState.board[1][1] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell6"){
        gameState.board[1][2] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell7"){
        gameState.board[2][0] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell8"){
        gameState.board[2][1] = currentPlayer;
        checkForWin();
    } else if(target.id === "cell9"){
        gameState.board[2][2] = currentPlayer;
        checkForWin();
    }
    console.log(gameState.board);
}

function announceWinner(){
    alert(`yay!! ${currentPlayer} wins!`);
}

function checkForWin(){                     //checking for all wins, invoked in updateGameBoard function
    //row wins
    if(gameState.board[0][0] === currentPlayer && gameState.board[0][1] === currentPlayer && gameState.board[0][2] === currentPlayer){
        announceWinner();
    } else if(gameState.board[1][0] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[1][2] === currentPlayer){
        announceWinner();
    } else if(gameState.board[2][0] === currentPlayer && gameState.board[2][1] === currentPlayer && gameState.board[2][2] === currentPlayer){
        announceWinner();
    } else 
    //column wins
    if(gameState.board[0][0] === currentPlayer && gameState.board[1][0] === currentPlayer && gameState.board[2][0] === currentPlayer){
        announceWinner();
    } else if(gameState.board[0][1] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[2][1] === currentPlayer){
        announceWinner();
    } else if(gameState.board[0][2] === currentPlayer && gameState.board[1][2] === currentPlayer && gameState.board[2][2] === currentPlayer){
        announceWinner();
    } else 
    //diagonal wins
    if(gameState.board[0][0] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[2][2] === currentPlayer){
        announceWinner();
    } else if(gameState.board[0][2] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[2][0] === currentPlayer){
        announceWinner();
    }
}
