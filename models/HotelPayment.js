const {Model,DataTypes} = require('sequelize')
const sequelize=require('../config/connection')

class HotelPayment extends Model {}

HotelPayment.init(
    {
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true,
        },
        card_number:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        expiry_date:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        cvv:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        amount:{
            type:DataTypes.FLOAT,
            allowNull:false
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
        modelName:'hotelpayment'
    }
)

module.exports = HotelPayment