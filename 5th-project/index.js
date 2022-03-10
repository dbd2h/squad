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

const iconURL =
  "https://s.pstatic.net/static/www/m-new/uit/img/sp_main_search_aa6fc0f7.png";

$headMenu.style.background = `url(${iconURL}) -49px -145px`;
$headMenu.style.backgroundSize = "323px 234px";
