import {
  getAllUsers,
  getUserById as findUserById,
  signUpUser as signUpSingleUser,
  deleteSingleUser,
  updateUser,
  resetPassword as resetUserPassword
} from "../model/usersModal.js";

// Fetch all users
export const getUsers = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fetch a single user by ID
export const getUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await findUserById(user_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const user_role = user.email.endsWith("@StreamX.com") ? "admin" : "user";
    res.status(200).json({ ...user, user_role });
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Sign up a new user
export const signUpUser = async (req, res) => {
  try {
    const { username, email, phone_number, password } = req.body;
    const newUser = await signUpSingleUser(username, email, phone_number, password);

    res.status(201).json({
      message: "User signed up successfully",
      user: {
        user_id: newUser.user_id,
        username,
        email,
        phone_number,
        user_role: newUser.user_role,
      },
    });
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get a single user by user_id
export const getUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await findUserById(user_id);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a single user by user_id
export const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const result = await deleteSingleUser(user_id);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an existing user by user_id
export const patchUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const updateData = req.body;
    const result = await updateUser(user_id, updateData);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "User not found or no changes made" });
    }

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Reset user password
export const resetPassword = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
      return res.status(400).json({ message: "Email and new password are required" });
    }

    await resetUserPassword(email, newPassword);

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
////login video

export const loginController =(req,res)=>{
  res.status(200).send({message:'user logged in successfully'})
};
export const postUser = async(req,res)=>{
  req.body.password_hashed = await hash(req.body.password_hashed,10)
  res.status(200).send({ message:'A user was added succesfully',users:await postUser(req.body)})
}