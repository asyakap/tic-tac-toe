//Business Logic

let player; 
let board;

function Player() {
  this.playerXO = "X";
}

Player.prototype.switchPlayer = function() {
  if (this.playerXO === "X") {
    this.playerXO = "O";
  }
  else {
    this.playerXO = "X";
  }
}

function Board(playerXO) {
  this.row1 = [2, 3, 4];
  this.row2 = [5, 6, 7];
  this.row3 = [8, 9, 10];
  this.currentPlayer = playerXO;
}

Board.prototype.checkWin = function() {
  if (board.row1[0] === board.row1[1] && board.row1[0] === board.row1[2]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
  startGame();
  }
  else if (board.row2[0] === board.row2[1] && board.row2[1] === board.row2[2]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
    startGame();
  }
  else if (board.row3[0] === board.row3[1] && board.row3[1] === board.row3[2]) {
  document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
  startGame();
  }
  else if (board.row1[0] === board.row2[0] && board.row1[0] === board.row3[0]) {
  document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
  startGame();
  }
  else if (board.row1[1] === board.row2[1] && board.row1[1] === board.row3[1]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
    startGame();
  }
  else if (board.row1[2] === board.row2[2] && board.row1[2] === board.row3[2]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
    startGame();
  }
  else if (board.row1[0] === board.row2[1] && board.row1[0] === board.row3[2]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
    startGame();
  }
  else if (board.row1[2] === board.row2[1] && board.row1[2] === board.row3[0]) {
    document.getElementById("displayWinner").innerText = board.currentPlayer.playerXO + " wins!"
    startGame();
  }
}


//User Interface Logic
function startGame() {
  player = new Player();
  board = new Board(player);
}

function handleTopLeftClick() {
  if (player.playerXO === "X") {
    board.row1[0] = "X";
    document.getElementById("top-left").innerText = "X"
  }
  else {
    board.row1[0] = "O";
    document.getElementById("top-left").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

function handleTopMiddleClick() {
  if (player.playerXO === "X") {
    board.row1[1] = "X";
    document.getElementById("top-middle").innerText = "X"
  }
  else {
    board.row1[1] = "O";
    document.getElementById("top-middle").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

function handleTopRightClick() {
  if (player.playerXO === "X") {
    board.row1[2] = "X";
    document.getElementById("top-right").innerText = "X"
  }
  else {
    board.row1[2] = "O";
    document.getElementById("top-right").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

  function handleMiddleLeftClick() {
    if (player.playerXO === "X") {
      board.row2[0] = "X";
      document.getElementById("middle-left").innerText = "X"
    }
    else {
      board.row2[0] = "O";
      document.getElementById("middle-left").innerText = "O"
    }
    board.checkWin();
    player.switchPlayer();
}

function handleMiddleMiddleClick() {
  if (player.playerXO === "X") {
    board.row2[1] = "X";
    document.getElementById("middle-middle").innerText = "X"
  }
  else {
    board.row2[1] = "O";
    document.getElementById("middle-middle").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

function handleMiddleRightClick() {
  if (player.playerXO === "X") {
    board.row2[2] = "X";
    document.getElementById("middle-right").innerText = "X"
  }
  else {
    board.row2[2] = "O";
    document.getElementById("middle-right").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

function handleBottomLeftClick() {
  if (player.playerXO === "X") {
    board.row3[0] = "X";
    document.getElementById("bottom-left").innerText = "X"
  }
  else {
    board.row3[0] = "O";
    document.getElementById("bottom-left").innerText = "O"
  }
  board.checkWin();
  player.switchPlayer();
}

function handleBottomMiddleClick() {
  if (player.playerXO === "X") {
    board.row3[1] = "X";
    document.getElementById("bottom-middle").innerText = "X"
  }
  else {
    board.row3[1] = "O";
    document.getElementById("bottom-middle").innerText = "O";
  }
  board.checkWin();
  player.switchPlayer();
}

  function handleBottomRightClick() {
    if (player.playerXO === "X") {
      board.row3[2] = "X";
      document.getElementById("bottom-right").innerText = "X";
    }
    else {
      board.row3[2] = "O";
      document.getElementById("bottom-right").innerText = "O";
    }
    board.checkWin();
    player.switchPlayer();
  }

function reset() {
  location.reload();
  //this function resets the game
}
  
window.addEventListener("load", function () {
  document.getElementById("submit").addEventListener("click", startGame);
  document.getElementById("top-left").addEventListener("click", handleTopLeftClick);
  document.getElementById("top-middle").addEventListener("click", handleTopMiddleClick);
  document.getElementById("top-right").addEventListener("click", handleTopRightClick);
  document.getElementById("middle-left").addEventListener("click", handleMiddleLeftClick);
  document.getElementById("middle-middle").addEventListener("click", handleMiddleMiddleClick);
  document.getElementById("middle-right").addEventListener("click", handleMiddleRightClick);
  document.getElementById("bottom-left").addEventListener("click", handleBottomLeftClick);
  document.getElementById("bottom-middle").addEventListener("click", handleBottomMiddleClick);
  document.getElementById("bottom-right").addEventListener("click", handleBottomRightClick);
  document.getElementById("reset").addEventListener("click", reset)
  
})