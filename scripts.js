let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
var initializeB = document.createElement('button');
initializeB.innerText = 'Click Here to Start'
document.getElementById('game-over-lbl').appendChild(initializeB);
initializeB.addEventListener('click', (initialEvent) => {initialEvent.target.hidden = true;});

// use the value stored in the nextPlayer variable to indicate who the next player is
let playerV = document.querySelector('b');
let playerT = 'Next Player: ';
playerV.innerText = playerT;

//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
    for (let i = 0; i < 9; i++)
    {
        let cellID = 'c' + (i+1);
        var newB = document.createElement('button');
        document.getElementById(cellID).appendChild(newB);
    }
   
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let but = document.querySelectorAll('button');
for (let i=0; i<but.length; i++)
{
    but[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{
    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        event.target.innerText = nextPlayer;
        if (nextPlayer === 'X') {
            nextPlayer = 'O';
        }
        else{
            if (nextPlayer === 'O') {
                nextPlayer = 'X';
            }
        }
    
        let playerT = 'Next Player: ' + nextPlayer;
        playerV.innerText = playerT;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )
    event.target.disabled = 'disabled';

       // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 

    // Check if the game is over
    if (isGameOver()=== true)
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let lbl = document.getElementById('game-over-lbl')
        var headerNew = document.createElement('h1');
        headerNew.innerText = 'Game Over';
        lbl.appendChild(headerNew);
    }
}

function isGameOver()
{
     // This function returns true if all the buttons are disabled and false otherwise 
     let clickedB = true;
     for (let i = 0; i < but.length; i++)
     {
         if (!but[i].disabled)
         {
             clickedB = false;
         }
     }
     return clickedB;
   
}
