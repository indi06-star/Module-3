import {pool} from '../config/config.js'; // Ensure this is your MySQL connection pool

export const getAllrentals = async (req, res) => {
  try {
    
    const [rows] = await pool.query(`
      SELECT user_id,title, total_cost, img_link, rental_start, rental_end FROM rentals
      LEFT JOIN movies using(movie_id)
      LEFT JOIN users using(user_id)
      WHERE user_id = ${req.params.id}
      ;`); // Assuming your table is 'movies'
    return rows;
  } catch (error) {
    throw error;
  }
};
