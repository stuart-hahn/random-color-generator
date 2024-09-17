# Random Color Generator App

This app allows users to change the background color of a webpage to a randomly generated RGB color with a click of a button. The current background color is also displayed on the page as a helpful reference.

## Features

- **Random Color Generation**: Generates a random RGB color each time the button is clicked.
- **Interactive UI**: Clicking the "Change Color" button updates the background and displays the new RGB color code.
- **JavaScript to TypeScript Migration**: The app has been refactored using TypeScript for type safety and better development experience.

## Installation

### Prerequisites

Make sure you have Node.js installed on your machine.

### Steps to Set Up:

1. Clone the repository:

   ```bash
   git clone https://github.com/stuart-hahn/random-color-generator-app.git
   cd random-color-generator-app
   ```

2. Install TypeScript globally if you haven’t already:

   ```bash
   npm install -g typescript
   ```

3. Compile the TypeScript file to JavaScript:

   ```bash
   tsc app.ts
   ```

4. Open `index.html` in a web browser to see the app in action.

## Usage

- On page load, click the **"Change Color"** button to generate and apply a random RGB background color.
- The RGB color value is displayed as text on the page for reference.

## File Structure

- `app.ts`: TypeScript source file containing the logic for random color generation and event handling.
- `app.js`: Compiled JavaScript file, generated from `app.ts`, which is included in the HTML for browser compatibility.
- `index.html`: Simple HTML file to display the button and link to the JavaScript.

## Future Improvements

Potential updates could include:

- Persisting the background color using `localStorage` so that the color remains the same after a page reload.
- Adding additional UI elements, such as a color history or color picker.

## License

This project is licensed under the MIT License.
