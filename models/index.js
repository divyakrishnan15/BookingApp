const HotelBookingInfo = require('./HotelBookingInfo')
const HotelList = require('./HotelList')
const HotelBookingUser = require('./HotelBookingUser')
const HotelPayment = require('./HotelPayment')
const HotelConfirmation = require('./HotelConfirmation')
const User = require('./User')
const restaurantBookingInfo = require('./restaurantBookingInfo')
const restaurantBookingUser = require('./restaurantBookingUser')
const restaurantConfirmation = require('./restaurantBookingUser')
const restaurantList = require('./restaurantList')


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


restaurantConfirmation.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(restaurantConfirmation, {
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


restaurantBookingInfo.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(restaurantBookingInfo, {
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


restaurantList.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(restaurantList, {
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


restaurantBookingUser.belongsTo(User,{
    foreignKey: 'user_id',
    onDelete:'SET NULL',
    onUpdate:'CASCADE'
})
User.hasMany(restaurantBookingUser, {
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


module.exports = {HotelBookingInfo,HotelList,HotelBookingUser,HotelPayment,HotelConfirmation,User,restaurantBookingInfo,restaurantBookingUser,restaurantConfirmation,restaurantList}


