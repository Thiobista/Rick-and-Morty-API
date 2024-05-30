<template>
  <div class="home-page min-h-screen bg-gray-100 py-8">
    <header class="bg-gray-600 text-white py-4">
      <h1 class="text-3xl font-bold text-center">Welcome to the Rick and Morty App</h1>
    </header>
    <div class="search-bar mt-8 flex justify-center">
      <input 
        type="text" 
        placeholder="Search..."
        class="border border-gray-300 rounded-full px-4 py-2 w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-model="searchQuery"
        @input="performSearch"
      />
      <button class="ml-2 px-4 py-2 bg-gray-600 text-white rounded-lg" @click="performSearch">Search</button>
    </div>

    <div class="container mx-auto mt-8">
      <Carousel />
    </div>

    <div class="links mt-8 flex justify-center gap-4">
      <!-- Style the links using Tailwind CSS classes -->
      <RouterLink to="/characters" class="btn btn-primary text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg">Characters</RouterLink>
      <RouterLink to="/episodes" class="btn btn-primary text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg">Episodes</RouterLink>
      <RouterLink to="/locations" class="btn btn-primary text-white bg-gray-500 hover:bg-gray-600 px-4 py-2 rounded-lg">Locations</RouterLink>
    </div>

    <div class="additional-info mt-8 container mx-auto">
      <div class="section mb-8">
        <h3 class="text-2xl font-bold mb-4">Episodes</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(episode, index) in episodes" :key="index" @click="showEpisodeDetails(index)" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer">
            <h4 class="text-lg font-semibold">{{ episode.name }}</h4>
            <p class="text-gray-600">Description of the episode...</p>
          </div>
        </div>
        <RouterLink to="/episodes" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
      </div>

      <div class="section mb-8">
        <h3 class="text-2xl font-bold mb-4">Characters</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(character, index) in characters" :key="index" @click="showCharacterDetails(index)" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer">
            <h4 class="text-lg font-semibold">{{ character.name }}</h4>
            <p class="text-gray-600">Description of the character...</p>
          </div>
        </div>
        <RouterLink to="/characters" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
      </div>

      <div class="section">
        <h3 class="text-2xl font-bold mb-4">Locations</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div v-for="(location, index) in locations" :key="index" @click="showLocationDetails(index)" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg cursor-pointer">
            <h4 class="text-lg font-semibold">{{ location.name }}</h4>
            <p class="text-gray-600">Description of the location...</p>
          </div>
        </div>
        <RouterLink to="/locations" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
      </div>
    </div>

    <!-- Figma and GitHub Links -->
    
  </div>
  <div class="flex justify-center mt-8">
      <a href="https://www.figma.com/design/MwY5XIe2IZJFH0TVO637bV/Untitled?node-id=0-1&t=uUsQCUSKgMunEJtJ-1" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">Figma</a>
      <a href="https://github.com/Thiobista/Rick-and-Morty-API.git" target="_blank" rel="noopener noreferrer" class="text-gray-500 hover:underline mx-4">GitHub</a>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Carousel from '../components/Carousel.vue';

const searchQuery = ref('');

const episodes = [
  { 
    name: 'Pilot', 
    description: 'Rick moves in with his daughter\'s family and establishes himself as a bad influence on his grandson, Morty.' 
  },
  { 
    name: 'Lawnmower Dog', 
    description: 'Rick creates a device to make the family dog, Snuffles, smarter, while he and Morty enter the dreams of Morty\'s math teacher.' 
  },
  { 
    name: 'Anatomy Park', 
    description: 'Rick shrinks Morty and sends him inside a homeless man to save Anatomy Park, a microscopic theme park.' 
  },
];

const characters = [
  { 
    name: 'Rick Sanchez', 
    description: 'A genius scientist and alcoholic whose inventions and experiments serve as the basis for the episodes.' 
  },
  { 
    name: 'Morty Smith', 
    description: 'Rick\'s good-hearted but easily distressed grandson who is dragged into Rick\'s misadventures.' 
  },
  { 
    name: 'Summer Smith', 
    description: 'Morty\'s older sister, a more conventional and often superficial teenager who occasionally joins Rick and Morty on their adventures.' 
  },
];

const locations = [
  { 
    name: 'Earth (C-137)', 
    description: 'The home reality of Rick and Morty, with its own unique features and inhabitants.' 
  },
  { 
    name: 'Citadel of Ricks', 
    description: 'A giant space station that serves as a society for Ricks and Mortys from multiple realities.' 
  },
  { 
    name: 'Anatomy Park', 
    description: 'A microscopic theme park inside the body of a homeless man, inspired by Jurassic Park.' 
  },
];

const performSearch = () => {
  // Logic to perform search based on searchQuery
};

const showEpisodeDetails = (index) => {
  alert(`Episode: ${episodes[index].name}\nDescription: ${episodes[index].description}`);
};

const showCharacterDetails = (index) => {
  alert(`Character: ${characters[index].name}\nDescription: ${characters[index].description}`);
};

const showLocationDetails = (index) => {
  alert(`Location: ${locations[index].name}\nDescription: ${locations[index].description}`);
};
</script>

<style>
.cursor-pointer {
  cursor: pointer;
}
</style>
