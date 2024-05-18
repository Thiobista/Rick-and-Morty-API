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
import { ref, onMounted } from 'vue';

const currentIndex = ref(0);
const images = ref([
  'https://th.bing.com/th/id/OIP.J1CGy00pPtR2c0V3jJcMAgHaK_?rs=1&pid=ImgDetMain/800x400/1',
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

onMounted(() => {
  setInterval(() => {
    next();
  }, 3000);
});
</script>

<style scoped>
/* Additional styles for better carousel appearance */
.carousel-item {
  flex: 0 0 100%;
  transition: transform 0.5s ease-in-out;
}
</style>
