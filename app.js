const logLinkedInMessage = () => {
  console.log("View my LinkedIn: https://www.linkedin.com/in/stuart-a-hahn/");
};

const getRandomNum = () => Math.floor(Math.random() * 256);

const generateRandomColor = () =>
  `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;

const updateBackgroundColor = () => {
  const body = document.querySelector("body");
  const h1 = document.querySelector("h1");

  const newColor = generateRandomColor();
  body.style.backgroundColor = newColor;
  h1.innerText = `Background Color: ${newColor}`;
};

const init = () => {
  const colorGeneratorButton = document.querySelector("#color-generator");
  colorGeneratorButton.addEventListener("click", updateBackgroundColor);

  // Optional: Log LinkedIn message on page load
  logLinkedInMessage();
};

// Initialize the app
init();
