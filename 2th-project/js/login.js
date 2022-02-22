const $loginID = document.querySelector(".login-input__id");
const $loginPW = document.querySelector(".login-input__password");
const $loginForm = document.querySelector("form");
const $loginErr = document.querySelector(".login-input__error");
const $loginBtn = document.querySelector(".login-input__login");
const $signupBtn = document.querySelector(".login-input__signup");
const IDlist = localStorage.getItem("ID");
const real = JSON.parse(IDlist);

function exist(list) {
  for (let i = 0; i < real.length; i++) {
    if (list[0] === real[i][1] && list[1] === real[i][2]) {
      return [real[i][0], i];
    }
  }
  return [false, false];
}

$loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (sessionStorage.player) {
    location.href = "index.html";
  }
  const ID = $loginID.value;
  const PW = $loginPW.value;
  const [nickName, number] = exist([ID, PW]);
  if (nickName) {
    sessionStorage.setItem("player", nickName);
    sessionStorage.setItem("number", number);
    location.href = "index.html";
  } else {
    $loginErr.innerHTML = "Your ID or PW doesn`t exist";
  }
});

$signupBtn.addEventListener("click", () => {
  location.href = "signup.html";
});
