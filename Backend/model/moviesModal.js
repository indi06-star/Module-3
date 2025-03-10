import { pool } from '../config/config.js'; // MySQL connection pool

// Fetching all movies from the database
export const getAllMovies = async () => {
  try {
    // Query the database to get all movies
    const [rows] = await pool.query('SELECT * FROM movies'); // Assuming your table is 'movies'
    return rows; // Returning the fetched rows (movies)
  } catch (error) {
    console.error('Error in getAllMovies:', error); // Log any errors that occur
    throw error;  // Rethrow the error for handling in the controller
  }
};

// Fetch single movie by ID
export const getMovieById = async (movieId) => {
  try {
    const [rows] = await pool.query('SELECT * FROM movies where movie_id = ?', [movieId]);
    if (rows.length === 0) {
      return null; // Explicitly return null if no movie found
    }
    return rows[0];
  } catch (error) {
    console.error('Error in getMovieById:', error);
    throw error;
  }
};

export const getUpdateMovie = async (req, movieId) => {
  try {    
    const query = `UPDATE movies SET ? WHERE movie_id =${movieId}`;
    const [result] = await pool.query(query, [req.body]);
    if (result.affectedRows === 0) {
      return 'Movie not updated😭';
    }
    return result

  } catch (error) {
    console.error('Error in getMovieById:', error);
    return error
  }
};
