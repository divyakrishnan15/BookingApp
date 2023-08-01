const router = require('express').Router()


const hotelsBookingInfoRoutes = require('./hotelsBookingInfoRoutes')
const hotelListRoutes = require('./hotelListRoutes')
const hotelBookingUserRoutes = require('./hotelBookingUserRoutes')
const hotelpaymentRoutes = require('./hotelPaymentRoutes')
const userRoutes = require('./userRoutes')
const HotelConfirmationRoutes = require('./HotelConfirmationRoutes')
const restaurantBookingInfoRoutes = require('./restaurantBookingInfoRoutes')
const restaurantBookingUserRoutes = require('./restaurantBookingUserRoutes')
const restaurantConfirmationRoutes = require('./restaurantConfirmationRoutes')
const resaurantListRoutes = require('./restaurantListRoutes')

router.use('/hotelBookingInfo',hotelsBookingInfoRoutes)
router.use('/hotelList',hotelListRoutes)
router.use('/hotelBookingUser',hotelBookingUserRoutes)
router.use('/hotelPayment',hotelpaymentRoutes)
router.use('/users',userRoutes)
router.use('/hotelConfirmation',HotelConfirmationRoutes)
router.use('./restaurantBookingInfoRoutes',restaurantBookingInfoRoutes)
router.use('./restaurantBookingUserRoutes',restaurantBookingUserRoutes)
router.userequire('./restaurantConfirmationRoutes',restaurantConfirmationRoutes)
router.use('./restaurantListRoutes',resaurantListRoutes)


module.exports = router