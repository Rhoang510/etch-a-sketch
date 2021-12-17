const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const changeSize = document.querySelector(".changeSize");
const size = document.querySelector(".size");
const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector("#colorPicker");
const gridSlider = document.querySelector("#gridSlider");
const canvasSlider = document.querySelector("#canvasSlider");
let color = "black";
let brush = false;

function makeGrid(gridSize) {
    container.style.setProperty("--columns", gridSize);
    container.style.setProperty("--rows", gridSize);
    for (i = 0; i < (gridSize ** 2); i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        container.appendChild(div);
    };
        container.addEventListener("click", toggleBrush);
};

makeGrid(16);
size.textContent = "Size: 16 x 16";
canvas.textContent = "Canvas Size: 540 x 540"

function toggleBrush() {
    const boxes = document.querySelectorAll(".box");
    if (!brush) {
        boxes.forEach((box) => {
            box.addEventListener("mouseover", changeColor);
        });
        brush = true;
    } else {
        boxes.forEach((box) => {
            box.removeEventListener("mouseover", changeColor);
        });
        brush = false;
    }
}

function changeColor() {
    switch (color) {
      case "rgb":
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
        break;
      case "black":
        this.style.backgroundColor = "black";
        break;
      case "userPick":
        this.style.backgroundColor = colorPicker.value;
        break;
  }
}

// Event Listeners
rgb.addEventListener("click", () => { color = "rgb"; });
black.addEventListener("click", () => { color = "black"; });
colorPicker.addEventListener("click", () => { color = "userPick"; });

clearGrid.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.removeAttribute("style");
    });
});

gridSlider.addEventListener("change", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    });
    makeGrid(gridSlider.value);
    size.textContent = `Size: ${gridSlider.value} x ${gridSlider.value}`;
});

canvasSlider.addEventListener("change", () => {
    container.style.height = canvasSlider.value + "px";
    container.style.width = canvasSlider.value + "px";
    canvas.textContent = `Canvas Size: ${canvasSlider.value} x ${canvasSlider.value}`;
});