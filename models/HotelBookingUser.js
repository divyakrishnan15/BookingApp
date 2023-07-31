const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class HotelBookingUser extends Model {}

HotelBookingUser.init(
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
        // validate: {
        //     len: [1]
        // }
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
    //  hotel_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     references: {
    //         model: 'hotel',
    //         key: 'id'
    //     },
    //   },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'hotelbookinguser'
  }
);

module.exports = HotelBookingUser;