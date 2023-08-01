const sequelize = require('../config/connection');
// const {Flights,flightBooking} = require('../models');
const flightData = require('./flightsData');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
   await flightData();
    process.exit(0);
}
seedDatabase();