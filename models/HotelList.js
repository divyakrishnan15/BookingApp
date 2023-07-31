const {Model,DataTypes} = require('sequelize')
const sequelize=require('../config/connection')

class HotelList extends Model {}

HotelList.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        hotel_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        country:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        filename: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reviews:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        description: {
            type: DataTypes.STRING,
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
        modelName:'hotellist'
    }
)

module.exports = HotelList