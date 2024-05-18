<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4">All Episodes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div class="bg-white shadow-md rounded-lg p-4" v-for="episode in episodes" :key="episode.id">
        <h5 class="text-lg font-semibold">{{ episode.name }}</h5>
        <p class="text-gray-600">Season: {{ episode.episode }}</p>
        <button
          class="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          @click="showEpisodeDetails(episode)"
        >
          View Details
        </button>
      </div>
    </div>

    <!-- Modal for episode details -->
    <div
      v-if="selectedEpisode"
      class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div class="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h5 class="text-xl font-bold mb-2">{{ selectedEpisode.name }}</h5>
        <p><strong>Episode:</strong> {{ selectedEpisode.episode }}</p>
        <p><strong>Air Date:</strong> {{ selectedEpisode.air_date }}</p>
        <p><strong>Characters:</strong></p>
        <ul class="list-disc pl-5">
          <li v-for="character in selectedEpisode.characters" :key="character">
            {{ character }}
          </li>
        </ul>
        <button
          class="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          @click="selectedEpisode = null"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EpisodeList',
  data() {
    return {
      episodes: [],
      selectedEpisode: null,
    };
  },
  mounted() {
    console.log('EpisodeList component mounted');
    axios.get('https://rickandmortyapi.com/api/episode')
      .then(response => {
        this.episodes = response.data.results;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    showEpisodeDetails(episode) {
      this.selectedEpisode = episode;
    },
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
