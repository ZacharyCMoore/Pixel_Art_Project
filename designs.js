//variable for sizePicker submit
const sizePicker = document.querySelector('#sizePicker')
//variables for size of grid input
const inputHeight = document.querySelector('#inputHeight')
const inputWidth = document.querySelector('#inputWidth')
//variable to use the table in pixelCanvas
const pixelCanvas = document.querySelector('#pixelCanvas')
//variable for color input
const colorPicker = document.querySelector('#colorPicker')

// When size is submitted by the user, call makeGrid()

sizePicker.addEventListener('submit', function(event) {
    event.preventDefault();
    height = inputHeight.valueAsNumber;
    width = inputWidth.valueAsNumber;
    //Clears previous grid if one exists
    pixelCanvas.innerHTML = null
    makeGrid(height, width);
});

function makeGrid(x, y) {
    //Loop to create columns
    for (var j = 1; j <= y; j++) {
        var column = document.createElement('tr')
        pixelCanvas.appendChild(column);
        //loop to create rows
        for (var i = 1; i <= x; i++) {
            var row = document.createElement('td')
            column.appendChild(row);
            //function that allows the cells in grid to change color
            row.addEventListener('click', function (click) {
                color = colorPicker.value;
                cell_color = click.target.style;
                if (cell_color.backgroundColor === '') {
                    cell_color.backgroundColor = color;
                } else {
                    cell_color.backgroundColor = '';
                }
            })
        }
    }
};
