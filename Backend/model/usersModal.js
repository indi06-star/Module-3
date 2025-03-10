import { pool } from "../config/config.js";
import bcrypt from "bcrypt";

// Function to get all users
export const getAllUsers = async () => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  } catch (error) {
    throw error;
  }
};
// Function to get a user by user_id
export const getUserById = async (user_id) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    throw error;
  }
};

export const getDeleteUser = async (user_id) => {
  try {
    const [rows] = await pool.query("DELETE FROM users WHERE user_id = ?", [user_id]);
    return rows.affectedRows > 0 ? rows : null;
  } catch (error) {
    throw error;
  }
};
export const signUpUser = async (username, email, phone_number, password) => {
  try {
    // Hash the password before storing it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Insert the new user into the database with hashed password

    const query = "INSERT INTO users (username, password_hash, email, phone_number) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [username, hashedPassword, email, phone_number]);

    // Determine the role based on email domain
    const user_role = email.endsWith("@StreamX.com") ? "admin" : "user";

    // Update the user's role in the database after insertion
    await pool.query("UPDATE users SET user_role = ? WHERE user_id = ?", [user_role, result.insertId]);

    // Return the inserted user details without tokens
    return { user_id: result.insertId, username, email, phone_number, user_role };
  } catch (error) {
    throw error;
  }
};

//Login Code 
