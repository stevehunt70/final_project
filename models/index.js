// models/index.js
const User = require('./user');
const Video = require('./video');
const VideoComment = require('./video_comment');
const CommentThread = require('./comment_thread');
const Playlist = require('./playlist');
const PlaylistVideo = require('./playlist_video');
const ViewHistory = require('./view_history');

// A User can have many Videos
User.hasMany(Video, {
  foreignKey: 'user_id',
});

// A User can have many VideoComments
User.hasMany(VideoComment, {
  foreignKey: 'user_id',
});

// A Video belongs to a single User
Video.belongsTo(User, {
  foreignKey: 'user_id',
});

// A VideoComment belongs to a single User
VideoComment.belongsTo(User, {
  foreignKey: 'user_id'
});

// A Video can have many VideoComments
Video.hasMany(VideoComment, {
  foreignKey: 'video_id'

});

// A VideoComment belongs to a single Video
VideoComment.belongsTo(Video, {
  foreignKey: 'video_id',
});

// A User can have many CommentThreads
User.hasMany(CommentThread, {
  foreignKey: 'user_id',
});

// A CommentThread belongs to a single User
CommentThread.belongsTo(User, {
  foreignKey: 'user_id',
});

// A VideoComment can have many CommentThreads
VideoComment.hasMany(CommentThread, {
  foreignKey: 'video_comment_id',
});

// A CommentThread belongs to a single VideoComment
CommentThread.belongsTo(VideoComment, {
  foreignKey: 'video_comment_id',
});

// A User can have many Playlists
User.hasMany(Playlist, {
  foreignKey: 'user_id',
});

// A Playlist belongs to a single User
Playlist.belongsTo(User, {
  foreignKey: 'user_id',
});

// Many-to-Many relationship between Playlist and Video
Playlist.belongsToMany(Video, {
  through: PlaylistVideo,
  foreignKey: 'playlist_id',
});

Video.belongsToMany(Playlist, {
  through: PlaylistVideo,
  foreignKey: 'video_id',
});

// Many-to-Many relationship between User and Video for view history
User.belongsToMany(Video, {
    through: ViewHistory,
    foreignKey: 'user_id',
});

Video.belongsToMany(User, {
    through: ViewHistory,
    foreignKey: 'video_id',
});

module.exports = { User, Video, VideoComment, CommentThread, Playlist, PlaylistVideo, ViewHistory };