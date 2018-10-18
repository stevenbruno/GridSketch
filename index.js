let container = document.querySelector('#grid_container');

// modify #grid_container grid style so that 16, 2.2 becomes numRows, 35.2/2.2vw
function createGrid(numRows) {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numRows; j++) {
            let box = document.createElement('div');
            box.classList.toggle('grid_item')
            container.appendChild(box);
        }
    }
}


// create a variable color and reassign its value when one of the buttons is selected, 
// consider scope, set initial color to black?
function colorSelect() {
    //
}


// add event listener to color buttons so that when one is clicked colorSelect() is executed
let color_buttons = document.querySelectorAll(".colorButtons")


let grid_items = document.querySelectorAll(".grid_item");
// add event listeners (mousedown?) to grid items and change their class
// to the selected color


function resetBoard() {
    //execute when the reset board button is clicked
    //set color of all grid_item elements to starting color
}


createGrid(16);