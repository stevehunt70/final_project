const router = require("express").Router();
const { Video } = require("../models");
const { authMiddleware } = require("../utils/auth");

// GET all videos
router.get("/", async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.status(200).json(videos);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single video by id
router.get("/:id", async (req, res) => {
  try {
    const videoData = await Video.findByPk(req.params.id);

    if (!videoData) {
      res.status(404).json({ message: "No video found with this id" });
      return;
    }

    res.status(200).json(videoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new video
router.post("/", async (req, res) => {
  try {
    const videoData = await Video.create(req.body);
    res.status(200).json(videoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a video record
router.put("/:id", async (req, res) => {
  try {
    const [updatedRows] = await Video.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "No video found with this id" });
      return;
    }

    res.status(200).json({ message: "Video updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a video
router.delete("/:id", async (req, res) => {
  try {
    const deletedVideo = await Video.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedVideo) {
      res.status(404).json({ message: "No video found with this id" });
      return;
    }

    res.status(200).json({ message: "Video deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;