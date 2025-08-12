const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class VideoComment extends Model {}

VideoComment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
      defaultValue: Sequelize.NOW,
    },
    video_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "VideoComment",
  }
);

// Export Post model
module.exports = VideoComment;
