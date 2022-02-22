const $login = document.querySelector(".login>a");
const $profile = document.querySelector(".login>div");
const $profileImg = document.querySelector(".login>div>img");
const $profileBtn = document.querySelector(".login>div>div>a");
const $logoutBtn = document.querySelector(".login>div>div>span");
const $writeX = document.querySelector("body>.write-space>div>span");
const $writeBtn = document.querySelector("body>button");
const $writeSpace = document.querySelector("body>.write-space");
const $writeSpaceTitle = document.querySelector(".write-space>form>input");
const $writeSpaceContent = document.querySelector(".write-space>form>textarea");
const $table = document.querySelector(".main__table>tbody");
const USERID_KEY = "ID";
if (localStorage.getItem(USERID_KEY) === null) {
  localStorage.setItem(USERID_KEY, JSON.stringify([]));
}
if (localStorage.getItem("post") === null) {
  localStorage.setItem("post", JSON.stringify([]));
}
if (localStorage.getItem("postNumber") === null) {
  localStorage.setItem("postNumber", JSON.stringify(0));
}
const count = parseInt(localStorage.getItem("postNumber"));
const IDlist = localStorage.ID;
const real = JSON.parse(IDlist);
const postList = JSON.parse(localStorage.post);

const PLAYER = sessionStorage.player;
const NUMBER = sessionStorage.number;

if (sessionStorage.getItem("player") !== null) {
  $login.classList.add("hidden");
  $profile.classList.remove("hidden");
}

$profileImg.addEventListener("click", () => {
  document.querySelector(".login>div>div").classList.toggle("hidden");
});

$logoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("player");
  location.reload();
});
if (IDlist !== "[]" && NUMBER !== null) {
  $profileImg.setAttribute("src", real[NUMBER][3]);
}
$writeBtn.addEventListener("click", () => {
  $writeSpace.classList.remove("hidden");
});
$writeX.addEventListener("click", () => {
  $writeSpace.classList.add("hidden");
});

$writeSpace.addEventListener("submit", (event) => {
  event.preventDefault();
  const TITLE = $writeSpaceTitle.value;
  const CONTENT = $writeSpaceContent.value;
  const date = new Date();
  const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const infList = [count, TITLE, sessionStorage.player, day, NUMBER, CONTENT];
  postList.push(infList);
  localStorage.removeItem("post");
  localStorage.setItem("post", JSON.stringify(postList));
  localStorage.removeItem("postNumber");
  localStorage.setItem("postNumber", JSON.stringify(count + 1));
  location.reload();
});

for (let i = 0; i < count; i++) {
  const $tr = document.createElement("tr");
  const $td1 = document.createElement("td");
  const $a = document.createElement("a");
  const $td2 = document.createElement("td");
  const $td3 = document.createElement("td");
  const $img = document.createElement("img");
  const $spanNick = document.createElement("span");
  const $div = document.createElement("div");
  $img.setAttribute("src", real[postList[i][4]][3]);
  $div.append($img);
  $spanNick.innerHTML = postList[i][2];
  if (real[postList[i][4]][4] === "ocher") {
    $spanNick.style.color = "var(--ocher)";
    console.log("a");
  } else if (real[postList[i][4]][4] === "green") {
    $spanNick.style.color = "green";
    console.log("a");
  } else if (real[postList[i][4]][4] === "red") {
    $spanNick.style.color = "red";
    console.log("a");
  }
  $div.append($spanNick);
  $td1.append($div);
  const $span = document.createElement("span");
  $span.innerHTML = postList[i][1];

  $span.addEventListener("click", () => {
    sessionStorage.setItem("blogNum", postList[i][0]);
    location.href = "blog.html";
  });
  $td2.append($span);
  $td3.innerHTML = postList[i][3];
  $tr.append($td1);
  $tr.append($td2);
  $tr.append($td3);
  $table.append($tr);
}
//[번호 제목 글쓴이 작성일 글쓴이번호 내용]
