// Log LinkedIn message to the console
const logLinkedInMessage = (): void => {
  console.log("View my LinkedIn: https://www.linkedin.com/in/stuart-a-hahn/");
};

// Generate a random number between 0 and 255 inclusive
const getRandomNum = (): number => Math.floor(Math.random() * 256);

// Generate a random RGB color string
const generateRandomColor = (): string =>
  `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;

// Update background color and display the color value in an h1
const updateBackgroundColor = (): void => {
  // Define body as an HTMLBodyElement to ensure type safety
  const body: HTMLBodyElement | null = document.querySelector("body");
  // Define h1 as an HTMLHeadingElement to be more specific
  const h1: HTMLHeadingElement | null = document.querySelector("h1");

  if (body && h1) {
    // TypeScript helps ensure these elements are not null
    const newColor: string = generateRandomColor();
    body.style.backgroundColor = newColor;
    h1.innerText = `Background Color: ${newColor}`;
  }
};

// Initialize the application by adding an event listener
const init = (): void => {
  const colorGeneratorButton: HTMLButtonElement | null =
    document.querySelector("#color-generator");

  if (colorGeneratorButton) {
    // Ensure the button exists before adding an event listener
    colorGeneratorButton.addEventListener("click", updateBackgroundColor);
  }

  // Optional: Log LinkedIn message on page load
  logLinkedInMessage();
};

// Initialize the app
init();
