// server.js
// Import required packages

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const sequelize = require("./config/connection");
const routes = require("./routes");
const Video = require("./models/video");

// Initialize Express application
const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

// has the --rebuild parameter been passed as a command line param?
const rebuild = process.argv[2] === "--rebuild";

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));

// Handle GET request at the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.htm"));
});

// Add routes
app.use(routes);

// Sync database
sequelize.sync({ force: rebuild }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});

// POST route to save video
app.post('/api/videos', async (req, res) => {
  try {
    const newVideo = await Video.create(req.body);
    res.status(201).json(newVideo);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save video' });
  }
});

// GET route to list videos
app.get('/api/videos', async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.json(videos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch videos' });
  }
});

// Start server
sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
  });
});