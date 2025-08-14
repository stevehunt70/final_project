// routes/index.js

const router = require("express").Router();

const postRoutes = require("./post");
const categoryRoutes = require("./category");
const userRoutes = require("./user");

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


// const router = require('express').Router();
// const userRoutes = require('./user');
// const videoRoutes = require('./video-routes');
// const videoCommentRoutes = require('./video_comment-routes');
// const commentThreadRoutes = require('./comment_thread-routes');
// const playlistRoutes = require('./playlist-routes');
// const playlistVideoRoutes = require('./playlist_video-routes');
// const viewHistoryRoutes = require('./view_history-routes');

// router.get("/api", (req, res) => {
//   res.json({ message: "Welcome to the API" });
// });

// // Use these route files with their respective endpoints
// router.use('/users', userRoutes);
// router.use('/videos', videoRoutes);
// router.use('/video_comments', videoCommentRoutes);
// router.use('/comment_threads', commentThreadRoutes);
// router.use('/playlists', playlistRoutes);
// router.use('/playlist_videos', playlistVideoRoutes);
// router.use('/view_history', viewHistoryRoutes);

// // For any request that doesn't match a defined route, send a 404 error.
// // router.use((req, res) => {
// //   res.status(404).end();
// // });

// module.exports = router;
