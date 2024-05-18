<template>
  <div class="episode-page">
    <h1>Episodes</h1>
    <EpisodeList />
  </div>
</template>

<script>
import EpisodeList from '../components/EpisodeList.vue';

export default {
  name: 'EpisodePage',
  components: {
    EpisodeList,
  },
};
</script>

<style scoped>
.episode-page {
  /* Add your styles here */
  color: aliceblue;
}
</style>
