$body = document.querySelector("body");

window.addEventListener("click", (event) => {
  const wave = document.createElement("div");
  wave.classList.add("wave");
  const clickX = event.pageX;
  const clickY = event.pageY;
  wave.style.left = clickX + "px";
  wave.style.top = clickY + "px";
  $body.append(wave);
  setTimeout(() => wave.remove(), 1500);
});
