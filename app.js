console.log("View my LinkedIn: https://www.linkedin.com/in/stuart-a-hahn/");

const getRandomNum = () => {
  return Math.floor(Math.random() * 255) + 1;
};

const getRandomColor = () =>
  `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;

const setBgColor = () => {
  const body = document.querySelector("body");
  const h1 = document.querySelector("h1");
  body.style.backgroundColor = getRandomColor();
  h1.innerText = body.style.backgroundColor;
};

const colorGeneratorButton = document.querySelector("#color-generator");
colorGeneratorButton.addEventListener("click", setBgColor);
