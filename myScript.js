const drowingBoardContainer = document.querySelector(
  ".drowing-board-container"
);
const ColorModeAndDivWidthSetter = document.querySelector(
  ".color-mode-and-div-width-setter"
);
const colorSetter = document.createElement("button");
const colorReseter = document.createElement("button");
const rainbowMode = document.createElement("button");
const eraser = document.createElement("button");
const boardReseter = document.createElement("button");
rainbowMode.textContent = "Rainbow";
rainbowMode.style.fontSize = "40px";
eraser.textContent = "Erase";
eraser.style.fontSize = "40px";
console.log(drowingBoardContainer);
console.log(ColorModeAndDivWidthSetter);
ColorModeAndDivWidthSetter.append(
  colorSetter,
  colorReseter,
  rainbowMode,
  eraser,
  boardReseter
);
