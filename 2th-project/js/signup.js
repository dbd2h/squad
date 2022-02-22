const $loginNickName = document.querySelector(".login-input__nickname");
const $loginID = document.querySelector(".login-input__id");
const $loginPW = document.querySelector(".login-input__password");
const $loginPWA = document.querySelector(".login-input__passwordAgain");
const $loginForm = document.querySelector("form");
const $loginErr = document.querySelector(".login-input__error");
const $signupBtn = document.querySelector(".login-input__signup");
const BASICPROFILE =
  "https://user-images.githubusercontent.com/11402468/58876263-7ee5fa80-8708-11e9-8eb7-b5ef5f2966d0.jpeg";

let sameTrue = 0;

$loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!($loginPW.value === $loginPWA.value)) {
    console.log("hello");
    $loginErr.innerHTML = `Password value and Password Check value is different`;
  }
  const IDlist = localStorage.ID;
  const NICKNAME = $loginNickName.value;
  const ID = $loginID.value;
  const PW = $loginPW.value;
  const list = [NICKNAME, ID, PW, BASICPROFILE, "ocher"];
  const real = JSON.parse(IDlist);
  for (let i = 0; i < real.length; i++) {
    if (real[i][0] === NICKNAME) {
      sameTrue = "nick";
      break;
    }
    if (real[i][1] === ID) {
      sameTrue = "ID";
      break;
    }
  }
  if (sameTrue === "nick") {
    $loginErr.innerHTML = "Your Nickname already exist";
    sameTrue = 0;
    return;
  }
  if (sameTrue === "ID") {
    $loginErr.innerHTML = "Your ID already exist";
    sameTrue = 0;
    return;
  }
  real.push(list);
  localStorage.setItem("ID", JSON.stringify(real));
  location.href = "login.html";
});
