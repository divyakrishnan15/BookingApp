const router = require('express').Router()
const homeRoutes = require('./homeRoutes')
const hotelRoutes = require('./hotelRoutes')
const apiRoutes = require('./api')

router.use('/',homeRoutes)
router.use('/api',apiRoutes)
router.use('/hotels',hotelRoutes)


module.exports=router