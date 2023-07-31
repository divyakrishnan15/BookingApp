const sequelize = require('../config/connection');
const {flight} = require('../models');
const flightData = require('./flightsData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const flights = await flight.bulkCreate(flightData, {
      individualHooks: true,
      returning: true,
    });
}
seedDatabase();