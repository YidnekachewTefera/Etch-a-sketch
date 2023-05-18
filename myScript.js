const board = document.querySelector(".drowing-board-container");
const colorPicker = document.querySelector(".colorPicker");
const Resetter = document.querySelector(".color-resetter");
const eraser = document.querySelector(".eraser");
const boardCleaner = document.querySelector(".board-cleaner");
const rainbowMode = document.querySelector(".rainbow-mode");
const divInsideContainer = document.querySelector(".div-inside-container");
const boxSize = document.querySelector(".box-size");
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
const clearBoard = () => {
  board.innerHTML = "";
  z;
  boxSize.textContent = "0X0";
};
let rainbowColor;
let currentMode;
const modeSelector = (status) => {
  if (status == "eraser") {
    currentMode = "erase";
  } else if (status == "rainbow") {
    currentMode = "rainbow";
    console.log(status);
    const rG = Math.floor(Math.random() * 256);
    const rR = Math.floor(Math.random() * 256);
    const rB = Math.floor(Math.random() * 256);
    rainbowColor = `rgb(${rR},${rG},${rB})`;
  } else {
    currentMode == status;
  }
};
const changeColor = (e) => {
  if (e.target.value == "rainbow") {
    console.log(rainbowColor);
    e.target.style.backgroundColor = rainbowColor;
  }
  if (e.target.value == "erase") {
    e.target.backgroundColor;
  }
};
colorPicker.addEventListener("change", (e) => {
  modeSelector(e.target.value);
});
eraser.addEventListener("click", modeSelector("eraser"));
rainbowMode.addEventListener("click", modeSelector("rainbow"));
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
    div.addEventListener("click", (e) => {
      console.log("helow");
    });
    div.addEventListener("onclick", (e) => {
      e.target.style.backgroundColor = "black";
    });
    board.appendChild(div);
  }
  boxSize.textContent = e.target.value + "X" + e.target.value;
};
divInsideContainer.addEventListener("input", divCreater);
let colorValue;
colorPicker.addEventListener("change", (e) => {
  colorValue = e.target.value;
});
const splashScreen = document.querySelector(".splash");
splashScreen.addEventListener("click", () => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {}, 610);
});
defaultBoard();
