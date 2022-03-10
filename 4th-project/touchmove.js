if (!$body) {
  const $body = document.querySelector("body");
}
const followCircle = document.createElement("div");
followCircle.classList.add("followCircle");
followCircle.classList.add("hidden");
$body.append(followCircle);

window.addEventListener("touchmove", (event) => {
  followCircle.classList.remove("hidden");
  const touchX = event.changedTouches[0].clientX;
  const touchY = event.changedTouches[0].clientY;
  followCircle.style.left = touchX + "px";
  followCircle.style.top = touchY + "px";
});

window.addEventListener("touchend", () => {
  followCircle.classList.add("hidden");
});
