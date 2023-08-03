const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class FlightBooking extends Model {}

FlightBooking.init(
  {
    flight_num:{
      type:DataTypes.STRING,
      primaryKey: true,
      references:{
        model: 'flights',
        key: 'flight_num',

      },
      allowNull: false,
    },
    Customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DOB: {
        type: DataTypes.DATE,
        allowNull: false
      },
    Phonenumber: {
      type: DataTypes.STRING,
      unique:true,
     validate:{
      is: /^\+[1-9]\d{1,14}$/
     },
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING,
      unique:true,
      validate:{
      isEmail:true
      },
      allowNull: false,
    },
    Class: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ticket_no:{
      type:DataTypes.INTEGER,
      allowNull:false,
      unique:true
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'flightbooking'
  }
);

module.exports = FlightBooking;
