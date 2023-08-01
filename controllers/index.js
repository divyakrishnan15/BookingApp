const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const hotelRoutes = require('./hotelRoutes')
const apiRoutes = require('./api')
const restaurantRoutes = require('./restaurantRoutes')

router.use('/',homeRoutes)
router.use('/api',apiRoutes)
router.use('/hotels',hotelRoutes)
router.use('./restaurants',restaurantRoutes)


module.exports=router