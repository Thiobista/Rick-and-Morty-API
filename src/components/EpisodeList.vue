<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4 text-gray-800">All Episodes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        class="episode-card relative shadow-md rounded-lg overflow-hidden group"
        v-for="episode in episodes"
        :key="episode.id"
        :style="{ backgroundImage: `url(${episode.image})` }"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-70"></div>
        <div class="relative p-4 z-10 text-white">
          <h5 class="text-lg font-semibold">{{ episode.name }}</h5>
          <p class="text-gray-200">Season: {{ episode.episode }}</p>
          <button 
            class="mt-4 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 focus:outline-none"
            @click="fetchEpisodeDetails(episode.id)"
          >
            Details
          </button>
        </div>
      </div>
    </div>

    <!-- Modal for episode details -->
    <div v-if="selectedEpisode" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
      <div class="episode-details-panel bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full h-full overflow-y-auto transition-transform transform translate-x-0">
        <button
          class="absolute top-4 right-4 text-red-500 hover:text-red-600"
          @click="selectedEpisode = null"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <h5 class="text-xl font-bold mb-2">{{ selectedEpisode.name }}</h5>
        <p><strong class="font-bold text-gray-800">Episode:</strong> <span class="text-gray-700">{{ selectedEpisode.episode }}</span></p>
        <p><strong class="font-bold text-gray-800">Air Date:</strong> <span class="text-gray-700">{{ selectedEpisode.air_date }}</span></p>
        <p><strong class="font-bold text-gray-800">Created:</strong> <span class="text-gray-700">{{ selectedEpisode.created }}</span></p>
        <h6 class="mt-4 mb-2 text-lg font-bold">Characters:</h6>
        <div v-if="selectedEpisode.characters.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="character in selectedEpisode.characters" :key="character.id" class="flex items-center bg-gray-100 p-4 rounded-lg shadow">
            <img :src="character.image" alt="Character Image" class="w-16 h-16 rounded-full mr-4" @error="handleImageError(character)">
            <div>
              <h6 class="text-lg font-semibold text-gray-800">{{ character.name }}</h6>
              <p class="text-gray-700"><strong>Status:</strong> {{ character.status }}</p>
              <p class="text-gray-700"><strong>Species:</strong> {{ character.species }}</p>
              <p class="text-gray-700"><strong>Gender:</strong> {{ character.gender }}</p>
              <p class="text-gray-700"><strong>Episodes:</strong> {{ character.episodeCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

export default {
  name: 'EpisodeList',
  setup() {
    const episodes = ref([]);
    const selectedEpisode = ref(null);

    const fetchEpisodes = () => {
      axios.get('https://rickandmortyapi.com/api/episode')
        .then(response => {
          episodes.value = response.data.results.map(episode => ({
            id: episode.id,
            name: episode.name,
            episode: episode.episode,
            air_date: episode.air_date,
            created: episode.created,
            image: `https://rickandmortyapi.com/api/character/avatar/${Math.floor(Math.random() * 826) + 1}.jpeg`
          }));
        })
        .catch(error => {
          console.error(error);
        });
    };

    const fetchEpisodeDetails = (episodeId) => {
      axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`)
        .then(async response => {
          const episode = response.data;
          const characterUrls = episode.characters;
          const characterPromises = characterUrls.map(url => axios.get(url));
          const characterResponses = await Promise.all(characterPromises);
          const characters = characterResponses.map(res => res.data);
          selectedEpisode.value = {
            id: episode.id,
            name: episode.name,
            episode: episode.episode,
            air_date: episode.air_date,
            created: episode.created,
            characters: characters.map(character => ({
              id: character.id,
              name: character.name,
              status: character.status,
              species: character.species,
              gender: character.gender,
              image: character.image,
              episodeCount: character.episode.length
            }))
          };
        })
        .catch(error => {
          console.error(error);
        });
    };

    const handleImageError = (character) => {
      // Replace with a placeholder image or handle the error as needed
      character.image = 'https://via.placeholder.com/150';
    };

    fetchEpisodes();

    return {
      episodes,
      selectedEpisode,
      fetchEpisodeDetails,
      handleImageError
    };
  }
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

.episode-details-panel h6 {
  color: #4A5568; /* Make headings more visible */
}

.episode-details-panel p {
  margin-bottom: 0.5rem;
}
</style>