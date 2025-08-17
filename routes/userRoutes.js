// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models"); 

const JWT_SECRET = process.env.JWT_SECRET || "your_secret_here";

// REGISTER a new user
router.post("/", async (req, res) => {
  const { username, email, password, channel_name } = req.body;
  if (!username || !email || !password || !channel_name) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    const newUser = await User.create({
      username,
      email,
      password,
      channel_name,
    });

    // generate JWT token
    const token = jwt.sign({ id: newUser.id }, JWT_SECRET, { expiresIn: "2h" });
    res.status(201).json({ token, user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// LOGIN existing user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "2h" });
    res.json({ token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// PROTECT middleware with detailed logging
const protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      token = req.headers.authorization.split(" ")[1];
      if (!token) {
        console.log("Token not found after Bearer split");
        return res.status(401).json({ message: "Not authorized, token missing" });
      }

      let decoded;
      try {
        decoded = jwt.verify(token, JWT_SECRET);
      } catch (err) {
        console.log("JWT verification failed:", err.message);
        return res.status(401).json({ message: "Not authorized, token invalid: " + err.message });
      }

      req.user = await User.findByPk(decoded.id, {
        attributes: ["id", "username", "email", "channel_name"]
      });

      if (!req.user) {
        console.log(`User not found for decoded id: ${decoded.id}`);
        return res.status(404).json({ message: "User not found" });
      }

      console.log(`Authenticated user: ${req.user.username} (${req.user.id})`);
      next();
    } catch (error) {
      console.error("Error in protect middleware:", error);
      res.status(500).json({ message: "Server error in auth middleware" });
    }
  } else {
    console.log("Authorization header missing or not Bearer");
    res.status(401).json({ message: "Not authorized, no token" });
  }
};


// GET logged-in user info
router.get("/me", protect, async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: ["id", "username", "email", "channel_name"],
    });

    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
