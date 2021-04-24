// set variables
const table = document.querySelector("table");
const gridSize = Math.floor(Math.random() * 5 + 10);
let currentSnakeIndex = Math.floor(Math.random() * (gridSize * gridSize)) + 1;
let nextSnakeIndex = currentSnakeIndex;
const gridColor = "aquamarine";
const snakeColor = "grey";
const gridArray = [];
let snakeCells;
// build grid (board)
const buildGrid = () => {
  let grid = "";
  let count = 0;
  for (let i = 0; i < gridSize; i++) {
    grid += `<tr>`;
    for (let j = 0; j < gridSize; j++) {
      grid += `<td id=${count}></td>`;
      gridArray.push(`<td id=${count}></td>`);
      count++;
    }
    grid += `</tr>`;
  }
  table.innerHTML = grid;
  setSnake(currentSnakeIndex);
};

const setSnake = (current, next) => {
  let newSnakeCell = document.getElementById(current - 1);
  let currentCell = document.getElementById(current);
  let nextCell = document.getElementById(next);
  for (let i = 0; i < gridArray.length; i++) {
    if (i === current) {
      if (next !== undefined) {
        let snakeCellArray = Array.from(snakeCells);
        snakeCellArray.push(newSnakeCell);
        snakeCellArray.forEach((snakeCell) => {
          snakeCell.style.background = snakeColor;
        });
      } else {
        // first time around
        currentCell.className = "snake";
        snakeCells = document.querySelectorAll(".snake");
        console.log(snakeCells);
        currentCell.style.background = snakeColor;
      }
    }
  }
};

// re-render updated grid with snake
const reRenderGrid = () => {};

// move square on grid
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      if (currentSnakeIndex === Math.pow(gridSize, 2) - 1) {
        nextSnakeIndex = 0;
      } else {
        nextSnakeIndex = currentSnakeIndex + 1;
      }
      setSnake(currentSnakeIndex, nextSnakeIndex);
      currentSnakeIndex = nextSnakeIndex;
      break;
    case "ArrowLeft":
      if (currentSnakeIndex === 0) {
        nextSnakeIndex = Math.pow(gridSize, 2) - 1;
      } else {
        nextSnakeIndex = currentSnakeIndex - 1;
      }
      setSnake(currentSnakeIndex, nextSnakeIndex);
      currentSnakeIndex = nextSnakeIndex;
      break;
    case "ArrowUp":
      if (currentSnakeIndex <= gridSize - 1) {
        let dif = gridSize - currentSnakeIndex;
        nextSnakeIndex = gridSize * gridSize - dif;
      } else {
        nextSnakeIndex = currentSnakeIndex - gridSize;
      }
      setSnake(currentSnakeIndex, nextSnakeIndex);
      currentSnakeIndex = nextSnakeIndex;
      break;
    case "ArrowDown":
      if (currentSnakeIndex > gridSize * gridSize - gridSize - 1) {
        let dif = gridSize * gridSize - currentSnakeIndex;
        nextSnakeIndex = gridSize - dif;
      } else {
        nextSnakeIndex = currentSnakeIndex + gridSize;
      }
      setSnake(currentSnakeIndex, nextSnakeIndex);
      currentSnakeIndex = nextSnakeIndex;
      break;
  }
});

// load random grid with ranomd snake head on load
window.onload = buildGrid();
