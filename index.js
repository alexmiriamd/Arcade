

// variables
        //buttons and names
const onePlayerButton = document.getElementById("onePlayer");
const twoPlayerButton = document.getElementById("twoPlayer");
let playerOneName = document.getElementById("playerX");
let playerTwoName = document.getElementById("playerO");

const resetButton = document.getElementById("resetButton");


        //game play variables

let board = document.getElementById("board");


const gameState = {                             //setting game state object; to keep track of moves, player turns, and wins/ties.
    players: ['x', 'o'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

let currentPlayer = gameState.players[0];       //tic-tac-toe rules: player x always first; [1] would be 'o'.



//Player amount buttons

onePlayerButton.addEventListener('click', function(){
    let playerName = prompt('Player one name?', ['player one']);
    playerOneName.innerText = playerName;
    playerTwoName.innerText = "computer"        ///if playerTwo name is computer run computer player
})

twoPlayerButton.addEventListener('click', function(){
    let playerName01 = prompt("Player one name?", ['player one']);
    playerOneName.innerText = playerName01;
    let playerName02 = prompt("Player two name?", ['player two']);
    playerTwoName.innerText = playerName02;
})


function computerPlayer(){                          //invoked in the turnChange function
    if(playerTwoName.innerText === "computer"){
        console.log('are we running this func?')
        let target = randomCellFunc();

        if(target === document.getElementById("cell1").id && document.getElementById("cell1").innerText === ''){
            document.getElementById("cell1").innerText = 'o';
        } else
        if(target === document.getElementById("cell2").id && document.getElementById("cell2").innerText === ''){
            document.getElementById("cell2").innerText = 'o';
        } else
        if(target === document.getElementById("cell3").id && document.getElementById("cell3").innerText === ''){
            document.getElementById("cell3").innerText = 'o';
        } else
        if(target === document.getElementById("cell4").id && document.getElementById("cell4").innerText === ''){
            document.getElementById("cell4").innerText = 'o';
        } else
        if(target === document.getElementById("cell5").id && document.getElementById("cell5").innerText === ''){
            document.getElementById("cell5").innerText = 'o';
        } else 
        if(target === document.getElementById("cell6").id && document.getElementById("cell6").innerText === ''){
            document.getElementById("cell6").innerText = 'o';
        } else
        if(target === document.getElementById("cell7").id && document.getElementById("cell7").innerText === ''){
            document.getElementById("cell7").innerText = 'o';
        } else
        if(target === document.getElementById("cell8").id && document.getElementById("cell8").innerText === ''){
            document.getElementById("cell8").innerText = 'o';
        } else
        if(target === document.getElementById("cell9").id && document.getElementById("cell9").innerText === ''){
            document.getElementById("cell9").innerText = 'o';
        } else{ 
            computerPlayer();
        }
    }
    turnChange();
}

function randomCellFunc(){                                      //returns random cell number 1-9 for computerPlayer
    let randomNum = Math.floor(Math.random() * 9) +1;
    let randomCell = `cell${randomNum}`
    return randomCell
}



//playing the game.

board.addEventListener('click', placeMark)
    function placeMark(event){                        
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

function turnChange(){
    if(currentPlayer === 'x'){
        currentPlayer = gameState.players[1];
        computerPlayer();
    } else {
        currentPlayer = gameState.players[0];
    }
}

function updateGameBoard(target){                //reflecting the turns to the gameBoard array
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
    } else {
        checkForTie();
    }
    
}

function checkForTie(){                 //checking for tie if no win is logged
    if(gameState.board[0].includes(null) || gameState.board[1].includes(null) || gameState.board[2].includes(null)){
        console.log("game continues")
    } else {
        alert("oh no!! there has been a tie.") //maybe put a confirm box to ask, reset game? instead of alert. still need reset button available overall tho. 
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
    console.log(gameState.board);
}
