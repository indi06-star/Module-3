import { getAllMovies } from '../model/moviesModal.js';

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

export { getMovies };  // Make sure the getMovies function is exported
