const {HotelBookingInfo,HotelList,HotelBookingUser,Payment,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    HotelBookingUser.findAll({
      attributes:['first_name','last_name','email','phone_number']
  }).then((hotelBookingUserData)=>{
      if(!hotelBookingUserData){
          res.status(404).json({message:'No User data found'})
          return
      }
      res.json(hotelBookingUserData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})

module.exports = router
