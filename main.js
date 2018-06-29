const cols = 100;
const rows = 100;
let gameArray = make2dArray();
$(document).ready(() => initializeApp());

function initializeApp() {
    drawBoard();
    drawCell(gameArray);
    setInterval(gameLogic, 1000);
}

function make2dArray() {
    const array = [];
    for (let i = 0; i < rows; i++) {
        array.push([]);
        for (let j = 0; j < cols; j++) {
            array[i].push(Math.floor(Math.random() * 2));
        }
    }
    console.log(array);
    return array;
}

function drawBoard() {
    for (let i = 0; i < rows; i++) {
        var newRow = $("<div>").addClass("row");
        $(".gameBoard").append(newRow);
        for (let j = 0; j < cols; j++) {
            var newCol = $("<div>").addClass("col");
            newCol.attr({
                'id': i + "-" + j
            });
            newRow.append(newCol);
        }
    }
}

function drawCell(array) {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (array[i][j] === 1) {
                $(`#${i}-${j}`).addClass('alive');
            } else {
                $(`#${i}-${j}`).removeClass('alive');
            }
        }
    }
}

function gameLogic() {
    let next = make2dArray();
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let state = gameArray[i][j];
            let neighbors = countNeighbors(gameArray, i, j)
            if (state === 0 && neighbors === 3) {
                next[i][j] = 1;
              } else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
              } else {
                next[i][j] = state;
              }
        
        }
    }
    console.log(next);
    drawCell(next);
    gameArray = next;
}


function countNeighbors(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;
}