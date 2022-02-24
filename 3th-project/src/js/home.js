const $button = document.querySelector("button");
const $login = document.querySelector(".profile>a");

$button.addEventListener("click", () => {
  if ($login.innerHTML === "login") {
    location.href = "/login";
  } else {
    location.href = "/post";
  }
});
