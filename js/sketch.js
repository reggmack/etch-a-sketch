// Add container div for grid
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

// Create grid of varying size
function createGrid(numberPerRow) {
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;
  for (let i = 1; i < total; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList.add("gridDiv");
    if (i % mod === 0) {
      gridDiv.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      gridDiv.style.cssText =
        "border: 1px solid #767676; height: 25px; width: 25px";
    }
    container.appendChild(gridDiv);
  }

  // Add hover effect
  const gridHover = document.querySelectorAll(".gridDiv");
  gridHover.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      const currentOpacity = Number(e.target.style.opacity);
      e.target.style.background = `rgb(0, 0, 0)`;
      e.target.style.opacity = currentOpacity + .1;
    })
  );
}
createGrid(16);

// Add button to change grid size
const gridButton = document.querySelector("#gridButton");
gridButton.addEventListener("click", () => {
  let gridSize;
  do {
    gridSize = parseInt(prompt("Choose a grid size less than 100"), 10);
    const clear = document.querySelector(".container");
    clear.replaceChildren();
    createGrid(gridSize);
  } while (isNaN(gridSize) || gridSize > 100 || gridSize < 1);
});
