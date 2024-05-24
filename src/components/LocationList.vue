<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4">Locations</h2>
    <!-- Location Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <!-- Location Card -->
      <div
        v-for="location in locations"
        :key="location.id"
        class="location-card relative rounded-lg overflow-hidden bg-cover bg-center"
        :style="{ backgroundImage: `url(${location.image})` }"
      >
        <!-- Location Details -->
        <div class="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50 transition duration-300 opacity-100">
          <h5 class="text-lg font-semibold">{{ location.name }}</h5>
          <p class="mt-2 text-gray-300">Type: {{ location.type }}</p>
          <p class="mt-2 text-gray-300">Dimension: {{ location.dimension }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const locations = ref([]);

onMounted(() => {
  axios.get('https://rickandmortyapi.com/api/location')
    .then(response => {
      locations.value = response.data.results.map(location => ({
        ...location,
        image: `https://rickandmortyapi.com/api/location/avatar/${location.id}.jpeg` // Replace this with actual image URL if available
      }));
    })
    .catch(error => {
      console.error(error);
    });
});
</script>

<style scoped>
/* Add any additional scoped styles here */
.location-card {
  height: 300px; /* Adjust height as needed */
}
</style>