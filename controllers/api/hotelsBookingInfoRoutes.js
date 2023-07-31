const {HotelBookingInfo,HotelList,HotelBookingUser,Payment,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    HotelBookingInfo.findAll({
      attributes:['city','country','start_date','end_date','num_of_adults','num_of_children','num_of_rooms'],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((hotelBookingInfoData)=>{
      if(!hotelBookingInfoData){
          res.status(404).json({message:'No hotelsData data found'})
          return
      }
      res.json(hotelBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.get('/:id',(req,res)=>{
    HotelBookingInfo.findOne({
      attributes:['city','country','start_date','end_date','num_of_adults','num_of_children','num_of_rooms'],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((hotelBookingInfoData)=>{
      if(!hotelBookingInfoData){
          res.status(404).json({message:'No hotelsData data found'})
          return
      }
      res.json(hotelBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.post('/',(req,res)=>{
    console.log("**** = ",req.session.user_id)
    HotelBookingInfo.create({
        city:req.body.city,
        country:req.body.country,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        num_of_adults:req.body.num_of_adults,
        num_of_children:req.body.num_of_children,
        num_of_rooms:req.body.num_of_rooms,
        user_id:req.body.user_id
  }).then((hotelBookingInfoData)=>{
      if(!hotelBookingInfoData){
          res.status(404).json({message:'No hotels Booking Info data found'})
          return
      }
      res.json(hotelBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


module.exports = router
