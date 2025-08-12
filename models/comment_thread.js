const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class CommentThread extends Model {}

CommentThread.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reply_text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.TEXT,
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
    modelName: "CommentThread",
  }
);

// Export Post model
module.exports = CommentThread;
