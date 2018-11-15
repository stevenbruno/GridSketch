function createGrid(numRows) {
    clearGrid();

    let container = document.querySelector('#grid_container');
    let rowWidth = 35.2/numRows;
    container.style.grid = `repeat(${numRows}, ${rowWidth}vw) / repeat(${numRows}, ${rowWidth}vw)`;

    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numRows; j++) {
            let box = document.createElement('div');
            box.classList.toggle('grid_item')
            if (numRows > 30) {
                box.style.border = '2px solid white';
            }
            container.appendChild(box);
        }
    }
}


function clearGrid() {
    let gridCells = document.getElementsByClassName("grid_item");

    while(gridCells[0]) {
        gridCells[0].parentNode.removeChild(gridCells[0]);
    }
}


function colorSelect(e) {
    if (e.target !== e.currentTarget) {
        let compStyles = window.getComputedStyle(e.target);
        selectedColor = compStyles.getPropertyValue('background-color');
    }
    e.stopPropagation();
}


function startDraw(e) {
    e.target.style.backgroundColor = selectedColor;
}


function draw(e) {
    if (mouseDown == 1) {
        e.target.style.backgroundColor = selectedColor;
    }
}


function resetBoard() {
    for (let i = 0; i < grid_items.length; i++) {
        grid_items[i].style.backgroundColor = "lightgrey"; 
    }
}



// begin main script

createGrid(24);


let container = document.querySelector('#grid_container');


const colorButtons = document.querySelector('.colorButtons');
colorButtons.addEventListener('click', colorSelect, false);
let selectedColor = "black";


// record state of left mouse button
let mouseDown = 0;
document.body.onmousedown = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}


let grid_items = document.querySelectorAll('.grid_item');
for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].addEventListener('mousedown', startDraw, false);
    grid_items[i].addEventListener('mouseenter', draw, false);
}


let reset = document.querySelector('#reset');
reset.addEventListener('click', resetBoard, false);


let dimButtons = document.querySelectorAll('.dim');
const dimensions = [3, 4, 9, 12, 24, 48]
for (let i = 0; i < dimButtons.length; i++) {
    dimButtons[i].addEventListener('click', function() {createGrid(dimensions[i]);}, false);
}