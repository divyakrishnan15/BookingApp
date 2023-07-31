const {Model,DataTypes} = require('sequelize')
const sequelize = require('../config/connection');

class HotelBookingInfo extends Model {}

HotelBookingInfo.init(
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
  country: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  start_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_of_adults: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  num_of_children: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  num_of_rooms: {
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
  },{
    sequelize,
    freezeTableName:true,
    underscored:true,
    modelName:'hotelbookinginfo'
}
)

module.exports = HotelBookingInfo;
