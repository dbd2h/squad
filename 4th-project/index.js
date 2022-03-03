const $button = document.querySelector(".button");

$button.addEventListener("mousedown", (event) => {
  const btnPosition = event.target.getBoundingClientRect();
  const btnX = btnPosition.left;
  const btnY = btnPosition.top;
  const btnWidth = btnPosition.width;
  const btnHeight = btnPosition.height;
});
