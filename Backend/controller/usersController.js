import { getAllusers } from '../model/usersModal.js';

export const getUsers = async (req, res) => {
  try {
    const users = await getAllusers();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
