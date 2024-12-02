const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const gradientType = document.getElementById("gradientType");
const preview = document.querySelector(".preview");
const cssCode = document.getElementById("cssCode");

function updateBackground() {
  const type = gradientType.value;
  const colorValue1 = color1.value;
  const colorValue2 = color2.value;

  let backgroundValue;

  if (type === "linear") {
    backgroundValue = `linear-gradient(to right, ${colorValue1}, ${colorValue2})`;
  } else if (type === "radial") {
    backgroundValue = `radial-gradient(circle, ${colorValue1}, ${colorValue2})`;
  }

  preview.style.background = backgroundValue;
  cssCode.textContent = `background: ${backgroundValue};`;
}

// Event Listeners
color1.addEventListener("input", updateBackground);
color2.addEventListener("input", updateBackground);
gradientType.addEventListener("change", updateBackground);

// Initial Update
updateBackground();
