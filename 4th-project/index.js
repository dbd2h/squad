const $button = document.querySelector(".button");

$button.addEventListener("mousedown", (event) => {
  const btnPosition = event.target.getBoundingClientRect();
  const btnX = btnPosition.left;
  const btnY = btnPosition.top;
  const btnWidth = btnPosition.width;
  const btnHeight = btnPosition.height;
  console.log(btnX, btnY);
});

//원리: 안에 ripple 클래스를 단 div를 하나 만들어주고 클릭하면 스케일이 버튼의
// 크기로 해주며, 색깔도 변하게 하는 거
