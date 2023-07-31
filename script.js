// Get references to the color display div and all the buttons
const colorDisplay = document.getElementById("color-display");
const aquaBtn = document.getElementById("aqua");
const tealBtn = document.getElementById("teal");
const pinkBtn = document.getElementById("pink");
const purpleBtn = document.getElementById("purple");
const colorlessBtn = document.getElementById("colorless");

// Event listeners for each button
aquaBtn.addEventListener("click", () => {
  changeColor("aqua");
});

tealBtn.addEventListener("click", () => {
  changeColor("teal");
});

pinkBtn.addEventListener("click", () => {
  changeColor("pink");
});

purpleBtn.addEventListener("click", () => {
  changeColor("purple");
});

colorlessBtn.addEventListener("click", () => {
  resetToDefault();
});

// Function to change the color display
function changeColor(color) {
  colorDisplay.textContent = color;
  colorDisplay.style.backgroundColor = color;
}

// Function to reset the color display to default
function resetToDefault() {
  colorDisplay.textContent = "colorless";
  colorDisplay.style.backgroundColor = "white";
}
