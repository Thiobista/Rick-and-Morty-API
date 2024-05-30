<template>
  <<<<<<< HEAD
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
              <RouterLink v-for="(episode, index) in episodes" :key="index" :to="'/episodes/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
                <h4 class="text-lg font-semibold">{{ episode.name }}</h4>
                <p class="text-gray-600">Description of the episode...</p>
              </RouterLink>
            </div>
            <RouterLink to="/episodes" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
          </div>
    
          <div class="section mb-8">
            <h3 class="text-2xl font-bold mb-4">Characters</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <RouterLink v-for="(character, index) in characters" :key="index" :to="'/characters/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
                <h4 class="text-lg font-semibold">{{ character.name }}</h4>
                <p class="text-gray-600">Description of the character...</p>
              </RouterLink>
            </div>
            <RouterLink to="/characters" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
          </div>
    
          <div class="section">
            <h3 class="text-2xl font-bold mb-4">Locations</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <RouterLink v-for="(location, index) in locations" :key="index" :to="'/locations/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
                <h4 class="text-lg font-semibold">{{ location.name }}</h4>
                <p class="text-gray-600">Description of the location...</p>
              </RouterLink>
            </div>
            <RouterLink to="/locations" class="text-gray-500 hover:underline mt-4 block text-center">See more</RouterLink>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref } from 'vue';
    import Carousel from '../components/Carousel.vue';
    
    const searchQuery = ref('');
    
    const episodes = [
      { name: 'Pilot' },
      { name: 'Lawnmower Dog' },
      { name: 'Anatomy Park' },
    ];
    
    const characters = [
      { name: 'Rick Sanchez' },
      { name: 'Morty Smith' },
      { name: 'Summer Smith' },
    ];
    
    const locations = [
      { name: 'Earth (C-137)' },
      { name: 'Citadel of Ricks' },
      { name: 'Anatomy Park' },
    ];
    
    const performSearch = () => {
      // Logic to perform search based on searchQuery
    };
    </script>
  =======
    <div class="home-page min-h-screen bg-gray-100 py-8">
      <header class="bg-blue-600 text-white py-4">
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
        <button class="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg" @click="performSearch">Search</button>
      </div>
  
      <div class="container mx-auto mt-8">
        <Carousel />
      </div>
  
     
      <div class="links mt-8 flex justify-center gap-4">
        <RouterLink to="/characters" class="btn btn-primary">Characters</RouterLink>
        <RouterLink to="/episodes" class="btn btn-primary">Episodes</RouterLink>
        <RouterLink to="/locations" class="btn btn-primary">Locations</RouterLink>
      </div>
  
      <div class="additional-info mt-8 container mx-auto">
        <div class="section mb-8">
          <h3 class="text-2xl font-bold mb-4">Episodes</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink v-for="(episode, index) in episodes" :key="index" :to="'/episodes/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
              <h4 class="text-lg font-semibold">{{ episode.name }}</h4>
              <p class="text-gray-600">Description of the episode...</p>
            </RouterLink>
          </div>
          <RouterLink to="/episodes" class="text-blue-500 hover:underline mt-4 block text-center">See more</RouterLink>
        </div>
  
        <div class="section mb-8">
          <h3 class="text-2xl font-bold mb-4">Characters</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink v-for="(character, index) in characters" :key="index" :to="'/characters/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
              <h4 class="text-lg font-semibold">{{ character.name }}</h4>
              <p class="text-gray-600">Description of the character...</p>
            </RouterLink>
          </div>
          <RouterLink to="/characters" class="text-blue-500 hover:underline mt-4 block text-center">See more</RouterLink>
        </div>
  
        <div class="section">
          <h3 class="text-2xl font-bold mb-4">Locations</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <RouterLink v-for="(location, index) in locations" :key="index" :to="'/locations/' + index" class="card bg-white rounded-lg p-4 shadow-md hover:shadow-lg">
              <h4 class="text-lg font-semibold">{{ location.name }}</h4>
              <p class="text-gray-600">Description of the location...</p>
            </RouterLink>
          </div>
          <RouterLink to="/locations" class="text-blue-500 hover:underline mt-4 block text-center">See more</RouterLink>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Carousel from '../components/Carousel.vue';
  
  const searchQuery = ref('');
  
  const episodes = [
    { name: 'Pilot' },
    { name: 'Lawnmower Dog' },
    { name: 'Anatomy Park' },
  ];
  
  const characters = [
    { name: 'Rick Sanchez' },
    { name: 'Morty Smith' },
    { name: 'Summer Smith' },
  ];
  
  const locations = [
    { name: 'Earth (C-137)' },
    { name: 'Citadel of Ricks' },
    { name: 'Anatomy Park' },
  ];
  
  const performSearch = () => {
    // Logic to perform search based on searchQuery
  };
  </script>
  >>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e