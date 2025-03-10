<template>
  <section class="movie-container">
    <div v-if="movie" class="movie-content">
    <h1 class="movie-heading">{{ movie.title }}</h1>
      <!-- Show only trailer -->
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
        <p class="movie-year">Year Released: 2012</p>
        <p class="movie-duration">Duration: 94 mins</p>
        <p class="movie-price">Price: R29.99</p>
      </div>
    </div>
    <p v-if="!movie && !error">Loading movie details...</p>
    <p v-if="error" class="loading-message">{{ error }}</p>
    <button type="button" class="button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">

  <span class="button__text" >Add To Cart</span>

  <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
  </button>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h3 class="modal-title" id="exampleModalLabel">Book Date </h3>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Recipient:</label>
              <input type="date" class="form-control" id="recipient-name" v-model="startDate">
            </div>
            <div class="form-group">
              <label for="message-text" class="col-form-label">Message:</label>
              <input type="date" class="form-control" id="message-text" v-model="endDate">
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" @click="bookMovie(movie)">Book Movie</button>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
  import store from '@/store'
  import { useCookies } from "vue3-cookies";
  const { cookies } = useCookies();

export default {
  props: ['id', 'trailer_url', 'description', 'price'],  // Accept passed props

  data() {
    return {
      movie: null,
      error: null,
      startDate: null,
      endDate: null
    };
  },

  mounted() {
    // Retrieve passed params or fetch data if not available
    if (this.trailer_url && this.description && this.price) {
      this.movie = {
        trailer_url: this.trailer_url,
        description: this.description,
        price: this.price,
        title: 'Movie Title' // You can replace this with dynamic title if needed
      };
    } else {
      const movieId = this.id || this.$route.params.id;
      this.fetchMovieDetails(movieId);
    }
  },

  methods: {
    async fetchMovieDetails(movieId) {
      try {
        const response = await fetch(`http://localhost:3000/movies/${movieId}`);
        if (response.ok) {
          const movieData = await response.json();
          this.movie = movieData;
        } else {
          throw new Error("Movie not found");
        }
      } catch (error) {
        this.error = error.message || "Failed to load movie details. Please try again later.";
      }
    },

     bookMovie(movie) {
        const payload = {
          user_id : cookies.get('legitUser')?.user[0].user_id  || 1,
          rental_start : this.startDate,
          rental_end : this.endDate,
          movie_id: movie.movie_id,
          total_cost: +movie.rental_price

        }

        console.log(payload)
        store.dispatch('book', payload)

    },
  },
};
</script>

<style scoped>
/* Styles the main container for the movie section */
.movie-container {
  background-color: #121212;
  color: white;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

/* Styles the movie content box */
.movie-content {
  width: 100%;
  max-width: 960px;
  padding: 20px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.85);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

/* Wrapper for the movie trailer */
.trailer-wrapper {
  width: 100%;
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

/* Styles the actual movie trailer */
.movie-trailer {
  width: 90%;
  height: 100%;
  max-width: 1000px;
  border-radius: 8px;
}

/* Styles the movie title */
.movie-heading {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #ffcc00;
}

/* Styles the movie summary text */
.movie-summary {
  font-size: 1.1rem;
  margin: 8px 0;
  color: #bbb;
  line-height: 1.5;
  text-align: justify;
  max-width: 80%;
}

/* Container for movie details like year, duration, and price */
.movie-details-container {
  display: flex;
  gap: 15px;
  margin-top: 20px;
  justify-content: center;
}

/* General styles for movie details */
.movie-year,
.movie-duration,
.movie-price {
  font-size: 1rem;
  color: #fff;
}

/* Styles the movie release year */
.movie-year {
  color: #ffcc00;
}

/* Styles the movie duration */
.movie-duration {
  color: #66ff66;
}

/* Styles the movie price */
.movie-price {
  color: #ff6666;
  font-weight: bold;
}

/* Styles the movie poster image */
.movie-poster {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 15px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.6);
}

/* Styles for the interactive button */
.button {
  position: relative;
  width: 150px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px solid #34974d;
  background-color: #3aa856;
}

/* Adds smooth transitions for button elements */
.button, .button__icon, .button__text {
  transition: all 0.3s;
}

/* Styles the button text */
.button .button__text {
  transform: translateX(30px);
  color: #fff;
  font-weight: 600;
}

/* Styles the icon inside the button */
.button .button__icon {
  position: absolute;
  transform: translateX(109px);
  height: 100%;
  width: 39px;
  background-color: #34974d;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Styles the SVG icon inside the button */
.button .svg {
  width: 30px;
  stroke: #fff;
}

/* Changes button appearance on hover */
.button:hover {
  background: #34974d;
}

/* Hides button text on hover */
.button:hover .button__text {
  color: transparent;
}

/* Expands the icon container on hover */
.button:hover .button__icon {
  width: 148px;
  transform: translateX(0);
}

/* Changes button icon background when clicked */
.button:active .button__icon {
  background-color: #2e8644;
}

/* Changes button border when clicked */
.button:active {
  border: 1px solid #2e8644;
}

/* Media queries for responsiveness */
@media (max-width: 768px) {
  /* Adjust movie content box width */
  .movie-content {
    padding: 15px;
    max-width: 100%;
  }

  /* Adjust trailer wrapper height */
  .trailer-wrapper {
    height: 300px;
  }

  /* Adjust trailer size */
  .movie-trailer {
    width: 95%;
    max-width: none;
  }

  /* Adjust font sizes */
  .movie-heading {
    font-size: 1.5rem;
  }

  .movie-summary {
    font-size: 1rem;
  }

  .movie-details-container {
    flex-direction: column;
    gap: 10px;
  }

  /* Adjust button size */
  .button {
    width: 160px;
    height: 45px;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  /* Adjust movie content box padding */
  .movie-content {
    padding: 10px;
  }

  /* Adjust trailer wrapper height */
  .trailer-wrapper {
    height: 220px;
  }

  /* Adjust trailer size */
  .movie-trailer {
    width: 90%;
  }

  /* Adjust font sizes */
  .movie-heading {
    font-size: 1.3rem;
  }

  .movie-summary {
    font-size: 0.9rem;
  }

  .movie-details-container {
    flex-direction: column;
    gap: 8px;
  }

  /* Adjust button size */
  .button {
    width: 140px;
    height: 40px;
  }
}
</style>

