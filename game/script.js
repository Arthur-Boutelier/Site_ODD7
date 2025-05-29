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
            } else {
                if (current != "none") {
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

function selectIcon(clickedIcon) {
    if (selectedIcon === clickedIcon) {
        clickedIcon.classList.remove("selected");
        selectedIcon = null;
    } else {
        if (selectedIcon) {
            selectedIcon.classList.remove("selected");
        }
        clickedIcon.classList.add("selected");
        selectedIcon = clickedIcon;
    }
}

const cellz = document.getElementsByClassName("cell");
var greenCount = 0;

function getDynamicInterval() {
    const base = 1000;
    const iconCount = iconOn();

    return base - (iconCount * 20);
}

function runDynamicAction() {
    if (iconOn() > 0) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);

        for (let celz of cellz) {
            if ((celz.dataset.row == row) && (celz.dataset.col == col)) {
                if (celz.style.backgroundColor != "green") {
                    celz.style.backgroundColor = "green";
                    full();
                }
            }
        }
    }

    setTimeout(runDynamicAction, getDynamicInterval());
}

function iconOn() {
    let count = 0;
    for (let celz of cellz) {
        if (celz.style.backgroundImage != "") {
            count += 1;
        }
    }
    return count;
}

function full() {
    greenCount++;
    if (greenCount == 100) {
        alert("Bravo vous avez gagné !");
    }
}

runDynamicAction();
