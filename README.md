# Tailwind CSS Custom Colors Not Working

This repository demonstrates a bug where custom colors defined in `tailwind.config.js` are not applied correctly in the HTML file.  The `bg-custom-blue` class is not rendering the expected blue color.

## Bug Description:

Custom colors are defined in the `tailwind.config.js` file.  The build process completes without errors, but the custom color class does not work when used in an HTML element.

## Steps to Reproduce:

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run build` to generate the Tailwind CSS output.
4. Open `index.html` in a web browser.

You will observe that the div with the `bg-custom-blue` class does not display the expected blue color.

## Solution:

The solution is provided in the `bugSolution.js` file. Refer to the file for the corrected code.  It involves ensuring that the `content` property in `tailwind.config.js` correctly includes all the files where the custom classes are used.