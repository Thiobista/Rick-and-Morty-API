<<<<<<< HEAD
 <template>
=======
<template>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
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
<<<<<<< HEAD
          <h2 class="text-xl font-bold">{{ image.show.title }}</h2>
          <p>Genre: {{ image.show.genre }}</p>
          <p>Creators: {{ image.show.creators }}</p>
          <p>Stars: {{ image.show.stars }}</p>
          <p>Rating: {{ image.show.rating }}</p>
=======
          <h2 class="text-xl font-bold">{{ show.title }}</h2>
          <p>Genre: {{ show.genre }}</p>
          <p>Creators: {{ show.creators }}</p>
          <p>Stars: {{ show.stars }}</p>
          <p>Rating: {{ show.rating }}</p>
>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
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
<<<<<<< HEAD
    src: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    alt: 'Rick and Morty',
    description: 'Rick and Morty is an American adult animated science fiction sitcom created by Justin Roiland and Dan Harmon. The series follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but easily influenced grandson Morty Smith, who split their time between domestic life and interdimensional adventures.',
    show: {
      title: 'Rick and Morty',
      genre: 'Animated, Sci-Fi, Comedy',
      creators: 'Dan Harmon, Justin Roiland',
      stars: 'Justin Roiland, Chris Parnell, Spencer Grammer',
      rating: '9.2/10',
    },
  },
  {
    src: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
    alt: 'Rick and Morty',
    description: 'Rick Sanchez is a genius scientist who has created a portal gun, allowing him to travel to different dimensions and planets. He often takes his grandson, Morty, on these adventures, despite Morty\'s reluctance.',
    show: {
      title: 'Rick and Morty',
      genre: 'Animated, Sci-Fi, Comedy',
      creators: 'Dan Harmon, Justin Roiland',
      stars: 'Justin Roiland, Chris Parnell, Spencer Grammer',
      rating: '9.2/10',
    },
  },
  {
    src: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
    alt: 'Rick and Morty',
    description: 'Morty Smith is a young, naive, and easily influenced teenager who often finds himself dragged into his grandfather Rick\'s interdimensional adventures. Despite the dangers, Morty remains loyal to Rick and learns valuable life lessons along the way.',
    show: {
      title: 'Rick and Morty',
      genre: 'Animated, Sci-Fi, Comedy',
      creators: 'Dan Harmon, Justin Roiland',
      stars: 'Justin Roiland, Chris Parnell, Spencer Grammer',
      rating: '9.2/10',
    },
  },
]);

=======
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

>>>>>>> dee538b95422687554e6f80e2f6bdfbb979c429e
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
