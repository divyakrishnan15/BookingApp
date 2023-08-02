const router = require('express').Router()
const flightsRoutes=require('../api/flights')

router.use('/flights',flightsRoutes)



module.exports=router
