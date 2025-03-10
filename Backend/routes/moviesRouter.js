import express from 'express';
import { getMovies, getSingleMovie, updateMovie, deleteMovie  } from '../controller/moviesController.js';

const router = express.Router();

// Route to get all movies
router.get('/', async (req, res) => {
    try {
      await getMovies(req, res);  // Use your existing function for handling logic
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Route to get a single movie by ID
router.get('/:movie_id', async (req, res) => {
  try {
    await getSingleMovie(req, res);  // Use your existing function for handling logic
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Route to get a single movie by ID
router.patch('/update/:movie_id', async (req, res) => {
  try {
    await updateMovie(req, res);  // Use your existing function for handling logic
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

router.delete('/delete/:movie_id', async (req, res) => {
  try {
    await deleteMovie(req, res);  // Use your existing function for handling logic
  } catch (error) {
    res.status(500).json({ error: error });
  }
});


export default router;
