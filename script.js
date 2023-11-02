const grid = document.querySelector(".grid");
const clearBtn = document.querySelector(".clear_btn");
const randomize = document.querySelector(".randomize");
//create grid
const gridSize = document.querySelector(".size_range");

const createGrid = function () {
  const size = gridSize.value;

  grid.innerHTML = "";

  for (let i = 0; i < gridSize.value; i++) {
    for (let j = 0; j < gridSize.value; j++) {
      const cell = document.createElement("div");
      grid.style.gridTemplateColumns = `repeat(${gridSize.value},1fr)`;
      grid.style.gridTemplateRows = `repeat(${gridSize.value},1fr)`;
      cell.classList.add("cell");
      grid.appendChild(cell);

      randomize.addEventListener("click", function () {
        const randomizer = Math.floor(Math.random(1, 255));
        cell.style.backgroundColor = `rgb(${randomize}, ${randomize}, ${randomize})`;
      });

      cell.addEventListener("mouseover", function () {
        cell.classList.add("painted");
      });

      clearBtn.addEventListener("click", function () {
        cell.classList.remove("painted");
        cell.classList.add("clearAll");
      });
    }
  }
};

const gridItems = grid.querySelectorAll(".cell");

createGrid();
gridSize.addEventListener("input", createGrid);
//[...gridItems] =
//Create painting
// const painting = function () {
//   gridItems.forEach((gridItem) => {
//     gridItem.addEventListener("mouseover", function () {
//       gridItems.classList.add("painted");
//     });
//   });
// };
//Clear function
