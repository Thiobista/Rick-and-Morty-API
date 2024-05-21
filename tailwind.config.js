// tailwind.config.js

module.exports = {
  content: [
    './index.html', // Path to your main HTML file
    './src/**/*.{vue,js,ts,jsx,tsx}', // Paths to your Vue, JavaScript, TypeScript, and JSX files
    './components/**/*.{vue,js,ts,jsx,tsx}', // If you have a components directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
