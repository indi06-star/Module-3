import { getAllrentals, bookMovie } from '../model/rentalsModal.js';

export const getRentals = async (req, res) => {
  
  try {
    const rentals = await getAllrentals(req, res);
    res.status(200).json(rentals);
  } catch (error) {
    console.error('Error fetching rentals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const rent = async (req, res) => {
  try {
    const rentals = await bookMovie(req, res);
    res.status(200).json({message: "Movie booked successfully😍", result: rentals});
  } catch (error) {
    console.error('Error fetching rentals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
