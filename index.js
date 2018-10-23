let container = document.querySelector('#grid_container');


function createGrid(numRows) {
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


const colorButtons = document.querySelector('.colorButtons');
colorButtons.addEventListener('click', colorSelect, false);


let selectedColor = "black";
function colorSelect(e) {
    if (e.target !== e.currentTarget) {
        let compStyles = window.getComputedStyle(e.target);
        selectedColor = compStyles.getPropertyValue('background-color');
    }
    e.stopPropagation();
}

// not yet working
let grid_items = document.querySelectorAll('.grid_item');
for (var i = 0; i < grid_items.length; i++) {
    grid_items[i].addEventListener('mousedown', draw, false);
}


function draw(e) {
    e.target.style.backgroundColor = selectedColor;
}


function resetBoard() {
    //execute when the reset board button is clicked
    //set color of all grid_item elements to starting color
}


createGrid(48);