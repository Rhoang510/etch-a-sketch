const container = document.querySelector("#container");
const clearGrid = document.querySelector(".clear");
const rgb = document.querySelector(".rgb");
const black = document.querySelector(".black");
const changeSize = document.querySelector(".changeSize");
const size = document.querySelector(".size");
const colorPicker = document.querySelector("#colorPicker");
const slider = document.querySelector("#slider");

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
                box.style.backgroundColor = "black";
        });
    });
};

makeGrid(16);
size.textContent = "Size: 16 x 16";

colorPicker.addEventListener("change", () => {
    const newColor = document.querySelector("#colorPicker").value;
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = newColor;
        });
    });
});

rgb.addEventListener("click", () => {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = `hsl(${Math.random() * 360}, 80%, 50%)`;
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
    size.textContent = `Size: ${slider.value} x ${slider.value}`
});

