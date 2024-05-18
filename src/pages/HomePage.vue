<template>
  <div>
    <Carousel />
    <ShowDetails />
    <EpisodeList />
    <CharacterPage />
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import ShowDetails from '../components/ShowDetails.vue';
import EpisodeList from '../components/EpisodeList.vue';
import CharacterPage from '../components/CharacterPage.vue';

export default {
  name: 'HomePage',
  components: {
    Carousel,
    ShowDetails,
    EpisodeList,
    CharacterPage,
  },
};
</script>

<style scoped>
/* Add any additional scoped styles here */
</style>
