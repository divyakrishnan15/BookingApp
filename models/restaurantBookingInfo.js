const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class restaurantBookingInfo extends Model {}

restaurantBookingInfo.init(
{
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  restaurant: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_of_guests: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  },
  {
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'restaurantbookinginfo'
  }
)

module.exports = restaurantBookingInfo;
