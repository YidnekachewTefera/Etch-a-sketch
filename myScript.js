const board = document.querySelector(".drowing-board-container");
const colorPicker = document.querySelector(".colorPicker");
const Resetter = document.querySelector(".color-resetter");
const eraser = document.querySelector(".eraser");
const boardCleaner = document.querySelector(".board-cleaner");
const rainbowMode = document.querySelector(".rainbow-mode");
const divInsideContainer = document.querySelector(".div-inside-container");
const boxSize = document.querySelector(".box-size");
let divsInsideBoard;
const clearBoard = () => {
  board.innerHTML = "";
  boxSize.textContent = "0X0";
};
const defaultBoard = () => {
  clearBoard();
  board.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${16}, 1fr)`;
  for (let i = 1; i <= 16 * 16; i++) {
    let div = document.createElement("div");
    div.style.border = "solid";
    div.classList.add("divInside");
    board.appendChild(div);
    boxSize.textContent = "16X16";
  }
};
Resetter.addEventListener("click", defaultBoard);
boardCleaner.addEventListener("click", clearBoard);
const divCreater = (e) => {
  clearBoard();

  board.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`;
  for (let i = 1; i <= e.target.value * e.target.value; i++) {
    let div = document.createElement("div");
    div.style.border = "solid";
    div.classList.add("divInside");
    board.appendChild(div);
  }
  boxSize.textContent = e.target.value + "X" + e.target.value;
};
divInsideContainer.addEventListener("input", divCreater);
let colorValue;
colorPicker.addEventListener("change", (e) => {
  board.style.backgroundColor = e.target.value;
});
const splashScreen = document.querySelector(".splash");
splashScreen.addEventListener("click", () => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {
    splashScreen.classList.add("hidden");
  }, 610);
});

defaultBoard();
