const $headerMenu = document.querySelector(".header>div:first-child>a>span");
const $headerToday = document.querySelector(".header>div:last-child>a>span");
const $searchX = document.querySelector(".search-box>div:nth-child(2)>span");
const $searchIcon = document.querySelector(".search-box>div:last-child>span");
const $searchInput = document.querySelector(
  ".search-box>div:first-child>input"
);
const $newsBtn = document.querySelector(
  ".news>ul>li:last-child>a:last-child>span:first-child"
);
const $realBtn = document.querySelector(".real-time__btn>span");
const $rainIcon = document.querySelector(".info__rain>span:first-child");
const $locationIcon = document.querySelector(".location>span");

const $navBtnList = document.querySelectorAll(".nav_select-box");

const iconURL =
  "https://m1.nateimg.co.kr/n3main/sets2/set_ic2.png?v=2021081900";

$searchInput.addEventListener("input", (event) => {
  const input = event.target.value;
  console.log(input);
  if (input) {
    $searchX.classList.remove("hidden");
  } else {
    $searchX.classList.add("hidden");
  }
});

$searchX.addEventListener("click", () => {
  $searchInput.value = "";
  $searchX.classList.add("hidden");
});

for (let i = 0; i < $navBtnList.length; i++) {
  const btnValue = $navBtnList[i].children.length;
  $navBtnList[i].style.width = `${btnValue * 6 - 1}px`;
}

$headerMenu.style.background = `url(${iconURL}) -20px -37px no-repeat`;
$headerMenu.style.backgroundSize = "64px auto";

$headerToday.style.background = `url(${iconURL}) 0 -125px no-repeat`;
$headerToday.style.backgroundSize = "64px auto";

$searchX.style.background = `url(${iconURL}) -38px -564px no-repeat`;
$searchX.style.backgroundSize = "64px auto";

$searchIcon.style.background = `url(${iconURL}) -36px -63px no-repeat`;
$searchIcon.style.backgroundSize = "64px auto";

$newsBtn.style.background = `url(${iconURL}) 0px -818px no-repeat`;
$newsBtn.style.backgroundSize = "64px auto";

$realBtn.style.background = `url(${iconURL}) 0px -380px no-repeat`;
$realBtn.style.backgroundSize = "64px auto";

$rainIcon.style.background = `url(${iconURL}) 0px -545px no-repeat`;
$rainIcon.style.backgroundSize = "64px auto";

$locationIcon.style.background = `url(${iconURL}) 0px -527px no-repeat`;
$locationIcon.style.backgroundSize = "64px auto";
