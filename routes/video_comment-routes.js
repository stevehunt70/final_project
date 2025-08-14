const router = require("express").Router();
const { VideoComment } = require("../models");
const { authMiddleware } = require("../utils/auth");

// GET all video comments
router.get("/", async (req, res) => {
  try {
    const comments = await VideoComment.findAll();
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single video comment by id
router.get("/:id", async (req, res) => {
  try {
    const commentData = await VideoComment.findByPk(req.params.id);

    if (!commentData) {
      res.status(404).json({ message: "No video comment found with this id" });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new video comment
router.post("/",  async (req, res) => {
  try {
    const commentData = await VideoComment.create(req.body);
    res.status(200).json(commentData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a video comment
router.put("/:id",  async (req, res) => {
  try {
    const [updatedRows] = await VideoComment.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "No video comment found with this id" });
      return;
    }

    res.status(200).json({ message: "Comment updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a video comment
router.delete("/:id",  async (req, res) => {
  try {
    const deletedComment = await VideoComment.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedComment) {
      res.status(404).json({ message: "No video comment found with this id" });
      return;
    }

    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;