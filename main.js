const gameArray =[];
$(document).ready(()=> initializeApp());

function initializeApp(){
    const col = 10;
    const row = 10;
    drawBoard(col,row);
}

function drawBoard(col, row){
    for(let i = 0; i < row; i++){
        var newRow = $("<div>").addClass("row");
        gameArray.push([]);
        $(".gameBoard").append(newRow);
        for(let j = 0; j < col; j++ ){
            gameArray[i].push(0);
            var newCol = $("<div>").addClass("col");
            newCol.attr({'coord': ""+i+j});
            newRow.append(newCol);
        }
    }
}

class Cell{
    constructor(){
        this.status = 0;
    }
}

