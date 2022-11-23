// Lesson-Lab Challenge 05.07 - Tic-Tac-Toe - START
// 37 lines of code
// ALGO PT 1: When user clicks New Game button, clear the board
// get the 9 squares
// get the button
// assign an event listener to the button that call the play() function
// define the play() function:
//    clear all 9 squares
const btn = document.querySelector("button");
const squares = document.querySelectorAll(".square");
// get the feedback span
const feedback = document.querySelector('span');

// ALGO PT 2: declare gameplay variables which must be reset with each new game
// a boolean to keep track of whose turn it is: X or O
 //  keep track of total turns (at 9, game over)
; // X goes first, so start with true
let turns = 0, XO = "X";
// ALGO PT 6: Keep track of each clicked square -- just outputting 
// "X" or "O" is not enough
// keep track of chosen squares as an object; each time a square is clicked, 
// an 'X' or 'O' replaces the numeric value
// the play() function resets the numeric values on a loop
const sqs = { s1: 1, s2: 2, s3: 3, s4: 4, s5: 5, s6: 6, s7: 7, s8: 8, s9: 9 };

btn.addEventListener("click", play);

function play() {
    XO = "X"; // reset gameplay variables
    turns = 0;
    feedback.textContent = "X's turn.."; // tell the player who goes first
    for (let i = 0; i < squares.length; i++) {
        squares[i].textContent = ""; // clear the squares one by one
        squares[i].id = i + 1; // assign each square an id num
        squares[i].addEventListener('click', addXO);
        sqs['s'+(i+1)] = i+1; // reset object's key-value pairs
    }
}

// ALGO PT 3: have the 9 squares call a function addXO
// just have function log some simple message to start
// ALGO PT 4: have addXO function put "X" or "O" in the square
function addXO() {
    turns++;
    // if isX is true, put an "X" in the square, else put an "O"
    this.textContent = XO;
    this.removeEventListener('click', addXO); // square cannot be clicked again
    // store the current "X" or "O" in the sqs object
    // ['s' + this.id] is a dynamic key accessor
    sqs['s' + this.id] = XO; // assign "X" or "O" to the correct object property
    XO == "X" ? XO = "O" : XO = "X"; // flip X to O and O to X
    feedback.textContent = XO + "'s turn..";
    if (turns >= 5) checkForWinner(); // if 5+ turns check for a winner
}

function checkForWinner() {
    // there are 8 possible winning combinations:
    // s1, s2, s3 (top row) .      s1, s4, s7 (left col) .      s1, s5, s9 (diag)
    // s2, s5, s8 (mid col) .      s3, s6, s9 (right col) .     s3, s5, s7 (diag)
    // s4, s5, s6 (mid row) .      s7, s8, s9 (bottom row) .
    if ((sqs.s1 == sqs.s2 && sqs.s1 == sqs.s3) || (sqs.s1 == sqs.s4 && sqs.s1 == sqs.s7) ||
        (sqs.s1 == sqs.s5 && sqs.s1 == sqs.s9) || (sqs.s2==sqs.s5 && sqs.s2==sqs.s8) ||
        (sqs.s3==sqs.s6 && sqs.s3==sqs.s9) || (sqs.s3==sqs.s5 && sqs.s3==sqs.s7) ||
        (sqs.s4==sqs.s5 && sqs.s4==sqs.s6) || (sqs.s7==sqs.s8 && sqs.s7==sqs.s9) ) {
            XO == "X" ? XO = "O" : XO = "X";
            feedback.textContent = XO + " Wins!";
            return; // exit the function so that we don't check for tie game
    }
    // if no winner is found check to see if game is over, anyway
    // ALGO PT 8: Check if there's still no winner even after all 9 squares are used
    if(turns == 9) feedback.textContent = "Game Over";
}




