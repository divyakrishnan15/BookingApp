const flight=require('./Flights');
const flightBooking=require('./flightBooking');

flight.hasMany(flightBooking,{
    foreignKey:'flight_num'
})

flightBooking.belongsTo(flight,{
    foreignKey:'flight_num'
})

module.exports={flight,flightBooking}