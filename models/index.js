const HotelBookingInfo = require('./HotelBookingInfo')
const HotelList = require('./HotelList')
const HotelBookingUser = require('./HotelBookingUser')
const HotelPayment = require('./HotelPayment')
const HotelConfirmation = require('./HotelConfirmation')
const Flights=require('./Flights')
const flightBooking=require('./flightBooking')
const User = require('./User')


HotelConfirmation.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(HotelConfirmation, {
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
});




HotelBookingInfo.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(HotelBookingInfo, {
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
});




HotelList.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(HotelList, {
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
});




HotelBookingUser.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(HotelBookingUser, {
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
});




HotelPayment.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(HotelPayment, {
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
});


Flights.hasMany(flightBooking,{
    foreignKey:'flight_num'
})

flightBooking.belongsTo(Flights,{
    foreignKey:'flight_num'
})

module.exports = {HotelBookingInfo,HotelList,HotelBookingUser,HotelPayment,HotelConfirmation,User,Flights,flightBooking}


