<template>
  <div>
<<<<<<< HEAD
    <h1 class="text-4xl text-center my-5">Locations</h1>
=======
    <h1 class="text-4xl">Locations</h1>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
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
<<<<<<< HEAD
      image: `https://rickandmortyapi.com/api/character/avatar/${Math.floor(Math.random() * 826) + 1}.jpeg`
=======
      image: `https://rickandmortyapi.com/api/location/avatar/${location.id}.jpeg`
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
    }));
  } catch (error) {
    console.error(error);
  }
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
