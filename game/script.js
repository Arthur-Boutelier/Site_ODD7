const grid = document.getElementById('grid');
const rows = 10;
const cols = 10;
let cells = [];

for (let row = 0; row < rows; row++) {
    let rowCells = [];
    for (let col = 0; col < cols; col++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.row = row;
    cell.dataset.col = col;
    cell.addEventListener("click", () => {
        let current = cell.style.backgroundImage;
        if (selectedIcon) {
            let selected = selectedIcon.dataset.type;
            if (current == `url("../images/${selected}.gif")`) {
                cell.style.backgroundImage = "";
            } else {
                cell.style.backgroundImage = `url('../images/${selected}.gif')`;
            }
        } else{
            if(current != "none"){
                cell.style.backgroundImage = "";
            }
        }
    });
    
    grid.appendChild(cell);
    rowCells.push(cell);
    }
    cells.push(rowCells);
}

let selectedIcon = null;

function selectIcon(clickedIcon){
    if (selectedIcon === clickedIcon){
        clickedIcon.classList.remove("selected");
        selectedIcon = null;
    } else{
        if (selectedIcon){
            selectedIcon.classList.remove("selected");
        }
        clickedIcon.classList.add("selected");
        selectedIcon = clickedIcon
    }
    
}

const cellz = document.getElementsByClassName("cell");

setInterval(()=>{
    if(iconOn()){
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const cellz = document.getElementsByClassName("cell");

        for(let celz of cellz){
            if((celz.dataset.row == row)&&(celz.dataset.col == col)){
                celz.style.backgroundColor = "green"
            }
        }
    }
}, 1000)


function iconOn(){
    for (let celz of cellz){
        if (celz.style.backgroundImage != ""){
            return true;
        }
    }
    return false;
}




