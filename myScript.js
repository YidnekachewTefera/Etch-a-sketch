const board = document.querySelector(".drowing-board-container");
const colorPicker = document.querySelector(".colorPicker");
const rainbowMode = document.querySelector(".rainbow-mode");
const resetBoard = document.querySelector(".board-resetter");
const eraser = document.querySelector(".eraser");
const boardCleaner = document.querySelector(".board-cleaner");
let boxesDisplayer = document.querySelector(".box-size");
const boxSizeSetter = document.querySelector(".div-inside-container");
let currentMode = "white";
const defaultBoard = () => {
  board.innerHTML = "";
  let size = 16;
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.style.border = "solid";
    board.appendChild(div);
    boxesDisplayer.innerHTML = `${size}X${size}`;
  }
  boxSizeSetter.value = size;
};
const boxCreator = (e) => {
  board.innerHTML = "";
  let size = e.target.value;
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.style.border = "solid";
    board.appendChild(div);
    boxesDisplayer.innerHTML = `${e.target.value}X${e.target.value}`;
  }
};
boxSizeSetter.addEventListener("input", boxCreator);
const modeSelector = (e) => {
  if (e.target.value == "rainbow") {
    let rG = Math.floor(Math.random * 256);
    let rB = Math.floor(Math.random * 256);
    let rR = Math.floor(Math.random * 256);
    currentMode = `rgb(${rR},${rG},${rB})`;
  } else if (e.target.value == "erase") {
    currentMode = "white";
  }
};
//resetBoard.addEventListener("click", modeSelector);
resetBoard.addEventListener("click", defaultBoard);
defaultBoard();
