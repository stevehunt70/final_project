// video_comment-routes.js
const router = require("express").Router();
const { VideoComment, User } = require("../models");

// GET all video comments
router.get("/", async (req, res) => {
  try {
    const { video_id } = req.query;

    if (video_id) {
      const comments = await VideoComment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'] // fetch  username from User model
        }
      ],
        where: { video_id }
      });
      return res.status(200).json(comments);
    }

    // fallback: return all comments if no video_id specified
    const comments = await VideoComment.findAll({
      include: [
        {
          model: User,
          attributes: ['username'] // fetch username from User model
        }
      ]
    });
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