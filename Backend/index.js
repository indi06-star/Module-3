import express from 'express';
import cors from 'cors';
import { config } from 'dotenv'; 
import comingsoonRouter from './routes/comingsoonRouter.js';
import moviesRouter from './routes/moviesRouter.js';
import usersRouter from './routes/usersRouter.js';

// Load environment variables from .env file
config(); 

// Create the express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Define routes
app.use('/coming_soon', comingsoonRouter); // Coming soon movies route
app.use('/movies', moviesRouter); // Movies route
app.use('/users', usersRouter); // Users route

// Start the server
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
  console.log('Hi...');
});
