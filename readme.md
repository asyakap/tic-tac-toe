# Tic-Tac-Toe

#### By _**Kai Clausen and Asia Kaplanyan**_

#### _This application creates a game of Tic-tac-toe._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This application creates a game of tic-tac-toe for two people. It follows the common rules for tic-tac-toe get three in a row to win._


## Setup/Installation Requirements

* _Clone this repository to your desktop._
* _Navigate to the top directory._
* _Open index.html in your preferred web browser._
* _Interact with the webpage._


## Known Bugs

* _No reset functionality. Need to refresh the page to start a new game._


## License

_MIT - If you run into a problem or in case you have any ideas or concerns please contact me._

Copyright (c) _01/25/2023_ _Asia Kaplanyan and Kai Calusen_

## Tests

### Describe: Player()

Test: "It creates a constructor with a currentPlayer set to X"
Code: player = new Player();
Expected Output: undefined (player.playerXO is set to X)


### Describe: Player.prototype.switchPlayer

Test: "It switches the player to the opposite"
Code: player.switchPlayer();
Expected Output: O

### Describe: Board(playerXO)

Test: "It creates 3 arrays representing 3 rows of a board and fills them with characters 2-10. It also sets current player to playerXO"
Code: board = new Board(player);
Expected Output: undefined

### Describe: Board.prototype.checkWin

Test: "It checks if the winning condition is met"
Code: board.checkWin();
Expected Output: "X wins!" or "O wins!"

### Describe: startGame()

Test: "It creates player and board using constractors"
Code: startGame()
Expected Output: undefined

### Describe: handleTopLeftClick(), handleTopMiddleClick(), handleTopRightClick(), handleMiddleLeftClick(), handleMiddleMiddleClick(), handleMiddleRightClick(), handleBottomLeftClick(), handleBottomMiddleClick(), handleBottomRightClick() 

Test: "It registers user's click, fills the corresponding cell with an X or O, runs the checkWin function and changes the turn"
Code: handleTopLeftClick()
Expected Output: cell is filled with X or O, win condition is checked, turnes is switched


