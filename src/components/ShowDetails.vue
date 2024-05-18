<template>
  <div class="container mx-auto p-6">
    <div v-if="show" class="bg-white shadow-md rounded-lg overflow-hidden">
      <!-- Show Image -->
      <div class="relative h-64 overflow-hidden">
        <img :src="show.image" alt="Show Image" class="absolute inset-0 w-full h-full object-cover rounded-t-lg transition-transform duration-500 transform hover:scale-105">
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <!-- Show Details -->
      <div class="p-6">
        <h2 class="text-3xl font-bold text-gray-800">{{ show.title }}</h2>
        <p class="mt-4 text-lg text-gray-600">{{ show.description }}</p>

        <!-- Genres -->
        <div class="mt-4 flex flex-wrap space-x-2">
          <span v-for="genre in show.genres" :key="genre" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-300" @click="navigateToGenre(genre)">
            {{ genre }}
          </span>
        </div>

        <!-- Add to Watch Later Button -->
        <div class="mt-6 flex items-center">
          <button @click="addToWatchLater" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">
            Add to Watch Later
          </button>
          <span class="ml-4 text-gray-600 cursor-pointer hover:underline" @click="toggleFavorite">
            {{ favorite ? 'Remove from Favorites' : 'Add to Favorites' }}
          </span>
        </div>

        <!-- Additional Details -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-800">Creators</h3>
          <p class="mt-2 text-base text-gray-600">Dan Harmon, Justin Roiland</p>
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-800">Stars</h3>
          <p class="mt-2 text-base text-gray-600">Justin Roiland, Chris Parnell, Spencer Grammer</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const show = ref({
  title: 'Rick and Morty',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  description: `An animated series that follows the exploits of a super scientist and his not-so-bright grandson.`,
  genres: ['Animation', 'Comedy', 'Adventure']
});

// Toggle favorite state
const favorite = ref(false);
const toggleFavorite = () => {
  favorite.value = !favorite.value;
};

// Add to Watch Later logic
const addToWatchLater = () => {
  alert('Added to Watch Later!');
};

// Navigate to genre route
const navigateToGenre = (genre) => {
  router.push(`/genre/${genre}`);
};
</script>

<style scoped>
/* Scoped styles for any additional customization */
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
