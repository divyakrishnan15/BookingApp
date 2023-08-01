const router = require('express').Router()
const flightsRoutes=require('./flights')

router.use('/flights',flightsRoutes)



module.exports=router
