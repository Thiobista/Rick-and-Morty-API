import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './main.css'; // Import Tailwind CSS

const app = createApp(App);

app.use(router);

// Comment out the MutationObserver code
// const targetNode = document.getElementById('targetElementId');
// const observer = new MutationObserver((mutationsList, observer) => {
//   mutationsList.forEach((mutation) => {
//     console.log('Mutation type:', mutation.type);
//     console.log('Target node:', mutation.target);
//   });
// });
// const observerOptions = {
//   childList: true,
//   subtree: true,
// };
// if (targetNode) {
//   observer.observe(targetNode, observerOptions);
// } else {
//   console.error('Target node not found.');
// }


app.mount('#app');