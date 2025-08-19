const router = require("express").Router();
const { VideoComment, User } = require("../models");

// GET all video comments
router.get("/", async (req, res) => {
  try {
    const { video_id } = req.query;

    const query = {
      include: [{ model: User, as: "author", attributes: ["id", "username"] }],
      order: [["created_at", "DESC"]],
    };

    if (video_id) {
      query.where = { video_id };
    }

    const comments = await VideoComment.findAll(query);
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET comments for a specific video
router.get("/", async (req, res) => {
  try {
    const { video_id } = req.query;

    const query = {
      include: [{ model: User, as: "author", attributes: ["id", "username"] }],
      order: [["created_at", "DESC"]],
    };

    if (video_id) {
      query.where = { video_id };
    }

    const comments = await VideoComment.findAll(query);
    res.status(200).json(comments);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST a new video comment
router.post("/", async (req, res) => {
  try {
    const newComment = await VideoComment.create(req.body);

    // re-fetch including author
    const commentWithAuthor = await VideoComment.findByPk(newComment.id, {
      include: [{ model: User, as: "author", attributes: ["id", "username"] }],
    });

    res.status(200).json(commentWithAuthor);
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