// middleware/middleware.js
import { compare } from 'bcrypt';
import { pool } from '../config/config.js';

export const checkPassword = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const [rows] = await pool.query( // Await the query
      'SELECT user_id, username, password_hash, email FROM users WHERE email = ?',
      [email]
    );

    const user = rows[0];

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await compare(password, user.password_hash);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    next();
  } catch (error) {
    console.error('Password check error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};