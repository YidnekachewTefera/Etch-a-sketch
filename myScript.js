const board = document.querySelector(".drowing-board-container");
const colorPicker = document.querySelector(".colorPicker");
const rainbowMode = document.querySelector(".rainbow-mode");
const resetBoard = document.querySelector(".board-resetter");
const eraser = document.querySelector(".eraser");
const boardCleaner = document.querySelector(".board-cleaner");
let boxesDisplayer = document.querySelector(".box-size");
const boxSizeSetter = document.querySelector(".div-inside-container");
let currentMode = "black";
colorPicker.addEventListener("input", (e) => {
  currentMode = e.target.value;
});
let size;
const rainbowColors = () => {
  let rG = Math.floor(Math.random() * 256);
  let rB = Math.floor(Math.random() * 256);
  let rR = Math.floor(Math.random() * 256);
  return `rgb(${rR},${rG},${rB})`;
};
const modeSelector = (e) => {
  if (e.target.value == "Rainbow") {
    currentMode = "RainBowMode";
  } else if (e.target.value == "erase") {
    currentMode = "white";
  }
};
const drower = (e) => {
  if (currentMode == "RainBowMode") {
    let color = rainbowColors();
    console.log(color);
    e.target.style.backgroundColor = color;
  } else e.target.style.backgroundColor = currentMode;
};
const defaultBoard = () => {
  currentMode = "black";
  board.innerHTML = "";
  size = 16;
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", drower);
    div.addEventListener("mousedown", drower);
    board.appendChild(div);
    boxesDisplayer.innerHTML = `${size}X${size}`;
  }
  boxSizeSetter.value = size;
};
const boxCreator = (e) => {
  board.innerHTML = "";
  size = e.target.value;
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", drower);
    board.appendChild(div);
    boxesDisplayer.innerHTML = `${e.target.value}X${e.target.value}`;
  }
};
rainbowMode.addEventListener("click", modeSelector);
boxSizeSetter.addEventListener("input", boxCreator);
resetBoard.addEventListener("click", defaultBoard);
eraser.addEventListener("click", modeSelector);
boardCleaner.addEventListener("click", () => {
  board.innerHTML = "";
  board.style.gridTemplateColumns = `repeat(${size},1fr)`;
  board.style.gridTemplateRows = `repeat(${size},1fr)`;
  for (let i = 0; i < size * size; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", drower);
    div.addEventListener("mousedown", drower);
    board.appendChild(div);
    boxesDisplayer.innerHTML = `${size}X${size}`;
  }
  boxSizeSetter.value = size;
});
defaultBoard();
