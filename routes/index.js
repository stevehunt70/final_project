// routes/index.js

const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");
const userRoutes = require("./userRoutes");

const videoRoutes = require("./video-routes");
const videoCommentRoutes = require('./video_comment-routes');
const commentThreadRoutes = require('./comment_thread-routes');
const playlistRoutes = require('./playlist-routes');
const playlistVideoRoutes = require('./playlist_video-routes');
const viewHistoryRoutes = require('./view_history-routes');

// create a default route for /api
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API" });
});

router.use("/api/categories", categoryRoutes);
router.use("/api/posts", postRoutes);
router.use("/api/users", userRoutes);
router.use('/api/videos', videoRoutes);
router.use('/api/video_comments', videoCommentRoutes);
router.use('/api/comment_threads', commentThreadRoutes);
router.use('/api/playlists', playlistRoutes);
router.use('/api/playlist_videos', playlistVideoRoutes);
router.use('/api/view_history', viewHistoryRoutes);

module.exports = router;


