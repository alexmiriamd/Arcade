
const onePlayerButton = document.getElementById("onePlayer");
const twoPlayerButton = document.getElementById("twoPlayer");
let playerOneName = document.getElementById("playerX");
let playerTwoName = document.getElementById("playerO");

let choosePlayers = document.getElementById("pushPlayers"); //tells players to start game by selecting player amount first
let displayWinner = document.getElementById("winner"); //tells players who won the game

const resetButton = document.getElementById("resetButton");

let board = document.getElementById("board");


const gameState = {                             //setting game state object; to keep track of moves, player turns, and wins/ties.
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    state: ["gameActive", "gameOver"]
}

let currentPlayer = gameState.players[0];       //tic-tac-toe rules: player x always first; [1] would be 'o'.

let currentState = gameState.state[1];          // cant start making board until player number chosen




//Player amount buttons

onePlayerButton.addEventListener('click', function(){
    let playerName = prompt('Player one name?', ['player one']);
    playerOneName.innerText = playerName;
    choosePlayers.style.display = "none";
    currentState = gameState.state[0];
    playerTwoName.innerText = "computer";        ///if playerTwo name is computer run computer player
})

twoPlayerButton.addEventListener('click', function(){
    let playerName01 = prompt("Player one name?", ['player one']);
    playerOneName.innerText = playerName01;
    let playerName02 = prompt("Player two name?", ['player two']);
    playerTwoName.innerText = playerName02;
    choosePlayers.style.display = "none";
    currentState = gameState.state[0];
})


function computerPlayer(){                          //computer playing as 'o', only slight strategy choosing the most desired spots first
        console.log('are we running this func?')

        if(document.getElementById("cell5").innerText === ''){
            document.getElementById("cell5").innerText = 'o';
            updateGameBoard(document.getElementById("cell5"))
        } else
        if(document.getElementById("cell1").innerText === ''){
            document.getElementById("cell1").innerText = 'o';
            updateGameBoard(document.getElementById("cell1"));
        } else
        if(document.getElementById("cell9").innerText === ''){
            document.getElementById("cell9").innerText = 'o';
            updateGameBoard(document.getElementById("cell9"));
        } else
        if(document.getElementById("cell7").innerText === ''){
            document.getElementById("cell7").innerText = 'o';
            updateGameBoard(document.getElementById("cell7"));
        } else
        if(document.getElementById("cell3").innerText === ''){
            document.getElementById("cell3").innerText = 'o';
            updateGameBoard(document.getElementById("cell3"));
        } else
        if(document.getElementById("cell2").innerText === ''){
            document.getElementById("cell2").innerText = 'o';
            updateGameBoard(document.getElementById("cell2"));
        } else
        if(document.getElementById("cell6").innerText === ''){
            document.getElementById("cell6").innerText = 'o';
            updateGameBoard(document.getElementById("cell6"));
        } else
        if(document.getElementById("cell4").innerText === ''){
            document.getElementById("cell4").innerText = 'o';
            updateGameBoard(document.getElementById("cell4"));
        } else
        if(document.getElementById("cell8").innerText === ''){
            document.getElementById("cell8").innerText = 'o';
            updateGameBoard(document.getElementById("cell8"));
        }
}



//playing the game:

board.addEventListener('click', placeMark)
    function placeMark(event){  
        if(currentState === gameState.state[0]){                      
            if(event.target){
                const target = event.target;
                if(currentPlayer === 'x' && target.innerText === ''){
                    target.innerText = 'x';
                    updateGameBoard(target);
                    turnChange();
                } else 
                if(target.innerText === ''){
                    target.innerText = 'o';
                    updateGameBoard(target);
                    turnChange();
                }
            }
        }
    }

function turnChange(){
    if(currentPlayer === 'x' && currentState === gameState.state[0]){

        currentPlayer = gameState.players[1];
        if(playerTwoName.innerText === "computer"){
            computerPlayer();
            currentPlayer = gameState.players[0];
        }
    } else {
        currentPlayer = gameState.players[0];
    }
}

function updateGameBoard(target){                //reflecting the turns to the gameBoard array
    if(target.id === "cell1"){
        gameState.board[0][0] = currentPlayer;
    } else if(target.id === "cell2"){              
        gameState.board[0][1] = currentPlayer;
    } else if(target.id === "cell3"){
        gameState.board[0][2] = currentPlayer;
    } else if(target.id === "cell4"){
        gameState.board[1][0] = currentPlayer;
    } else if(target.id === "cell5"){
        gameState.board[1][1] = currentPlayer;
    } else if(target.id === "cell6"){
        gameState.board[1][2] = currentPlayer;
    } else if(target.id === "cell7"){
        gameState.board[2][0] = currentPlayer;
    } else if(target.id === "cell8"){
        gameState.board[2][1] = currentPlayer;
    } else if(target.id === "cell9"){
        gameState.board[2][2] = currentPlayer;
    }
    checkForWin();
}

function announceWinner(){
    // alert(`Yay!! ${currentPlayer} wins! Restart game?`);
    displayWinner.style.display = "block";
    displayWinner.innerText = `---Yay! ${currentPlayer} wins! Restart game?---`;
    currentState = gameState.state[1];
}

function checkForWin(){                     //checking for all wins, (invoked in updateGameBoard function)
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
    } else {
        checkForTie();
    }
    
}

function checkForTie(){                 //checking for tie if no win is logged
    if(gameState.board[0].includes(null) || gameState.board[1].includes(null) || gameState.board[2].includes(null)){
        console.log("game continues")
    } else {
        displayWinner.style.display = "block";
        displayWinner.innerText = `Oh no! It's a tie! restart game?`;
    }
}


//resetting the game

resetButton.addEventListener('click', restartGame)

function restartGame(){                 //putting game back to original gameState
    gameState.board = [                 
        [null, null, null],
        [null, null, null],             
        [null, null, null]
    ];

    document.getElementById("cell1").innerText = "";
    document.getElementById("cell2").innerText = "";
    document.getElementById("cell3").innerText = "";
    document.getElementById("cell4").innerText = "";
    document.getElementById("cell5").innerText = "";
    document.getElementById("cell6").innerText = "";
    document.getElementById("cell7").innerText = "";
    document.getElementById("cell8").innerText = "";
    document.getElementById("cell9").innerText = "";

    currentPlayer = gameState.players[0];
    currentState = gameState.state[1];

    playerOneName.innerText = '';
    playerTwoName.innerText = '';

    choosePlayers.style.display = "block";
    displayWinner.style.display = "none";
}
