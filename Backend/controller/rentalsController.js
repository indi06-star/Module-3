import { getAllrentals } from '../model/rentalsModal.js';

export const getRentals = async (req, res) => {
  
  try {
    const rentals = await getAllrentals(req, res);
    res.status(200).json(rentals);
  } catch (error) {
    console.error('Error fetching rentals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
