<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4">Characters</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="character in characters"
        :key="character.id"
        class="bg-white shadow-md rounded-lg p-4"
      >
        <img :src="character.image" alt="character image" class="w-full h-48 object-cover rounded-t-lg" />
        <div class="p-2">
          <h5 class="text-lg font-semibold">{{ character.name }}</h5>
          <p class="text-gray-600">Status: {{ character.status }}</p>
          <p class="text-gray-600">Species: {{ character.species }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'CharacterPage',
  data() {
    return {
      characters: [],
    };
  },
  mounted() {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => {
        this.characters = response.data.results;
      })
      .catch(error => {
        console.error(error);
      });
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
