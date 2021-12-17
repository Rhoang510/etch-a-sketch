const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const changeSize = document.querySelector(".changeSize");
const size = document.querySelector(".size");
const canvas = document.querySelector(".canvas");
const colorPicker = document.querySelector("#colorPicker");
const slider = document.querySelector("#slider");
const sizeSlider = document.querySelectorAll("#sizeSlider")
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

slider.addEventListener("change", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.remove();
    });
    makeGrid(slider.value);
    size.textContent = `Size: ${slider.value} x ${slider.value}`;
});

sizeSlider.addEventListener("change", () => {
    container.style.height = sizeSlider.value;
    container.style.width = sizeSlider.value;
    canvas.textContent = `Canvas Size: ${sizeSlider.value} x ${sizeSlider.value}`;
});

