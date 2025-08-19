// routes/video-routes.js
const router = require("express").Router();
// const { Video } = require("../models");
const { Video, User, VideoComment } = require("../models"); // Add User here!
const { authMiddleware } = require("../utils/auth");

// GET all videos, including associated user data
router.get("/", async (req, res) => {
  try {
    const videos = await Video.findAll({
      include: [
        {
          model: User,
          attributes: ['channel_name', 'avatar_url', 'username'] // only fetch these columns
        }
      ],
      order: [['created_at', 'DESC']] // optional: sorts videos by newest first
    });

    res.status(200).json(videos);
  } catch (err) {
    res.status(400).json(err);
  }
});


// GET a single video by id
router.get("/:id", async (req, res) => {
  try {
    const videoData = await Video.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["channel_name", "avatar_url", "username"],
        },
        {
          model: VideoComment,
          as: "comments",
          include: [
            {
              model: User,
              as: "author",
              attributes: ["username", "avatar_url"]
            }
          ],
          order: [["created_at", "DESC"]],
        },
      ],
    });

    if (!videoData) {
      return res.status(404).json({ message: "No video found with this id" });
    }

    res.status(200).json(videoData);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// GET all videos by a specific user_id and order them by creation date
router.get("/user/:user_id", async (req, res) => {
  try {
    const videoData = await Video.findAll({
      where: {
        user_id: req.params.user_id,
      },
      order: [
        ['created_at', 'DESC'] // This orders the results from newest to oldest
      ]
    });

    if (videoData.length === 0) {
      res.status(404).json({ message: "No videos found for this user" });
      return;
    }

    res.status(200).json(videoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a list of videos, ordered by most likes or most recent, with user data
// To have the list ordered by most_recent or most_liked, you can use a query parameter 
// like /api/videos/ordered/most_recent or /api/videos/ordered/most_liked
router.get("/ordered/:sort_by", async (req, res) => {
  try {
    let order_options = [];
    if (req.params.sort_by === "most_liked") {
      order_options = [
        ['num_likes', 'DESC']
      ];
    } else if (req.params.sort_by === "most_recent") {
      order_options = [
        ['created_at', 'DESC']
      ];
    } else {
      return res.status(400).json({ message: "Invalid sort_by parameter. Use 'most_liked' or 'most_recent'." });
    }

    const videoData = await Video.findAll({
      order: order_options,
      include: [
        {
          model: User,
          attributes: ['channel_name', 'avatar_url', 'username'],
        }
      ]
    });

    if (videoData.length === 0) {
      return res.status(404).json({ message: "No videos found." });
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

// Increment like count
router.post("/:id/like", async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.id);
    if (!video) {
      return res.status(404).json({ message: "No video found with this id" });
    }

    video.num_likes += 1;
    await video.save();

    res.status(200).json({ num_likes: video.num_likes });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});



module.exports = router;