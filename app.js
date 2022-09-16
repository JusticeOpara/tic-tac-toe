const boxes = Array.from(document.getElementsByClassName("box"));
console.log(boxes, "fdsddd");
const restartBtn = document.getElementById("restart-btn")
const playText = document.getElementById("playText");

const spaces = [null, null, null, null, null, null, null, null, null];

const firstPlayer = "o";
const secondPlayer = "x";
let currentPlayer = firstPlayer && secondPlayer;

const drawBoard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += 'border-bottom:3px solid red;';
        }
        if (index % 3 == 0) {
            styleString += 'border-right:3px solid red;';
        }
        if (index % 3 == 2) {
            styleString += 'border-left:3px solid red;';
        }
        if (index > 5) {
            styleString += 'border-top:3px solid red;';
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    })
}
const boxClicked = (e) => {
    const id = e.target.id;
    console.log(id, "kkjkjk");
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;
        if (playerHasWon()) {
            playText.innerText = 'Current player has won!';
            return;
        }
        currentPlayer = currentPlayer === firstPlayer ? secondPlayer : firstPlayer;
    }
}
playerHasWon = () => {
    if (spaces[0] == currentPlayer) {
        if (spaces[1] == currentPlayer && spaces[2] == currentPlayer) {
            console.log('${currentPlayer} wins up top')
            return true
        }
        if (spaces[3] == currentPlayer && spaces[6] == currentPlayer) {
            console.log('${currentPlayer} wins on left')
            return true
        }
        if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
            console.log('${currentPlayer} wins dialogally')
            return true
        }
    } else if (spaces[8] == currentPlayer) {
        if (spaces[2] == currentPlayer && spaces[5] == currentPlayer) {
            console.log('${currentPlayer} wins right')
            return true
        }
        if (spaces[6] == currentPlayer && spaces[7] == currentPlayer) {
            console.log('${currentPlayer} wins bottom')
            return true
        }
        if (spaces[4] == currentPlayer && spaces[8] == currentPlayer) {
            console.log('${currentPlayer} wins dialogally')
            return true
        }
     } else if (spaces[4] == currentPlayer) {
         if (spaces[1] == currentPlayer && spaces[7] == currentPlayer) {
            console.log('${currentPlayer} win')
            return
        }
     }
}

drawBoard();