<template>
  <div class="movies-view">
    <div v-if="loading">Loading Movies...</div>
    <div v-else class="movie-cards">
      <router-link
        v-for="movie in movies"
        :key="movie.movie_id"
        :to="{ name: 'movie-details', params: { id: movie.movie_id } }"
        class="movie-card"
      >
        <img :src="movie.img_link" :alt="movie.title" class="movie-img" />
        <p class="movie-title">{{ movie.title }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['movies', 'loading']),
  },
  mounted() {
    if (!this.movies || this.movies.length === 0) {
      this.$store.dispatch('getData');
    }
  },
};
</script>

<style scoped>
.movies-view {
  padding: 20px;
  background-color: #121212;
  color: #fff;
  min-height: 100vh;
}

.movie-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.movie-card {
  text-align: center;
  width: 200px;
  margin-bottom: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
}

.movie-card:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.movie-img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.movie-title {
  font-size: 16px;
  font-weight: bold;
}
</style>