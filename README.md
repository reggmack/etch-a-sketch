# etch-a-sketch
Create a pretty neat toy to flex DOM manipulation skills. Build a browser version of something between a sketchpad and an Etch-A-Sketch.

Optional Tasks:
Random color
const createRandomRGB = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return {r, g, b};
}

// Add hover effect
  const gridHover = document.querySelectorAll(".gridDiv");
  gridHover.forEach((box) =>
    box.addEventListener("mouseover", (e) => {
      const { r, g, b } = createRandomRGB();
      const bgColor = "rgb(" + r + "," + g + "," + b +")";
      const currentOpacity = Number(e.target.style.opacity);
      e.target.style.background = bgColor;
      e.target.style.opacity = currentOpacity + .1;
    })