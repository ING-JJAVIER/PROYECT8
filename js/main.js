const turnX = document.querySelector('#xTurnBox');
const turnO = document.querySelector('#oTurnBox');
const boxes = document.querySelector('#gameContainer');
const resetButton = document.querySelector('.resetButton');
const modalX = document.querySelector('.modalX');
const modalO = document.querySelector('.modalO');
const X = document.querySelector('.changeBox1');
const O = document.querySelector('.changeBox2');
const gameBoxes = document.querySelectorAll('.Box');
const boxQuit= document.querySelector('#boxQuit');
const boxNext= document.querySelector('#boxNext');


let X_or_O = 0;
let userChoice = '';


gameBoxes.forEach(box => box.classList.add('disabled'));

/* Eventos */
boxes.addEventListener('click', game);
X.addEventListener('click', () => selecChoice('X'));
O.addEventListener('click', () => selecChoice('O'));
boxQuit.addEventListener('click', quit);
boxNext.addEventListener('click', next);

/* Functions */
function game(e) {
    const game = e.target;
    if (game.classList.contains('disabled')) return;
    if (game.innerHTML !== "X" && game.innerHTML !== "O") {
        if (X_or_O % 2 === 0) {
            game.innerHTML = userChoice;

        } else {
            game.innerHTML = userChoice === 'X' ? 'O' : 'X'; // 
        }
        X_or_O += 1;
        game.classList.add('disabled');
        getWin();
    }
}

function selecChoice(choice) {
    userChoice = choice;
    if (choice === 'X') {
        turnX.classList.remove('visually-hidden');
        turnO.classList.add('visually-hidden');
    } else {
        turnO.classList.remove('visually-hidden');
        turnX.classList.add('visually-hidden');
    }
    enableGameBoxes();
    
}

function enableGameBoxes() {
    gameBoxes.forEach(box => box.classList.remove('disabled'));
}


function WinBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    modalContainer.classList.remove('visually-hidden');
    if (b1.innerHTML === "X") {
        modalX.classList.remove('visually-hidden');
    } else {
        modalO.classList.remove('visually-hidden');
    }
}

function resetGame() {
    X_or_O = 0;
    userChoice = '';
    gameBoxes.forEach(box => {
        box.innerHTML = '';
        box.classList.remove('disabled');
    });
    turnX.classList.add('visually-hidden');
    turnO.classList.add('visually-hidden');
    gameBoxes.forEach(box => box.classList.add('disabled')); 
}

function quit() {
    
}

function next() {
    modalContainer.classList.add('visually-hidden')
}

function getWin() {
    let box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        WinBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        WinBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        WinBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        WinBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        WinBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        WinBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        WinBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        WinBoxes(box3, box5, box7);
}
