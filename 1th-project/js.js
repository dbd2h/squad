const $firstPage = document.querySelector(".first-page");
const $resultPage = document.querySelector(".result-page");
const $resultMain = document.querySelector(".result__main");
const $ball = document.querySelector(".ball");
const $button = document.querySelector("footer>div");
const $resultSum = document.querySelector(".result_sum>span");
const $buttonBox = document.querySelector(".result-page>footer");
const numberList = [];

let buttonTrue = false;
let buttonCount = 0;

$ball.classList.remove("ball");

function colorSelector(number) {
  if (1 <= number && number <= 10) {
    return "red";
  } else if (11 <= number && number <= 20) {
    return "orange";
  } else if (21 <= number && number <= 30) {
    return "yellow";
  } else if (31 <= number && number <= 40) {
    return "green";
  } else if (41 <= number && number <= 50) {
    return "skyBlue";
  } else if (51 <= number && number <= 60) {
    return "blue";
  } else if (61 <= number && number <= 70) {
    return "purple";
  } else if (71 <= number && number <= 80) {
    return "pink";
  } else if (81 <= number && number <= 90) {
    return "brown";
  } else if (91 <= number && number <= 100) {
    return "black";
  }
}

function randomNumberInput(tag) {
  const randomNumber = Math.floor(Math.random() * 99 + 1);
  tag.innerHTML = randomNumber;
  tag.classList.add(colorSelector(randomNumber));
  numberList.push(randomNumber);
}

function resultBallAppend() {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      const $ball = document.createElement("div");
      $ball.classList.add("result_ball");
      $ball.classList.add(colorSelector(numberList[i]));
      $ball.innerHTML = numberList[i];
      $resultMain.children[i].append($ball);
    }, 1000 * i);
  }
  setTimeout(() => {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
      sum += numberList[i];
    }
    $resultSum.innerHTML = `총 합계는= ${sum}`;
    const $resultButton = document.createElement("div");
    $resultButton.innerHTML = "다시 뽑으시겠습니까?";
    $buttonBox.append($resultButton);
    $resultButton.addEventListener("click", () => {
      $resultPage.classList.add("hidden");
      $firstPage.classList.remove("hidden");
      for (let i = 0; i < 3; i++) {
        $resultMain.children[i].innerHTML = "";
      }
      numberList.length = 0;
      $resultSum.innerHTML = "";
      $buttonBox.innerHTML = "";
      $button.style.color = "white";
      $button.style.borderColor = "black";
      $button.style.backgroundColor = "blue";
      $button.style.cursor = "pointer";
      buttonTrue = false;
      buttonCount = 0;
    });
  }, 3000);
}

$button.addEventListener("click", () => {
  if (buttonTrue) {
    return;
  }
  if (buttonCount >= 3) {
    $firstPage.classList.add("hidden");
    $resultPage.classList.remove("hidden");
    resultBallAppend();
    return;
  }
  buttonTrue = true;
  randomNumberInput($ball);
  $ball.classList.add("ball");
  $button.style.backgroundColor = "white";
  $button.style.color = "rgb(220, 220, 220)";
  $button.style.borderColor = "rgb(220, 220, 220)";
  $button.style.cursor = "auto";
  setTimeout(() => {
    $ball.classList.remove("ball");
    $ball.classList.remove($ball.classList[0]);
    $ball.innerHTML = "";
    buttonCount += 1;
    buttonTrue = false;
    setTimeout(() => {
      $button.click();
    }, 0);
  }, 2000);
});
