// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import CharacterPage from './pages/CharacterPage.vue';
import EpisodePage from './pages/EpisodePage.vue';
import LocationPage from './pages/LocationPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/characters', component: CharacterPage },
  { path: '/episodes', component: EpisodePage },
  { path: '/locations', component: LocationPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
