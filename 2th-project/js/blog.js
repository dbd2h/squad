const $header = document.querySelector("header");
const $title = document.querySelector(".title");
const $middle = document.querySelector(".nickName");
const $content = document.querySelector(".content");

const real = JSON.parse(localStorage.ID);
const postList = JSON.parse(localStorage.post);
const PLAYER = sessionStorage.player;
const NUMBER = sessionStorage.number;
const blogNum = parseInt(sessionStorage.blogNum);
const nowNum = parseInt(postList[blogNum][4]);

const $spanX = document.createElement("span");
const $textArea = document.createElement("textarea");
const $div = document.createElement("div");
const $img = document.createElement("img");
const $spanNick = document.createElement("span");
$spanX.innerHTML = "x";
$spanX.addEventListener("click", () => {
  location.href = "index.html";
});
$header.append($spanX);
$title.innerHTML = postList[blogNum][1];
$img.setAttribute("src", real[nowNum][3]);
$spanNick.innerHTML = real[nowNum][0];
if (real[nowNum][4] === "ocher") {
  $spanNick.style.color = "var(--ocher)";
  console.log("a");
} else if (real[nowNum][4] === "green") {
  $spanNick.style.color = "green";
  console.log("a");
} else if (real[nowNum][4] === "red") {
  $spanNick.style.color = "red";
  console.log("a");
}
$div.append($img);
$div.append($spanNick);
$middle.append($div);
$textArea.innerHTML = postList[blogNum][5];
$content.append($textArea);
