const $headMenu = document.querySelector("header>div:first-child>a>span");
const $headPay = document.querySelector(
  "header>div:last-child>a:nth-child(1)>span"
);
const $headAlarm = document.querySelector(
  "header>div:last-child>a:nth-child(2)>span"
);
const $headProfile = document.querySelector(
  "header>div:last-child>a:nth-child(3)>span"
);
const $searchLogo = document.querySelector(".search-inner>a:first-child>span");
const $searchMike = document.querySelector(".search-inner>a:last-child>span");
const $bannerX = document.querySelector(".banner>span");
const $nowTitle = document.querySelector(
  ".now>div:first-child>span:first-child"
);

const iconURL =
  "https://s.pstatic.net/static/www/m-new/uit/img/sp_main_search_aa6fc0f7.png";
const xURL =
  "https://s.pstatic.net/static/www/m-new/uit/img/sp_search_461e22e5.png";

const nowList = document.querySelectorAll(".logo-text>img");

$headMenu.style.background = `url(${iconURL}) -49px -145px`;
$headMenu.style.backgroundSize = "323px 234px";

$headPay.style.background = `url(${iconURL}) -90px -194px`;
$headPay.style.backgroundSize = "323px 234px";

$headAlarm.style.background = `url(${iconURL}) -45px -194px`;
$headAlarm.style.backgroundSize = "323px 234px";

$headProfile.style.background = `url(${iconURL}) -261px -76px`;
$headProfile.style.backgroundSize = "323px 234px";

$searchLogo.style.background = `url(${iconURL}) 0 -194px`;
$searchLogo.style.backgroundSize = "323px 234px";
$searchLogo.style.backgroundColor = "#03c75a";

$searchMike.style.background = `url(${iconURL}) -174px -194px`;
$searchMike.style.backgroundSize = "323px 234px";
$searchMike.style.backgroundColor = "#03c75a";

$bannerX.style.background = `url(${xURL}) -58px -360px`;
$bannerX.style.backgroundSize = "409px 384px";

$nowTitle.style.background = `url(${xURL}) -53px -319px`;
$nowTitle.style.backgroundSize = "409px 384px";

const imageSizing = () => {
  for (let i = 0; i < nowList.length; i++) {
    setTimeout(() => {
      const logoText = nowList[i];
      console.log(logoText);
      const width = logoText.width / 6.83;
      const height = logoText.height / 6.83;
      console.log(logoText.width, logoText.height);
      console.log(logoText, width, height);
      logoText.style.width = `${width}px`;
      logoText.style.height = `${height}px`;
    }, 50 * i);
  }
};

imageSizing();
