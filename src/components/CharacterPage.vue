<template>
<<<<<<< HEAD
    <div class="container mx-auto my-5">
      <h2 class="text-center text-2xl font-bold mb-4 text-gray-800">Characters</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="character in characters"
          :key="character.id"
          class="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
        >
          <img :src="character.image" alt="character image" class="w-24 h-24 object-cover rounded-full border-2 border-gray-300" />
          <div>
            <h5 class="text-lg font-semibold text-gray-800">{{ character.name }}</h5>
            <p class="text-gray-600 text-sm">Status: {{ character.status }}</p>
            <p class="text-gray-600 text-sm">Species: {{ character.species }}</p>
            <p class="text-gray-600 text-sm">Gender: {{ character.gender }}</p>
            <p class="text-gray-600 text-sm">Origin: {{ character.origin.name }}</p>
            <div class="flex space-x-1 mt-2">
              <span
                v-for="star in 5"
                :key="star"
                class="cursor-pointer"
                :class="{
                  'text-yellow-500': character.rating >= star,
                  'text-gray-400': character.rating < star
                }"
                @click="rateCharacter(character, star)"
              >
                ★
              </span>
            </div>
=======
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4 text-gray-800">Characters</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="character in characters"
        :key="character.id"
        class="bg-white shadow-md rounded-lg p-4 flex items-center space-x-4"
      >
        <img :src="character.image" alt="character image" class="w-24 h-24 object-cover rounded-full border-2 border-gray-300" />
        <div>
          <h5 class="text-lg font-semibold text-gray-800">{{ character.name }}</h5>
          <p class="text-gray-600 text-sm">Status: {{ character.status }}</p>
          <p class="text-gray-600 text-sm">Species: {{ character.species }}</p>
          <p class="text-gray-600 text-sm">Gender: {{ character.gender }}</p>
          <p class="text-gray-600 text-sm">Origin: {{ character.origin.name }}</p>
          <div class="flex space-x-1 mt-2">
            <span
              v-for="star in 5"
              :key="star"
              class="cursor-pointer"
              :class="{
                'text-yellow-500': character.rating >= star,
                'text-gray-400': character.rating < star
              }"
              @click="rateCharacter(character, star)"
            >
              ★
            </span>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  
  // Define reactive properties
  const characters = ref([]);
  
  // Fetch characters and their episodes
  const fetchCharacters = async () => {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character');
      const charactersData = response.data.results;
      
      const episodePromises = charactersData.map(async (character) => {
        const episodeUrls = character.episode;
        const episodeResponses = await Promise.all(episodeUrls.map(url => axios.get(url)));
        
        character.episodeList = episodeResponses.map(res => ({
          id: res.data.id,
          name: res.data.name,
          episode: res.data.episode
        }));
        character.rating = 0; // Initialize rating for each character
        return character;
      });
  
      characters.value = await Promise.all(episodePromises);
    } catch (error) {
      console.error(error);
    }
  };
  
  // Call fetchCharacters on component mount
  onMounted(() => {
    fetchCharacters();
  });
  
  // Define the function to rate a character
  const rateCharacter = (character, rating) => {
    character.rating = rating;
  };
  </script>
  
  <style scoped>
  /* Add any additional scoped styles here */
  </style>
=======
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define reactive properties
const characters = ref([]);

// Fetch characters and their episodes
const fetchCharacters = async () => {
  try {
    const response = await axios.get('https://rickandmortyapi.com/api/character');
    const charactersData = response.data.results;
    
    const episodePromises = charactersData.map(async (character) => {
      const episodeUrls = character.episode;
      const episodeResponses = await Promise.all(episodeUrls.map(url => axios.get(url)));
      
      character.episodeList = episodeResponses.map(res => ({
        id: res.data.id,
        name: res.data.name,
        episode: res.data.episode
      }));
      character.rating = 0; // Initialize rating for each character
      return character;
    });

    characters.value = await Promise.all(episodePromises);
  } catch (error) {
    console.error(error);
  }
};

// Call fetchCharacters on component mount
onMounted(() => {
  fetchCharacters();
});

// Define the function to rate a character
const rateCharacter = (character, rating) => {
  character.rating = rating;
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
