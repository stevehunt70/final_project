// File: models/playlist_video.js
const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class PlaylistVideo extends Model {}

PlaylistVideo.init(
  {
    playlist_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "playlist_video",
  }
);

// Export Post model
module.exports = PlaylistVideo;
