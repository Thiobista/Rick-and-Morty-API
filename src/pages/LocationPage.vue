<template>
    <div>
      <h1 class="text-4xl">Locations</h1>
      <LocationList />
    </div>
  </template>
  
  <script>
  import LocationList from '../components/LocationList.vue';
  
  export default {
    name: 'LocationPage',
    components: {
      LocationList,
    },
  };
  </script>
  
  <style scoped>
  /* Add any scoped styles if necessary */
  </style>
  