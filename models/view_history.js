const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ViewHistory extends Model {}

ViewHistory.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', // This references the table name, not the model name
        key: 'id',
      },
    },
    video_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'video', // This references the table name, not the model name
        key: 'id',
      },
    },
    watch_date: {
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
    modelName: 'view_history',
  }
);

module.exports = ViewHistory;


// ViewHistory.init(
//   {
//     user_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'user', // This references the table name, not the model name
//         key: 'id',
//       },
//     },
//     video_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'video', // This references the table name, not the model name
//         key: 'id',
//       },
//     },
//     watch_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },
//   },

// ViewHistory.init(
//   {
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     video_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     watch_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: DataTypes.NOW,
//     },