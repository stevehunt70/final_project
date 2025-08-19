// routes/videoLikeRoutes.js
const router = require("express").Router();
const { VideoLike, Video } = require("../models");
const { Op } = require("sequelize");

router.post("/toggle", async (req, res) => {
  try {
    const { user_id, video_id } = req.body;

    const existing = await VideoLike.findOne({ where: { user_id, video_id } });

    if (existing) {
      await existing.destroy();
      await Video.increment({ num_likes: -1 }, { where: { id: video_id } });
    } else {
      await VideoLike.create({ user_id, video_id });
      await Video.increment({ num_likes: 1 }, { where: { id: video_id } });
    }

    const video = await Video.findByPk(video_id, { attributes: ["num_likes"] });
    return res.json({ liked: !existing, likeCount: video.num_likes });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Failed to toggle like" });
  }
});

router.get("/status", async (req, res) => {
  try {
    const { user_id, video_id } = req.query;

    const like = await VideoLike.findOne({ where: { user_id, video_id } });
    const video = await Video.findByPk(video_id, { attributes: ["num_likes"] });

    res.json({
      liked: !!like,
      likeCount: video ? video.num_likes : 0,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch like status" });
  }
});

module.exports = router;

