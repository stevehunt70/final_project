// File: models/comment_thread.js
const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class CommentThread extends Model {}

CommentThread.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    reply_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdOn: {
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
    modelName: "comment_thread",
  }
);

// Export Post model
module.exports = CommentThread;
