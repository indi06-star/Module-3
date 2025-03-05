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

// Function to sign up a new user
export const signUpUser = async (username, email, phone_number, password) => {
  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = "INSERT INTO users (username, password_hash, email, phone_number) VALUES (?, ?, ?, ?)";
    const [result] = await pool.query(query, [username, hashedPassword, email, phone_number]);

    // Determine the role based on email 
    const user_role = email.endsWith("@StreamX.com") ? "admin" : "user";

    await pool.query("UPDATE users SET user_role = ? WHERE user_id = ?", [user_role, result.insertId]);

    // Return the inserted user details
    return { user_id: result.insertId, username, email, phone_number, user_role };
  } catch (error) {
    throw error;
  }
};

// Function to update an existing user by user_id
export const updateUser = async (user_id, updateData) => {
  try {
    const updateFields = Object.keys(updateData)
      .map((key) => `${key} = ?`)
      .join(', ');

    const values = Object.values(updateData);
    values.push(user_id); // Push user_id at the end for WHERE condition

    const [result] = await pool.query(
      `UPDATE users SET ${updateFields} WHERE user_id = ?`,
      values
    );
    return result;
  } catch (error) {
    throw error;
  }
};

// Function to delete a single user by user_id
export const deleteSingleUser = async (user_id) => {
  try {
    const [result] = await pool.query('DELETE FROM users WHERE user_id = ?', [user_id]);
    return result;
  } catch (error) {
    throw error;
  }
};

// Reset password functionality
export const resetPassword = async (email, newPassword) => {
  if (!email || !newPassword) {
    throw new Error("Email and new password are required");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  const query = "UPDATE users SET password_hash = ? WHERE email = ?";
  const [result] = await pool.query(query, [hashedPassword, email]);

  if (result.affectedRows === 0) {
    throw new Error("User not found");
  }

  return { message: "Password reset successfully" };
};

// Find user by email function
export const findUserByEmail = async (email) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length === 0) {
      return null;  
    }

    return rows[0]; 
  } catch (error) {
    throw error;
  }
};
export const postUser=async(user)=>{
  await pool.query('INSERT INTO users SET ? ',[user])
  return await getAllUsers()
}
