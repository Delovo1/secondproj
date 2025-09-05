const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const track = document.querySelector(".slides");
let current = 0;

function move(i) {
  current = (i + slides.length) % slides.length;
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((d) => d.classList.remove("active"));
  dots[current].classList.add("active");
}

document.querySelector(".arrow.left").onclick = () => move(current - 1);
document.querySelector(".arrow.right").onclick = () => move(current + 1);
dots.forEach((dot, idx) => (dot.onclick = () => move(idx)));

function setupRange(
  minInputId,
  maxInputId,
  minLabelId,
  maxLabelId,
  isPrice = false
) {
  const minInput = document.getElementById(minInputId);
  const maxInput = document.getElementById(maxInputId);
  const minLabel = document.getElementById(minLabelId);
  const maxLabel = document.getElementById(maxLabelId);

  function update() {
    let minVal = Math.min(Number(minInput.value), Number(maxInput.value));
    let maxVal = Math.max(Number(minInput.value), Number(maxInput.value));

    if (isPrice) {
      minLabel.textContent = "От " + minVal.toLocaleString();
      maxLabel.textContent = "До " + maxVal.toLocaleString();
    } else {
      minLabel.textContent = "От " + minVal;
      maxLabel.textContent = "До " + maxVal;
    }
  }

  minInput.addEventListener("input", update);
  maxInput.addEventListener("input", update);
  update();
}

setupRange("priceMin", "priceMax", "price-min", "price-max", true);
setupRange("areaMin", "areaMax", "area-min", "area-max");
