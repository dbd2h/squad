const $fileInput = document.querySelector("#myFileInput");
const IDlist = localStorage.ID;
const $img = document.querySelector("img");
const $nickName = document.querySelector("body>div:nth-child(2)>span");
const $button = document.querySelector(".profile-button");
const $check1 = document.querySelector(
  "body>div:nth-child(2)>div>input:nth-child(1)"
);
const $check2 = document.querySelector(
  "body>div:nth-child(2)>div>input:nth-child(3)"
);
const $check3 = document.querySelector(
  "body>div:nth-child(2)>div>input:nth-child(5)"
);
const real = JSON.parse(IDlist);
const PLAYER = sessionStorage.player;
const NUMBER = sessionStorage.number;
const BASICPROFILE =
  "https://user-images.githubusercontent.com/11402468/58876263-7ee5fa80-8708-11e9-8eb7-b5ef5f2966d0.jpeg";
let imageURL = real[NUMBER][3];
let currentColor = real[NUMBER][4];

$fileInput.addEventListener("change", () => {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imageURL = reader.result;
    $img.setAttribute("src", imageURL);
  });
  if ($fileInput.files.length !== 0) {
    reader.readAsDataURL($fileInput.files[0]);
  } else {
    $img.setAttribute("src", BASICPROFILE);
    imageURL = BASICPROFILE;
  }
});

$nickName.innerHTML = PLAYER;

$check1.addEventListener("click", () => {
  currentColor = "ocher";
  $nickName.style.color = "var(--ocher)";
});
$check2.addEventListener("click", () => {
  currentColor = "green";
  $nickName.style.color = "green";
});
$check3.addEventListener("click", () => {
  currentColor = "red";
  $nickName.style.color = "red";
});

if (currentColor == "ocher") {
  $check1.click();
} else if (currentColor == "green") {
  $check2.click();
} else if (currentColor == "red") {
  $check3.click();
}

$img.setAttribute("src", real[NUMBER][3]);

function checkOnlyOne(element) {
  const checkboxes = document.getElementsByName("color");

  checkboxes.forEach((cb) => {
    cb.checked = false;
  });

  element.checked = true;
}

$button.addEventListener("click", () => {
  real[NUMBER][3] = imageURL;
  real[NUMBER][4] = currentColor;
  localStorage.removeItem("ID");
  localStorage.setItem("ID", JSON.stringify(real));
  location.href = "index.html";
});
