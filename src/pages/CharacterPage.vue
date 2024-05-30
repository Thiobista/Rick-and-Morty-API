<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4 text-gray-800">Characters</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="character in characters"
        :key="character.id"
        class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4"
      >
        <img :src="character.image" alt="character image" class="w-24 h-24 object-cover rounded-full border-2 border-gray-300" />
        <div class="text-center">
          <h5 class="text-lg font-semibold text-gray-800">{{ character.name }}</h5>
          <p class="text-gray-600 text-sm">Status: {{ character.status }}</p>
          <p class="text-gray-600 text-sm">Species: {{ character.species }}</p>
          <p class="text-gray-600 text-sm">Gender: {{ character.gender }}</p>
          <p class="text-gray-600 text-sm">Origin: {{ character.origin.name }}</p>
          <p class="text-gray-600 text-sm">Last Known Location: {{ character.location.name }}</p>
          <div class="flex justify-center space-x-1 mt-2">
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
          <button
            @click="toggleEpisodeDetails(character)"
            class="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
          >
            Show Episodes
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for episode details -->
    <div v-if="selectedCharacter" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
      <div class="episode-details-panel bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full h-full overflow-y-auto transition-transform transform translate-x-0">
        <button
          class="absolute top-4 right-4 text-red-500 hover:text-red-600"
          @click="selectedCharacter = null"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h5 class="text-xl font-bold mb-2">{{ selectedCharacter.name }}'s Episodes</h5>
        <div v-if="selectedCharacter.episodeList.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="episode in selectedCharacter.episodeList" :key="episode.id" class="episode-card relative shadow-md rounded-lg overflow-hidden group" :style="{ backgroundImage: `url(${episode.image})` }">
            <div class="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-70"></div>
            <div class="relative p-4 z-10 text-white">
              <h5 class="text-lg font-semibold">{{ episode.name }}</h5>
              <p class="text-gray-200">Season: {{ episode.episode }}</p>
              <p class="text-gray-200">Air Date: {{ episode.air_date }}</p>
              <p class="text-gray-200">Created: {{ episode.created }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-8">
      <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">Figma</a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">GitHub</a>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// Define reactive properties
const characters = ref([]);
const selectedCharacter = ref(null);

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
        episode: res.data.episode,
        air_date: res.data.air_date,
        created: res.data.created,
        image: `https://rickandmortyapi.com/api/character/avatar/${Math.floor(Math.random() * 826) + 1}.jpeg`
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

// Toggle the display of episode details
const toggleEpisodeDetails = (character) => {
  selectedCharacter.value = character;
};
</script>

<style scoped>
.episode-card {
  height: 250px;
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 16px;
}

.episode-details-panel {
  transition: transform 0.3s ease-out;
}

.episode-details-panel h5 {
  color: #4A5568; /* Make headings more visible */
}

.episode-details-panel p {
  margin-bottom: 0.5rem;
}
</style>
