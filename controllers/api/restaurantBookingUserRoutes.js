const {restaurantBookingUser} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    restaurantBookingUser.findAll({
      attributes:['first_name','last_name','email','phone_number']
  }).then((restaurantBookingUserData)=>{
      if(!restaurantBookingUserData){
          res.status(404).json({message:'No User data found'})
          return
      }
      res.json(restaurantBookingUserData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})

module.exports = router
