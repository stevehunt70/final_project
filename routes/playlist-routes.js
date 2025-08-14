const router = require("express").Router();
const { Playlist } = require("../models");
const { authMiddleware } = require("../utils/auth");

// GET all playlists
router.get("/", async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.status(200).json(playlists);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single playlist by id
router.get("/:id", async (req, res) => {
  try {
    const playlistData = await Playlist.findByPk(req.params.id);

    if (!playlistData) {
      res.status(404).json({ message: "No playlist found with this id" });
      return;
    }

    res.status(200).json(playlistData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new playlist
router.post("/",  async (req, res) => {
  try {
    const playlistData = await Playlist.create(req.body);
    res.status(200).json(playlistData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a playlist
router.put("/:id",  async (req, res) => {
  try {
    const [updatedRows] = await Playlist.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "No playlist found with this id" });
      return;
    }

    res.status(200).json({ message: "Playlist updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a playlist
router.delete("/:id",  async (req, res) => {
  try {
    const deletedPlaylist = await Playlist.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedPlaylist) {
      res.status(404).json({ message: "No playlist found with this id" });
      return;
    }

    res.status(200).json({ message: "Playlist deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;