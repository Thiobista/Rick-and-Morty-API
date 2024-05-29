<template>
<<<<<<< HEAD
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
            <span v-for="genre in show.genres" :key="genre" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300">
              {{ genre }}
            </span>
          </div>
  
          <!-- Add to Watch Later and Add to Favorites Buttons -->
          <div class="mt-6 flex items-center space-x-4">
            <button @click="addToWatchLater" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">
              Add to Watch Later
            </button>
            <button @click="toggleFavorite" :class="{ 'bg-green-500': favorite, 'hover:bg-green-600': !favorite }" class="hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 transition duration-300">
              {{ favorite ? 'Remove from Favorites' : 'Add to Favorites' }}
            </button>
          </div>
  
          <!-- Additional Details -->
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-gray-800">Creators</h3>
            <div class="mt-2 flex space-x-4">
              <div v-for="(creator, index) in show.creators" :key="index" class="creator-card flex items-center space-x-2 transform hover:scale-105 transition duration-300">
                <img :src="creator.image" :alt="creator.name" class="w-12 h-12 rounded-full object-cover">
                <p class="text-base text-gray-600">{{ creator.name }}</p>
              </div>
            </div>
          </div>
          <div class="mt-6">
            <h3 class="text-xl font-semibold text-gray-800">Stars</h3>
            <div class="mt-2 flex space-x-4">
              <div v-for="(star, index) in show.stars" :key="index" class="star-card flex items-center space-x-2 transform hover:scale-105 transition duration-300">
                <img :src="star.image" :alt="star.name" class="w-12 h-12 rounded-full object-cover">
                <p class="text-base text-gray-600">{{ star.name }}</p>
              </div>
=======
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
          <span v-for="genre in show.genres" :key="genre" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-300 transition duration-300">
            {{ genre }}
          </span>
        </div>

        <!-- Add to Watch Later and Add to Favorites Buttons -->
        <div class="mt-6 flex items-center space-x-4">
          <button @click="addToWatchLater" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-300 transition duration-300">
            Add to Watch Later
          </button>
          <button @click="toggleFavorite" :class="{ 'bg-green-500': favorite, 'hover:bg-green-600': !favorite }" class="hover:bg-red-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-red-300 transition duration-300">
            {{ favorite ? 'Remove from Favorites' : 'Add to Favorites' }}
          </button>
        </div>

        <!-- Additional Details -->
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-800">Creators</h3>
          <div class="mt-2 flex space-x-4">
            <div v-for="(creator, index) in show.creators" :key="index" class="creator-card flex items-center space-x-2 transform hover:scale-105 transition duration-300">
              <img :src="creator.image" :alt="creator.name" class="w-12 h-12 rounded-full object-cover">
              <p class="text-base text-gray-600">{{ creator.name }}</p>
            </div>
          </div>
        </div>
        <div class="mt-6">
          <h3 class="text-xl font-semibold text-gray-800">Stars</h3>
          <div class="mt-2 flex space-x-4">
            <div v-for="(star, index) in show.stars" :key="index" class="star-card flex items-center space-x-2 transform hover:scale-105 transition duration-300">
              <img :src="star.image" :alt="star.name" class="w-12 h-12 rounded-full object-cover">
              <p class="text-base text-gray-600">{{ star.name }}</p>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
            </div>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const show = ref({
    title: 'Rick and Morty',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    description: `An animated series that follows the exploits of a super scientist and his not-so-bright grandson.`,
    genres: ['Animation', 'Comedy', 'Adventure'],
    creators: [
      { name: 'Dan Harmon', image: 'https://via.placeholder.com/150' },
      { name: 'Justin Roiland', image: 'https://via.placeholder.com/150' }
    ],
    stars: [
      { name: 'Justin Roiland', image: 'https://via.placeholder.com/150' },
      { name: 'Chris Parnell', image: 'https://via.placeholder.com/150' },
      { name: 'Spencer Grammer', image: 'https://via.placeholder.com/150' }
    ]
  });
  
  const favorite = ref(false);
  
  const toggleFavorite = () => {
    favorite.value = !favorite.value;
  };
  
  const addToWatchLater = () => {
    alert('Added to Watch Later!');
  };
  </script>
  
  <style scoped>
  .bg-black {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
=======
  </div>
</template>

<script setup>
import { ref } from 'vue';

const show = ref({
  title: 'Rick and Morty',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  description: `An animated series that follows the exploits of a super scientist and his not-so-bright grandson.`,
  genres: ['Animation', 'Comedy', 'Adventure'],
  creators: [
    { name: 'Dan Harmon', image: 'https://via.placeholder.com/150' },
    { name: 'Justin Roiland', image: 'https://via.placeholder.com/150' }
  ],
  stars: [
    { name: 'Justin Roiland', image: 'https://via.placeholder.com/150' },
    { name: 'Chris Parnell', image: 'https://via.placeholder.com/150' },
    { name: 'Spencer Grammer', image: 'https://via.placeholder.com/150' }
  ]
});

const favorite = ref(false);

const toggleFavorite = () => {
  favorite.value = !favorite.value;
};

const addToWatchLater = () => {
  alert('Added to Watch Later!');
};
</script>

<style scoped>
.bg-black {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
