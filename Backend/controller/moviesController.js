import { getAllMovies, getMovieById } from '../model/moviesModal.js';

const getMovies = async (req, res) => {
  try {
    // Fetching all movies from the database
    const movies = await getAllMovies();
    res.status(200).json(movies);  // Return the movies as a JSON response
  } catch (error) {
    // Logging and returning a 500 status for internal server error
    console.error('Error fetching movies:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const movieId = req.params.movie_id;
    const movie = await getMovieById(movieId); // Fetch single movie by ID
    if (movie) {
      res.status(200).json(movie);  // Return the movie details
    } else {
      // res.status(404).json({ error: 'Movie not found' });
      console.log(error)
    }
  } catch (error) {
    console.error('Error fetching single movie:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getMovies, getSingleMovie };  // Make sure the getMovies function is exported
