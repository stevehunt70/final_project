// models/video.js
const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Video extends Model {}

Video.init({
  id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  num_likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  url: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  thumbnail_url: {
    type: DataTypes.TEXT,
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
    modelName: "video",
  }
);

// Export Post model
module.exports = Video;
