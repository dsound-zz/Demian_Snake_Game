// set variables
const table = document.querySelector("table");
const gridSize = Math.floor(Math.random() * 5 + 10);
let snakeIndex = Math.floor(Math.random() * (gridSize * gridSize)) + 1;
const defaultColor = "aquamarine";
const snakeColor = "grey";
const gridArray = [];
const snakeArray = [];

// build grid (board)
const buildGrid = () => {
  let grid = "";
  let cellCount = 0;
  for (let i = 0; i < gridSize; i++) {
    grid += `<tr class=row${i}>`;
    for (let j = 0; j < gridSize; j++) {
      grid += `<td class=cell${cellCount}></td>`;
      cellCount++;
      gridArray.push({ cell: cellCount, isSnake: false });
    }
    grid += "</tr>";
  }

  table.innerHTML = grid;

  // set random player square
  const initialSnake = [];
  initialSnakeCell = document.querySelector(`.cell${snakeIndex}`);
  initialSnakeCell.style.background = snakeColor;
  initialSnakeCell.isSnake = true;
  // gridState(initialSnakeCell, snakeIndex);
  // build grid data array
};

// const gridState = (currentSnake, gridIndex) => {
//   let prevSnakePos = gridArray[]
//   console.log(currentSnake, gridArray);
// };

// move square on grid
let nextSquare;
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      if (snakeIndex === (gridSize * gridSize) - 1) {
        nextSquare = 0;
      } else {
        nextSquare = snakeIndex + 1;
      };
      moveSnake(nextSquare);
      snakeIndex = nextSquare;
      break;
    case "ArrowLeft":
      if (snakeIndex === 0) {
        nextSquare = (gridSize * gridSize) - 1;
      } else {
        nextSquare = snakeIndex - 1;
      };
      moveSnake(nextSquare);
      snakeIndex = nextSquare;
      break;
    case "ArrowUp":
      if (snakeIndex <= gridSize - 1) {
        let dif = gridSize - snakeIndex;
        nextSquare = (gridSize * gridSize) - dif;
      } else {
        nextSquare = snakeIndex - gridSize;
      };
      moveSnake(nextSquare);
      snakeIndex = nextSquare;
      break;
    case "ArrowDown":
      if (snakeIndex > (gridSize * gridSize) - gridSize - 1) {
        let dif = (gridSize * gridSize) - snakeIndex;
        nextSquare = gridSize - dif;
      } else {
        nextSquare = snakeIndex + gridSize;
      };
      moveSnake(nextSquare);
      snakeIndex = nextSquare;
      break;
  }
});

//  swap squares on arrow key press
const moveSnake = nextIndex => {
  // old snake <td> 
  let prevSnakePos = document.querySelector(`.cell${snakeIndex}`);
  // new snake <td>
  let nextSnakePos = document.querySelector(`.cell${nextIndex}`);
  // set old snake to grid color, isSnake: false
  prevSnakePos.style.background = defaultColor;
  // set new snake to snake color, isSnake: true
  nextSnakePos.style.background = snakeColor;
  //  gridState(nextSnakePos, newIndex)
};

// set random fruit

// move snake

// game rules
// snake grows by one after eating fruit
// snake hits itself
// snake hits edge
// snake eats 5 fruit wins round
window.onload = buildGrid();
