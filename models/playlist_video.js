const { Model, DataTypes, Sequelize } = require("sequelize");

const sequelize = require("../config/connection");

class PlayList extends Model {}

PlayList.init(
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
    modelName: "PlayList",
  }
);

// Export Post model
module.exports = PlayList;
