<template>
  <div class="relative w-full h-64 overflow-hidden bg-gray-800 rounded-lg shadow-lg">
    <div
      class="flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0 relative"
      >
        <img :src="image.src" class="w-full h-64 object-cover rounded-lg" :alt="image.alt" />
        <div class="absolute bottom-4 left-4 text-white p-4 bg-black bg-opacity-50 rounded-lg">
          <h2 class="text-xl font-bold">{{ show.title }}</h2>
          <p>Genre: {{ show.genre }}</p>
          <p>Creators: {{ show.creators }}</p>
          <p>Stars: {{ show.stars }}</p>
          <p>Rating: {{ show.rating }}</p>
          <p class="mt-2">{{ image.description }}</p>
          <div class="mt-2 flex space-x-2">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
            <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Watch Now
            </button>
          </div>
        </div>
      </div>
    </div>
    <button
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      @click="prev"
    >
      ‹
    </button>
    <button
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      @click="next"
    >
      ›
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const currentIndex = ref(0);
const images = ref([
  {
    src: 'https://via.placeholder.com/800x400/1',
    alt: 'First image',
    description: 'First image description or storyline here.',
  },
  {
    src: 'https://via.placeholder.com/800x400/2',
    alt: 'Second image',
    description: 'Second image description or storyline here.',
  },
  {
    src: 'https://via.placeholder.com/800x400/3',
    alt: 'Third image',
    description: 'Third image description or storyline here.',
  },
]);

const show = ref({
  title: 'Rick and Morty',
  genre: 'Animated, Sci-Fi, Comedy',
  creators: 'Dan Harmon, Justin Roiland',
  stars: 'Justin Roiland, Chris Parnell, Spencer Grammer',
  rating: '9.2/10',
});

const prev = () => {
  currentIndex.value =
    currentIndex.value > 0 ? currentIndex.value - 1 : images.value.length - 1;
};

const next = () => {
  currentIndex.value =
    currentIndex.value < images.value.length - 1 ? currentIndex.value + 1 : 0;
};

let interval;
onMounted(() => {
  interval = setInterval(() => {
    next();
  }, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
}
</style>
