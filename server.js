// server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors"); // Import CORS

const sequelize = require("./config/connection");
const routes = require("./routes");
const userRoutes = require("./routes/userRoutes.js");
const Video = require("./models/video");
const videoCommentRoutes = require("./routes/video_comment-routes.js")

const app = express();
const PORT = process.env.PORT || 3002;

// Parse incoming JSON
app.use(cors()); 
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static frontend files
app.use(express.static(path.join(__dirname, "public")));




// Routes
app.use("/api/user", userRoutes);
app.use("/api/video-comments", videoCommentRoutes);
app.use(routes);

// Video routes
app.post("/api/videos", async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.status(201).json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save video" });
  }
});

app.get("/api/videos", async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch videos" });
  }
});

// Serve index.html on root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Sync DB and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
