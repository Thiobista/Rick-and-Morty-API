<template>
  <div class="relative w-full h-64 overflow-hidden">
    <div
      class="flex transition-transform duration-700"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="image" class="w-full h-64 object-cover" alt="carousel image" />
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
  'https://via.placeholder.com/800x400/1',
  'https://via.placeholder.com/800x400/2',
  'https://via.placeholder.com/800x400/3',
]);

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
/* Additional styles for better carousel appearance */
.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
}
</style>
