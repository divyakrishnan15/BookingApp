const {HotelBookingInfo,HotelList,HotelBookingUser,HotelPayment,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    HotelPayment.findAll({
      attributes:['card_number','expiry_date','cvv','amount']
  }).then((paymentData)=>{
      if(!paymentData){
          res.status(404).json({message:'No paymentData data found'})
          return
      }
      res.json(paymentData)
    
  }).catch((err)=>{
      res.status(500).json(err)
  })
})

module.exports = router
