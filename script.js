const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");

makeGrid(16);

function makeGrid(gridSize) {
    container.style.setProperty("--columns", gridSize);
    container.style.setProperty("--rows", gridSize);
    for (i = 0; i < (gridSize ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    };
};

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener ("mouseover", () => {
        box.style.backgroundColor = "red";
    });
});

clearGrid.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.remove();
    });
    changeGrid();
});

function changeGrid() {
    let changeGrid = parseInt(prompt("Enter the size of grid you want. (2-100)", ""));
    let gridSize = changeGrid;
    if (changeGrid > 1 && changeGrid <= 100) {
         makeGrid(gridSize);
    } else {
         alert("Please choose a number between 2 and 100.");
    }
}