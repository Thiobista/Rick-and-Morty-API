<template>
  <div>
    <h1 class="text-4xl text-center my-5">Locations</h1>
    <LocationList :locations="locations" />
  </div>
  <div class="flex justify-center mt-8">
      <a href="https://www.figma.com/design/nQNUSmr9YEPTMWRaoY2eK2/Untitled?node-id=0-1&t=6DNc0ysR1Gf0Y0WR-1" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">Figma</a>
      <a href="https://github.com/Thiobista/Rick-and-Morty-API.git" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">GitHub</a>
    </div>
</template>

<script setup>
import LocationList from '../components/LocationList.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

const locations = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/location');
    locations.value = response.data.results.map(location => ({
      ...location,
      image: `https://rickandmortyapi.com/api/character/avatar/${Math.floor(Math.random() * 826) + 1}.jpeg` // Use character images as placeholders
    }));
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
