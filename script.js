const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");
const box = document.querySelector(".grid-item");

function makeGrid(rows, cols) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeGrid(16, 16);

container.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "red";
});

clearGrid.addEventListener("click", () => {
    box.forEach
});