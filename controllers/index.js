const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const hotelRoutes = require('./hotelRoutes')
const flightRoutes=require('./flightRoutes')
const apiRoutes = require('./api')

router.use('/',homeRoutes)
router.use('/api',apiRoutes)
router.use('/hotels',hotelRoutes)
router.use('/',flightRoutes)

module.exports=router