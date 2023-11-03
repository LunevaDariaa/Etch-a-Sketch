const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clear_btn");
const randomize = document.querySelector(".randomize");
const blackBtn = document.querySelector(".black");
const eraseBtn = document.querySelector(".eraser");
const gridSize = document.querySelector(".size_range");

const gridItems = [];

const createGrid = function () {
  const size = gridSize.value;
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr`;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      grid.appendChild(cell);
      gridItems.push(cell);
    }
  }
};

const randomColor = function () {
  gridItems.forEach((cell) => {
    const randomeR = Math.round(Math.random() * 256);
    const randomeG = Math.round(Math.random() * 256);
    const randomeB = Math.round(Math.random() * 256);
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = `rgb(${randomeR}, ${randomeG}, ${randomeB})`;
    });
  });
};

const defaultColor = function () {
  gridItems.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "black";
    });
  });
};

const clearGrid = function () {
  gridItems.forEach((cell) => {
    cell.style.backgroundColor = "white";
    cell.classList.remove("painted");
  });
};

const eraser = function () {
  gridItems.forEach((cell) => {
    cell.addEventListener("mouseover", function () {
      cell.style.backgroundColor = "white";
    });
  });
};

createGrid();
gridSize.addEventListener("input", createGrid);

randomize.addEventListener("click", randomColor);
blackBtn.addEventListener("click", defaultColor);
clearBtn.addEventListener("click", clearGrid);
eraseBtn.addEventListener("click", eraser);
