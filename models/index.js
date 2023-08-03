const Flights=require('./Flights');
const flightBooking=require('./flightBooking');



Flights.hasMany(flightBooking,{
    foreignKey:'flight_num'
})

flightBooking.belongsTo(Flights,{
    foreignKey:'flight_num'
})

module.exports={Flights,flightBooking}