const imgRec = ["imgRec1", "imgRec2", "imgRec3"];
const imgSqu = [
  "imgSqu1",
  "imgSqu2",
  "imgSqu3",
  "imgSqu4",
  "imgSqu5",
  "imgSqu6",
  "imgSqu7",
  "imgSqu8",
  "imgSqu9",
];

function randomNumber(i) {
  const number = Math.floor(Math.random() * i);
  return number;
}

function pictureBox() {
  const caseNum = randomNumber(3);
  if (caseNum == 0) {
  }
  console.log(caseNum);
}
pictureBox();
