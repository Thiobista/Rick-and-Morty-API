<template>
  <div class="location-page">
    <h1>Locations</h1>
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
.location-page {
  /* Add your styles here */
  color: aliceblue;
}
</style>
