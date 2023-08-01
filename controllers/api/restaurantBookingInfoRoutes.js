const {restaurantBookingInfo,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    restaurantBookingInfo.findAll({
      attributes:['city','date','num_of_guests'],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((restaurantBookingInfoData)=>{
      if(!restaurantBookingInfoData){
          res.status(404).json({message:'No restaurant data data found'})
          return
      }
      res.json(restaurantBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/:id',(req,res)=>{
    restaurantBookingInfo.findOne({
      attributes:['city','date','num_of_guests'],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((restaurantBookingInfoData)=>{
      if(!restaurantBookingInfoData){
          res.status(404).json({message:'No restaurant data data found'})
          return
      }
      res.json(restaurantBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.post('/',(req,res)=>{
    console.log("**** = ",req.session.user_id)
    restaurantBookingInfo.create({
        city:req.body.city,
        date:req.body.start_date,
        num_of_guests:req.body.num_of_guests,
        user_id:req.body.user_id
  }).then((restaurantBookingInfoData)=>{
      if(!restaurantBookingInfoData){
          res.status(404).json({message:'No restaurant booking info data found'})
          return
      }
      res.json(restaurantBookingInfoData)
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


module.exports = router
