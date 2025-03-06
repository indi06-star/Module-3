<template>
  <section class="hero">
    <div class="hero-overlay">
      <h1>Unlimited Movies, at the Click of a Button</h1>
      <p>Watch anywhere.</p>
      <router-link to="/movies" class="btn">Start Watching</router-link>
    </div>
  </section>

  <section class="movies-section">
    <h2 class="section-title">Trending Now</h2>
    <div v-if="loading">Loading Trending Movies...</div>
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
  </section>

  <footer class="footer">
    <div class="footer-content">
      <div class="social-media">
        <a href="https://www.facebook.com" target="_blank" class="social-icon facebook">
          facebook <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" class="social-icon instagram">
          instagram <i class="fab fa-instagram"></i>
        </a>
      </div>
      <p>&copy; 2025 MovieSite - All Rights Reserved</p>
    </div>
  </footer>
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
/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  animation: backgroundBlend 20s ease-in-out infinite;
  transition: background-image 1s ease-in-out;
}

.hero::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/collage2.jpg");
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  z-index: 0;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.hero-overlay {
  background: rgba(0, 0, 0, 0.5);
  padding: 40px;
  border-radius: 0px;
  z-index: 1;
}

h1 {
  font-family: Arial, sans-serif;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

p {
  font-family: Arial, sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.btn {
  display: inline-block;
  padding: 10px 20px;
  background: #FFCC00;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
  transition: 0.3s;
}

.btn:hover {
  background: yellow;
}

@keyframes backgroundBlend {
  0% {
    background-image: url("@/assets/college.jpg");
  }
  50% {
    background-image: url("@/assets/collage2.jpg");
  }
  100% {
    background-image: url("@/assets/college.jpg");
  }
}

.hero:hover::before {
  opacity: 1;
}

/* Movie Section */
.movies-section {
  padding: 40px;
  background-color: black;
  color: white;
  min-height: 30vh;
}

.section-title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Movie Cards Container */
.movie-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.movie-card {
  width: 200px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #1e1e1e;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
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

.footer {
  background-color: #1e1e1e;
  padding: 20px 0;
  text-align: center;
  color: white;
}

.footer .social-media {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.footer .social-icon {
  color: white;
  font-size: 24px;
}

.footer .social-icon:hover {
  color: #FFCC00;
}
</style>
