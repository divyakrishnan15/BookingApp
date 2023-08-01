const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class restaurantBookingUser extends Model {}

restaurantBookingUser.init(
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: true,
        autoIncrement: true
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        },
      phone_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: 'user',
            key: 'id'
          }
        },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'restaurantbookinguser'
  }
);

module.exports = restaurantBookingUser;