const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class Video extends Model {}

Video.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  title: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  discription: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  num_likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
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
});

// Export Post model
module.exports = Video;
