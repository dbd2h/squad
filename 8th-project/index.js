const $main = document.querySelector(".main");
const $others = document.querySelector(".others");
const $menuList = document.querySelectorAll("nav>ul>li");
const $slide = document.querySelectorAll(".slide");
let randomColor = null;
const randomColorList = [];

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

const now = sessionStorage.getItem("now");
if (!now) {
  sessionStorage.setItem("now", "main");
  $menuList[0].style.color = "red";
} else if (now == "main") {
  $others.classList.add("hidden");
  $menuList[0].style.color = "red";
} else {
  $others.innerHTML = now;
  $main.classList.add("hidden");
  const number = sessionStorage.getItem("number");
  $menuList[number].style.color = "red";
}

for (let i = 0; i < $menuList.length; i++) {
  if (i == 0) {
    $menuList[i].addEventListener("click", () => {
      sessionStorage.setItem("now", "main");
      location.href = "index.html";
    });
  } else {
    $menuList[i].addEventListener("click", () => {
      sessionStorage.setItem("now", $menuList[i].innerHTML);
      sessionStorage.setItem("number", i);
      location.href = "index.html";
    });
  }
}

function colorInput() {
  for (let i = 0; i < $slide.length; i++) {
    if (!randomColor) {
      const initialNumber = Math.floor(Math.random() * colors.length);
      randomColorList.push(initialNumber);
      randomColor = colors[initialNumber];
    }
    let randomNumber = Math.floor(Math.random() * colors.length);
    while (randomColorList.includes(randomNumber)) {
      randomNumber = Math.floor(Math.random * colors.length);
    }
    $slide[
      i
    ].style.background = `linear-gradient(to right,${randomColor},${colors[randomNumber]})`;
    randomColor = colors[randomNumber];
  }
}
colorInput();
