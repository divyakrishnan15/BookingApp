const router = require('express').Router()


const hotelsBookingInfoRoutes = require('./hotelsBookingInfoRoutes')
const hotelListRoutes = require('./hotelListRoutes')
const hotelBookingUserRoutes = require('./hotelBookingUserRoutes')
const hotelpaymentRoutes = require('./hotelPaymentRoutes')
const userRoutes = require('./userRoutes')
const HotelConfirmationRoutes = require('./HotelConfirmationRoutes')

router.use('/hotelBookingInfo',hotelsBookingInfoRoutes)
router.use('/hotelList',hotelListRoutes)
router.use('/hotelBookingUser',hotelBookingUserRoutes)
router.use('/hotelPayment',hotelpaymentRoutes)
router.use('/users',userRoutes)
router.use('/hotelConfirmation',HotelConfirmationRoutes)


module.exports = router