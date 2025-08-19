// models/video_like.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class VideoLike extends Model {}

VideoLike.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
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
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "video_like",
    indexes: [
      {
        unique: true,
        fields: ["user_id", "video_id"], // one like per user per video
      },
    ],
  }
);

module.exports = VideoLike;
