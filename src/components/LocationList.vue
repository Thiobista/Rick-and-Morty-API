<template>
  <div class="container mx-auto my-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="location in locations"
        :key="location.id"
        class="bg-white shadow-md rounded-lg p-4 flex flex-col items-center space-y-4"
      >
        <div class="w-full h-40 bg-cover bg-center rounded-t-lg" :style="{ backgroundImage: `url(${location.image})` }"></div>
        <div class="p-4 w-full text-center">
          <h5 class="text-lg font-semibold text-gray-800">{{ location.name }}</h5>
          <p class="text-gray-600 text-sm">Type: {{ location.type }}</p>
          <p class="text-gray-600 text-sm">Dimension: {{ location.dimension }}</p>
          <button
            @click="toggleResidents(location)"
            class="mt-2 bg-blue-500 text-white py-1 px-2 rounded hover:bg-blue-600"
          >
            Show Residents
          </button>
        </div>

        <!-- Residents Modal -->
        <div v-if="location.showResidents" class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-end">
          <div class="residents-details-panel bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full h-full overflow-y-auto transition-transform transform translate-x-0">
            <button
              class="absolute top-4 right-4 text-red-500 hover:text-red-600"
              @click="toggleResidents(location)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <h5 class="text-xl font-bold mb-2">{{ location.name }}'s Residents</h5>
            <div v-if="location.residentsList.length" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-for="resident in location.residentsList" :key="resident.id" class="flex items-center bg-gray-100 p-4 rounded-lg shadow">
                <img :src="resident.image" alt="Resident Image" class="w-16 h-16 rounded-full mr-4" @error="handleImageError(resident)">
                <div>
                  <h6 class="text-lg font-semibold text-gray-800">{{ resident.name }}</h6>
                  <p class="text-gray-700"><strong>Status:</strong> {{ resident.status }}</p>
                  <p class="text-gray-700"><strong>Species:</strong> {{ resident.species }}</p>
                  <p class="text-gray-700"><strong>Gender:</strong> {{ resident.gender }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

// Props
const props = defineProps({
  locations: Array
});

// Functions to handle residents toggle and fetching data
const toggleResidents = async (location) => {
  if (!location.showResidents) {
    location.showResidents = true;
    if (!location.residentsList) {
      try {
        const residentPromises = location.residents.map(url => axios.get(url));
        const residentResponses = await Promise.all(residentPromises);
        location.residentsList = residentResponses.map(res => ({
          id: res.data.id,
          name: res.data.name,
          status: res.data.status,
          species: res.data.species,
          gender: res.data.gender,
          image: res.data.image
        }));
      } catch (error) {
        console.error(error);
      }
    }
  } else {
    location.showResidents = false;
  }
};

// Handle image error
const handleImageError = (resident) => {
  // Replace with a placeholder image or handle the error as needed
  resident.image = 'https://via.placeholder.com/150';
};
</script>

<style scoped>
.residents-details-panel {
  transition: transform 0.3s ease-out;
}

.residents-details-panel h5 {
  color: #4A5568; /* Make headings more visible */
}

.residents-details-panel p {
  margin-bottom: 0.5rem;
}

.w-full {
  width: 100%;
}
.h-40 {
  height: 10rem;
}
.bg-cover {
  background-size: cover;
}
.bg-center {
  background-position: center;
}
</style>
