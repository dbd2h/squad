const $body = document.querySelector("body");
const imgRec = ["imgRec1.jpg", "imgRec2.jpg", "imgRec3.jpg"];
const imgSqu = [
  "imgSqu1.jpg",
  "imgSqu2.jpg",
  "imgSqu3.jpg",
  "imgSqu4.jpg",
  "imgSqu5.jpg",
  "imgSqu6.jpg",
  "imgSqu7.jpg",
  "imgSqu8.jpg",
  "imgSqu9.jpg",
];

function randomNumber(i) {
  const number = Math.floor(Math.random() * i);
  return number;
}

function pictureBox() {
  const caseNum = randomNumber(3);
  if (caseNum == 0) {
    const picNum = randomNumber(3);
    const $div = document.createElement("div");
    $div.classList.add("case1");
    const $img = document.createElement("img");
    $img.setAttribute("src", imgRec[picNum]);
    $div.append($img);
    $body.append($div);
  }
  if (caseNum == 1) {
    const picNum1 = randomNumber(9);
    const picNum2 = randomNumber(9);
    const picNum3 = randomNumber(9);
    const $div = document.createElement("div");
    $div.classList.add("case2");
    const $img1 = document.createElement("img");
    const $img2 = document.createElement("img");
    const $img3 = document.createElement("img");
    $img1.setAttribute("src", imgSqu[picNum1]);
    $img2.setAttribute("src", imgSqu[picNum2]);
    $img3.setAttribute("src", imgSqu[picNum3]);
    $div.append($img1);
    $div.append($img2);
    $div.append($img3);
    $body.append($div);
  }
  if (caseNum == 2) {
    const picNum1 = randomNumber(9);
    const picNum2 = randomNumber(9);
    const picNum3 = randomNumber(9);
    const $div = document.createElement("div");
    const $smallDiv = document.createElement("div");
    $div.classList.add("case3");
    const $img1 = document.createElement("img");
    const $img2 = document.createElement("img");
    const $img3 = document.createElement("img");
    $img1.setAttribute("src", imgSqu[picNum1]);
    $img2.setAttribute("src", imgSqu[picNum2]);
    $img3.setAttribute("src", imgSqu[picNum3]);
    $div.append($img1);
    $smallDiv.append($img2);
    $smallDiv.append($img3);
    $div.append($smallDiv);
    $body.append($div);
  }
}

const bodyHeight = $body.offsetHeight;

const interval = setInterval(() => {
  pictureBox();
  if (bodyHeight != $body.offsetHeight) {
    clearInterval(interval);
  }
}, 30);
