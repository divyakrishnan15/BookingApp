const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flights extends Model {}

Flights.init(
  {
    flight_num: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
     
    },
    flight_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    destination: {
      type: DataTypes.STRING,
      allowNull: false
    },
    start_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    num_of_Stops: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_hasStops:{
      type:DataTypes.BOOLEAN
    },
    price:{
      type:DataTypes.FLOAT,
      allowNull:false
     },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flights'
  }
);

module.exports = Flights;
