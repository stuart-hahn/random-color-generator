// Log LinkedIn message to the console
var logLinkedInMessage = function () {
    console.log("View my LinkedIn: https://www.linkedin.com/in/stuart-a-hahn/");
};
// Generate a random number between 0 and 255 inclusive
var getRandomNum = function () { return Math.floor(Math.random() * 256); };
// Generate a random RGB color string
var generateRandomColor = function () {
    return "rgb(".concat(getRandomNum(), ", ").concat(getRandomNum(), ", ").concat(getRandomNum(), ")");
};
// Update background color and display the color value in an h1
var updateBackgroundColor = function () {
    // Define body as an HTMLBodyElement to ensure type safety
    var body = document.querySelector("body");
    // Define h1 as an HTMLHeadingElement to be more specific
    var h1 = document.querySelector("h1");
    if (body && h1) {
        // TypeScript helps ensure these elements are not null
        var newColor = generateRandomColor();
        body.style.backgroundColor = newColor;
        h1.innerText = "Background Color: ".concat(newColor);
    }
};
// Initialize the application by adding an event listener
var init = function () {
    var colorGeneratorButton = document.querySelector("#color-generator");
    if (colorGeneratorButton) {
        // Ensure the button exists before adding an event listener
        colorGeneratorButton.addEventListener("click", updateBackgroundColor);
    }
    // Optional: Log LinkedIn message on page load
    logLinkedInMessage();
};
// Initialize the app
init();
