// File: models/video_comment.js
const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class VideoComment extends Model {}

VideoComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    num_likes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
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
    modelName: "video_comment",
  }
);

// Export Post model
module.exports = VideoComment;
