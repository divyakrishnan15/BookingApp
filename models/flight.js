const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Flights extends Model {}

Flights.init(
  {
    flight_num: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    flight_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Origin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Destination: {
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
    price:{
     type:DataTypes.FLOAT,
     allowNull:false
    },
    num_of_Stops: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_hasStops:{
      type:DataTypes.BOOLEAN
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Flights'
  }
);

module.exports = Flights;
