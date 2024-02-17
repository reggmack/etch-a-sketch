const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

function createGrid(numberPerRow) {
  const total = numberPerRow * numberPerRow + numberPerRow;
  const mod = numberPerRow + 1;
  for (let i = 1; i < total; i++) {
    const gridDiv = document.createElement('div');
    gridDiv.classList.add('gridDiv');
    if (i % mod === 0) {
      gridDiv.style.cssText = "border: 0; height: 0; width: 100%";
    } else {
      gridDiv.style.cssText = "border: 1px solid #767676; height: 25px; width: 25px";
    }
    container.appendChild(gridDiv);
  }
}
createGrid(16);

const gridHover = document.querySelectorAll('.gridDiv')
gridHover.forEach(box => box.addEventListener('mouseover', e => {
    e.target.style.background = 'honeydew';
}));

