const router = require("express").Router();
const { PlaylistVideo } = require("../models");
const { authMiddleware } = require("../utils/auth");

// POST to add a video to a playlist
router.post("/",  async (req, res) => {
  try {
    const playlistVideoData = await PlaylistVideo.create(req.body);
    res.status(200).json(playlistVideoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a video from a playlist
router.delete("/",  async (req, res) => {
  try {
    const deletedAssociation = await PlaylistVideo.destroy({
      where: {
        playlist_id: req.body.playlist_id,
        video_id: req.body.video_id,
      },
    });

    if (deletedAssociation === 0) {
      res.status(404).json({ message: "No association found" });
      return;
    }

    res.status(200).json({ message: "Video removed from playlist successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;