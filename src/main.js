// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css'; // Import Tailwind CSS

// Create the Vue app instance
const app = createApp(App);

// Use Vue Router
app.use(router);

// Mount the app to the DOM
app.mount('#app');
// Identify the target DOM element
const targetNode = document.getElementById('targetElementId');

// Create a new observer instance
const observer = new MutationObserver((mutationsList, observer) => {
  // Handle mutations in the callback function
  mutationsList.forEach((mutation) => {
    console.log('Mutation type:', mutation.type);
    console.log('Target node:', mutation.target);
    // Handle mutation...
  });
});

// Configure observer options (optional)
const observerOptions = {
  childList: true, // Observe changes to the child nodes of the target node
  subtree: true, // Observe changes to the entire subtree of the target node
  // Add other options as needed...
};

// Start observing mutations on the target DOM subtree
if (targetNode) {
  observer.observe(targetNode, observerOptions);
} else {
  console.error('Target node not found.');
}

