const router = require("express").Router();
const { ViewHistory } = require("../models");
const { authMiddleware } = require("../utils/auth");

// GET all view history records (potentially for admin use)
router.get("/", async (req, res) => {
  try {
    const viewHistory = await ViewHistory.findAll();
    res.status(200).json(viewHistory);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST a new view history entry
router.post("/",  async (req, res) => {
  try {
    const viewHistoryData = await ViewHistory.create(req.body);
    res.status(200).json(viewHistoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a view history entry
router.delete("/",  async (req, res) => {
  try {
    const deletedEntry = await ViewHistory.destroy({
      where: {
        user_id: req.body.user_id,
        video_id: req.body.video_id,
      },
    });

    if (deletedEntry === 0) {
      res.status(404).json({ message: "No view history entry found" });
      return;
    }

    res.status(200).json({ message: "View history entry deleted successfully" });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;