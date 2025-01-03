```javascript
// tailwind.config.js
module.exports = {
  content: ['./*.html', './src/**/*.{js,ts,jsx,tsx}'], // added ./*.html
  theme: {
    extend: {
      colors: {
        'custom-blue': '#007bff',
      },
    },
  },
  plugins: [],
};
```
The solution is to include the html file that contains `bg-custom-blue` class in `content` array of `tailwind.config.js` file.  This ensures that Tailwind processes the HTML file and applies the custom color classes correctly.