import express from "express";
import { loginUser, resetPassword } from "../controller/authController.js"; // ✅ Ensuring correct imports

const router = express.Router();

// Login route
router.post("/login", loginUser);


// Password reset route
router.patch("/reset-password", resetPassword);

export default router;
