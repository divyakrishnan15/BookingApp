const { Model,DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class restaurantConfirmation extends Model {}

restaurantConfirmation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    num_of_guests: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone_number: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    date: {
      type: DataTypes.STRING,
      allowNull: true,
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
    modelName: "restaurantconfirmation",
  }
);

module.exports = restaurantConfirmation;