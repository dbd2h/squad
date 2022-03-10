const $postBtn = document.querySelector(".postBtn");

if (sessionStorage.getItem("posting")) {
  sessionStorage.removeItem("posting");
}

$postBtn.addEventListener("click", () => {
  sessionStorage.setItem("posting", true);
  setTimeout(() => (location.href = "index.html"), 100);
});
