const router = require("express").Router();
const { CommentThread } = require("../models");
const { authMiddleware } = require("../utils/auth");

// GET all comment threads
router.get("/", async (req, res) => {
  try {
    const threads = await CommentThread.findAll();
    res.status(200).json(threads);
  } catch (err) {
    res.status(400).json(err);
  }
});

// GET a single comment thread by id
router.get("/:id", async (req, res) => {
  try {
    const threadData = await CommentThread.findByPk(req.params.id);

    if (!threadData) {
      res.status(404).json({ message: "No comment thread found with this id" });
      return;
    }

    res.status(200).json(threadData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST a new comment thread
router.post("/", async (req, res) => {
  try {
    const threadData = await CommentThread.create(req.body);
    res.status(200).json(threadData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// UPDATE a comment thread
router.put("/:id",  async (req, res) => {
  try {
    const [updatedRows] = await CommentThread.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (updatedRows === 0) {
      res.status(404).json({ message: "No comment thread found with this id" });
      return;
    }

    res.status(200).json({ message: "Thread updated successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a comment thread
router.delete("/:id", async (req, res) => {
  try {
    const deletedThread = await CommentThread.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!deletedThread) {
      res.status(404).json({ message: "No comment thread found with this id" });
      return;
    }

    res.status(200).json({ message: "Thread deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;