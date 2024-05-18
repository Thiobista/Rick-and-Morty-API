// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  // Add other routes here if needed
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
