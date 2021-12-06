const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const changeSize = document.querySelector(".changeSize");

function makeGrid(gridSize) {
    container.style.setProperty("--columns", gridSize);
    container.style.setProperty("--rows", gridSize);
    for (i = 0; i < (gridSize ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    };
        const boxes = document.querySelectorAll(".box");
        boxes.forEach((box) => {
            box.addEventListener ("mouseover", () => {
                box.style.backgroundColor = "red";
        });
    });
};

makeGrid(16);

clearGrid.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.removeAttribute("style");
    });
});

rgb.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
         let r = Math.floor(Math.random() * 255);
         let g = Math.floor(Math.random() * 255);
         let b = Math.floor(Math.random() * 255);
         box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });
    });
});

black.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "black";
        });
    });
});

changeSize.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    });
    changeGrid();
});

function changeGrid() {
    let changeGrid = parseInt(prompt("Enter the size of grid you want. (2-100)", ""));
    if (changeGrid > 1 && changeGrid <= 100) {
         makeGrid(changeGrid);
    } else {
         alert("Please choose a number between 2 and 100.");
    }
};