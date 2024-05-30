<template>
  <div class="container mx-auto my-5">
    <h2 class="text-center text-2xl font-bold mb-4 text-gray-800">All Episodes</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        class="episode-card relative shadow-md rounded-lg overflow-hidden group"
        v-for="episode in episodes"
        :key="episode.id"
        :style="{ backgroundImage: `url(${episode.image})` }"
        @click="showEpisodeDetails(episode)"
      >
        <div class="absolute inset-0 bg-black bg-opacity-50 transition-all duration-300 group-hover:bg-opacity-70"></div>
        <div class="relative p-4 z-10 text-white">
          <h5 class="text-lg font-semibold">{{ episode.name }}</h5>
          <p class="text-gray-300">Season: {{ episode.episode }}</p>
          <div class="mt-2 flex space-x-3">
            <button @click="likeEpisode(episode)" class="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-500 hover:text-green-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 10.5a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6zM8 7V3a1 1 0 011-1h3.5a1 1 0 011 1v4h1.618a1 1 0 01.957 1.29l-1.933 6.772A1 1 0 0113.213 14H9a1 1 0 01-1-1v-6H8zM6 3.5A1.5 1.5 0 004.5 2h-1A1.5 1.5 0 002 3.5v7A1.5 1.5 0 003.5 12h1A1.5 1.5 0 006 10.5v-7zM13 2h-2.5A.5.5 0 0010 2.5v7a.5.5 0 00.5.5H13v-6a1 1 0 00-1-1H9.5A.5.5 0 009 3V2.5a.5.5 0 01.5-.5H13z"/>
              </svg>
            </button>
            <button @click="dislikeEpisode(episode)" class="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500 hover:text-red-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 9.5a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1H3a1 1 0 01-1-1v-6zM8 13v4a1 1 0 001 1h3.5a1 1 0 001-1v-4h1.618a1 1 0 00.957-1.29l-1.933-6.772A1 1 0 0013.213 6H9a1 1 0 00-1 1v6H8zM6 13.5A1.5 1.5 0 014.5 15h-1A1.5 1.5 0 012 13.5v-7A1.5 1.5 0 013.5 5h1A1.5 1.5 0 016 6.5v7zM13 16h-2.5A.5.5 0 0110 15.5v-7a.5.5 0 01.5-.5H13v6a1 1 0 011 1H9.5a.5.5 0 00-.5.5V16z"/>
              </svg>
            </button>
            <button @click="favoriteEpisode(episode)"
            class="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-500 hover:text-yellow-600" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 3.287a1 1 0 011.902 0l.473 1.337a1 1 0 00.946.69h1.414a1 1 0 01.592 1.806l-1.14.833a1 1 0 00-.364 1.11l.432 1.287a1 1 0 01-1.536 1.11l-1.145-.87a1 1 0 00-1.202 0l-1.145.87a1 1 0 01-1.536-1.11l.432-1.287a1 1 0 00-.364-1.11l-1.14-.833a1 1 0 01.592-1.806h1.414a1 1 0 00.946-.69l.473-1.337z"/>
              </svg>
            </button>
          </div>
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

    const showEpisodeDetails = (episode) => {
      selectedEpisode.value = episode;
    };

    const likeEpisode = (episode) => {
      alert(`Liked episode: ${episode.name}`);
    };

    const dislikeEpisode = (episode) => {
      alert(`Disliked episode: ${episode.name}`);
    };

    const favoriteEpisode = (episode) => {
      alert(`Favorited episode: ${episode.name}`);
    };

    onMounted(fetchData);

    return {
      episodes,
      selectedEpisode,
      showEpisodeDetails,
      likeEpisode,
      dislikeEpisode,
      favoriteEpisode
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