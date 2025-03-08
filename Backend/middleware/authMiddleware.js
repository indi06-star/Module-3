import jwt from "jsonwebtoken";
import { getUserById } from "../model/usersModal.js"; // ✅ Updated import

export const authenticateUser = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ error: "Invalid or expired token." });
  }
};

export const authorizeAdmin = async (req, res, next) => {
  try {
    const user = await getUserById(req.user.user_id);
    if (!user || !user.email.endsWith("@StreamX.com")) {
      return res.status(403).json({ error: "Access denied. Admins only." });
    }
    next();
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
