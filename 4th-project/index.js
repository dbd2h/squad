const $button = document.querySelector(".button");
const $colorBtn = document.querySelector(".colorBtn");
const $body = document.querySelector("body");
let clicked = false;
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

if (sessionStorage.getItem("posting")) {
  const howMany = Math.floor(Math.random() * 5 + 20);
  for (let i = 0; i < howMany; i++) {
    const x = Math.random() * 90 + 1;
    const y = Math.random() * 20 + 1;
    const effect = Math.floor(Math.random() * 5 + 1);
    const select = Math.floor(Math.random() * 4);
    const dalgonaList = [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ];
    const imgX = dalgonaList[select][0];
    const imgY = dalgonaList[select][1];
    console.log(imgX, imgY);
    const imgAddress = "./dalgona.png";
    const img = document.createElement("div");
    img.classList.add("dalgonaImg");
    img.classList.add(`dalgonaAni${effect}`);
    img.style.backgroundImage = `url(${imgAddress})`;
    img.style.backgroundPosition = `${imgX * 50}px ${imgY * 50}px`;
    img.style.width = "50px";
    img.style.height = "50px";
    img.style.backgroundSize = "100px 100px";
    $body.append(img);
    img.style.top = `${String(y)}vh`;
    img.style.left = `${String(x)}vw`;
    setTimeout(() => {
      img.remove();
    }, 5000);
  }
  sessionStorage.removeItem("posting");
}
$button.addEventListener("mousedown", (event) => {
  if (clicked) return;
  const btnPosition = $button.getBoundingClientRect();
  const btnX = btnPosition.left;
  const btnY = btnPosition.top;
  console.log(btnX, btnY);
  const clickX = event.clientX;
  const clickY = event.clientY;
  console.log(clickX, clickY);
  clicked = true;
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  $button.append(ripple);
  ripple.style.left = clickX - btnX + "px";
  ripple.style.top = clickY - btnY + "px";
  setTimeout(() => {
    ripple.remove();
    clicked = false;
    location.href = "post.html";
  }, 500);
});

$colorBtn.addEventListener("click", () => {
  const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
  let randomColor2;
  while (randomColor1 === randomColor2 || randomColor2 === undefined) {
    randomColor2 = colors[Math.floor(Math.random() * colors.length)];
  }
  $colorBtn.style.background = `linear-gradient(to right,${randomColor1},${randomColor2})`;
});
