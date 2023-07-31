const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Flights = require('./flight');

class FlightBooking extends Model {}

FlightBooking.init(
  {
    flight_num:{
     type:DataTypes.STRING,
     references:{
        model:'Flights',
        key:'flight_num'
     }
    },
    Customer_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
      type: DataTypes.INTEGER,
      unique:true,
      isPhoneNumber(value) {
        // Use your phone number validation logic here
        const phoneRegex = /^\+\d{1,3}-\d{6,14}$/; 
        if (!phoneRegex.test(value)) {
          throw new Error('Invalid phone number format');
        }
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'FlightBooking'
  }
);

module.exports = FlightBooking;
