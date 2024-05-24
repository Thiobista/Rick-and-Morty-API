<template>
  <div class="character-list">
    <!-- Character list content -->
    <h2 class="text-2xl">Character List Component</h2>
    <ul>
      <li v-for="character in characters" :key="character.id">{{ character.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Define reactive properties
const characters = ref([]);

// Simulate fetching data on mounted
onMounted(() => {
  characters.value = [
    { id: 1, name: 'Rick Sanchez' },
    { id: 2, name: 'Morty Smith' },
  ];
});
</script>

<style scoped>
/* Add any scoped styles if necessary */
</style>