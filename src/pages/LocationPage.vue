<template>
  <div>
    <h1 class="text-4xl">Locations</h1>
    <LocationList :locations="locations" />
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
      image: `https://rickandmortyapi.com/api/location/avatar/${location.id}.jpeg`
    }));
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>
