<template>
  <section class="movie-container">
    <div v-if="movie" class="movie-content">
      <h1 class="movie-heading">{{ movie.title }}</h1>
      <div class="trailer-wrapper">
        <iframe
          v-if="movie.trailer_url"
          :src="movie.trailer_url"
          frameborder="0"
          allowfullscreen
          class="movie-trailer"
        ></iframe>
      </div>
      <p class="movie-summary">{{ movie.description }}</p>
      <div class="movie-details-container">
        <p class="movie-year">Year Released: {{ movie.year_released }}</p>
        <p class="movie-duration">Duration: {{ movie.duration }} mins</p>
        <p class="movie-price">Price: R {{ movie.rental_price }}</p>
      </div>
    </div>
    <p v-if="!movie && !error">Loading movie details...</p>
    <p v-if="error" class="loading-message">{{ error }}</p>
    <button type="button" class="button" @click="addToCart(movie.movie_id)">
      <span class="button__text">Add To Cart</span>
      <span class="button__icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linejoin="round"
          stroke-linecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          class="svg"
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    // Get movie by movie_id from the movies array in Vuex store
    movie() {
      const movieId = parseInt(this.$route.params.id); // Get movie_id from the route params
      return this.movies.find(movie => movie.movie_id === movieId); // Find the movie
    },
    ...mapGetters(['movies']),
  },
  data() {
    return {
      error: null,
    };
  },
  mounted() {
    if (!this.movie) {
      this.$store.dispatch('getData'); // Dispatch the action to get movie data if movie is not found
    }
  },
  methods: {
    ...mapActions(['addToCart']),
  },
};
</script>

<style scoped>
/* Main container */
.movie-container {
  background: #121212;
  color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 20px;
  text-align: center;
}
/* Content Box */
.movie-content {
  width: 100%;
  max-width: 1100px;
  padding: 30px;
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease-in-out;
}
.movie-content:hover {
  transform: scale(1.02);
}
/* Title */
.movie-heading {
  font-size: 2.8rem;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  color: #FFCC00;
  margin-bottom: 20px;
  font-weight: bold;
}
/* Trailer Wrapper */
.trailer-wrapper {
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.7);
  transition: transform 0.4s ease-in-out;
}
.trailer-wrapper:hover {
  transform: scale(1.03);
}
.movie-trailer {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  object-fit: cover;
}
/* Summary */
.movie-summary {
  font-size: 1.2rem;
  color: #bbb;
  margin-bottom: 20px;
  text-align: justify;
  line-height: 1.6;
  letter-spacing: 0.5px;
  max-width: 800px;
  transition: color 0.3s;
}
.movie-summary:hover {
  color: #fff;
}
/* Details */
.movie-details-container {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
}
.movie-details-container p {
  background: rgba(255, 255, 255, 0.05);
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: background 0.3s ease-in-out;
}
.movie-details-container p:hover {
  background: rgba(255, 255, 255, 0.15);
}
.movie-year {
  color: #FFCC00;
}
.movie-duration {
  color: #66FF66;
}
.movie-price {
  color: #FF6666;
  font-weight: bold;
}
/* Button Base */
.button {
  position: relative;
  width: 200px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #FFCC00;
  background-color: #FFCC00;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}
/* Button Text - Always Visible */
.button .button__text {
  position: relative;
  color: #121212;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease-in-out;
}
/* Button Icon Wrapper - Covers Entire Button on Hover */
.button .button__icon {
  position: absolute;
  right: 0;
  width: 45px;
  height: 100%;
  background-color: #D4A800;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in-out;
}
/* SVG Icon */
.button .svg {
  width: 24px;
  stroke: #121212;
}
/* Hover Effect - Icon Covers Button */
.button:hover .button__icon {
  width: 100%;
  right: 0;
}
/* Hover Effect - Text Disappears */
.button:hover .button__text {
  color: transparent;
}
/* Active Effect - Darker Shade */
.button:active .button__icon {
  background-color: #B58900;
}
.button:active {
  border: 1px solid #B58900;
}
@media (max-width: 480px) {
  .movie-content {
    padding: 10px;
  }
  .trailer-wrapper {
    height: 300px;
  }
}
</style>
