import express from 'express';
import cors from 'cors'; 
import { config } from 'dotenv'; 
import mysql from 'mysql2/promise'; 
import comingsoonRouter from './routes/comingsoonRouter.js';
import moviesRouter from './routes/moviesRouter.js';
import usersRouter from './routes/usersRouter.js';
import rentalsRouter from './routes/rentalsRouter.js'
import authRoutes from './routes/authRoutes.js'; // Added auth routes

config(); 
const app = express();

app.use(cors());

// Middleware
app.use(express.json());

// Define routes
app.use('/coming_soon', comingsoonRouter); // Coming soon movies route
app.use('/movies', moviesRouter); // Movies route
app.use('/users', usersRouter); // Users route
app.use('/auth', authRoutes); // Auth routes (Login, Signup, etc.)
app.use('/rentals', rentalsRouter)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log('Hi...');
});
