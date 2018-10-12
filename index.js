let container = document.querySelector('#grid_container');


function createGrid(numRows) {
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < numRows; j++) {
            let box = document.createElement('div');
            box.classList.toggle('grid_item')
            container.appendChild(box);
        }
    }
}


createGrid(16);