const turn = document.getElementById('.turnBox');
const boxes = document.querySelector('#gameContainer'), X_or_O = 0;
const resetButton = document.querySelector('.resetButton');
const modalContainer = document.querySelector('#modalContainer');
const modalX = document.querySelector('.modalX');
const modalO = document.querySelector('.modalO');

/* Eventos */
resetButton.addEventListener('onclick',clear);
boxes.addEventListener('click', initGame);

/* Functions */
function clear() {
    let .innerHTML='';
}

function initGame() {
    for (let i = 0; i < boxes.length; i++) {

        if (this.innerHTML !== "X" && this.innerHTML !== "O") {
            if (X_or_O % 2 === 0) {
                console.log(X_or_O);
                this.innerHTML = "X";
                turn.innerHTML = "Es turno de O";
                getWin();
                X_or_O += 1;
    
            } else {
                console.log(X_or_O);
                this.innerHTML = "O";
                turn.innerHTML = "Es turno de X";
                getWin();
                X_or_O += 1;
            }
        }
        
    }

    clear()
}



function WinBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    modalContainer.classList.remove('visually-hidden');
    if (b1.innerHTML === 'X') {
        modalX.classList.remove('visually-hidden');
    } else {
        modalO.classList.remove('visually-hidden');
    }
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