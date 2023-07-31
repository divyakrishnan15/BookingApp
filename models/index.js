const flight=require('./flight');
const flightBooking=require('./flightBooking');

flight.hasOne(flightBooking,{
    foreignKey:'flight_num'
})

flightBooking.belongsTo(flight,{
    foreignKey:'flight_num'
})

module.exports={flight,flightBooking}