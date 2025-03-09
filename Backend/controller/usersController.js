import { getAllUsers, getUserById as findUserById, signUpUser as signUpSingleUser } from "../model/usersModal.js";
import bcrypt from "bcrypt";
import { pool } from "../config/config.js";

// Fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

// Fetch a single user by ID
export const getUserById = async (req, res) => {
  try {
    const user = await findUserById(req.params.user_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    // Determine if the user is an admin based on email
    const user_role = user.email.endsWith("@StreamX.com") ? "admin" : "user";
    res.json({ ...user, user_role });
  } catch (error) {
    res.status(500).json({ error: "Error retrieving user" });
  }
};

// Sign up a new user
export const signUpUser = async (req, res) => {
  try {
    const { username, email, phone_number, password } = req.body;
    if (!username || !email || !phone_number || !password) {
      return res.status(400).json({ error: "All fields are required" });
    }
    
    const newUser = await signUpSingleUser(username, email, phone_number, password);
    res.json({
      message: "User signed up successfully😎",
      user: {
        user_id: newUser.user_id,
        username,
        email,
        phone_number,
        user_role: newUser.user_role,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Error signing up user" });
  }
};

// Reset password functionality
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;
    if (!email || !newPassword) {
      return res.status(400).json({ error: "Email and new password are required" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    const query = "UPDATE users SET password_hash = ? WHERE email = ?";
    const [result] = await pool.query(query, [hashedPassword, email]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error resetting password" });
  }
};
