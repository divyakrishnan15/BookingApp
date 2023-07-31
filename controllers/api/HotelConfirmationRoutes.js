const {HotelBookingInfo,HotelList,HotelBookingUser,Payment,User,HotelConfirmation} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    HotelConfirmation.findAll({
      attributes:["id","city","country","start_date","end_date","num_of_adults","num_of_children","num_of_rooms","hotel_name","filename","price","reviews","description","first_name","last_name","email","phone_number","card_number","expiry_date","cvv","amount","user_id"],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((hotelConfirmationData)=>{
      if(!hotelConfirmationData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
      res.json(hotelConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.get('/:id',(req,res)=>{
    HotelConfirmation.findOne({
      attributes:["id","city","country","start_date","end_date","num_of_adults","num_of_children","num_of_rooms","hotel_name","filename","price","reviews","description","first_name","last_name","email","phone_number","card_number","expiry_date","cvv","amount","user_id"],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      },
      where:{
        id:req.params.id
      }
  }).then((hotelConfirmationData)=>{
      if(!hotelConfirmationData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
      res.json(hotelConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.post('/',(req,res)=>{
    HotelConfirmation.create({
        city:req.body.city,
        country:req.body.country,
        start_date:req.body.start_date,
        end_date:req.body.end_date,
        num_of_adults:req.body.num_of_adults,
        num_of_children:req.body.num_of_children,
        num_of_rooms:req.body.num_of_rooms,
        hotel_name:req.body.hotel_name,
        filename:req.body.filename,
        price:req.body.price,
        reviews:req.body.reviews,
        description:req.body.description,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        card_number:req.body.card_number,
        expiry_date:req.body.expiry_date,
        cvv:req.body.cvv,
        amount:req.body.amount,
        user_id:req.body.user_id
  }).then((hotelConfirmationData)=>{
      if(!hotelConfirmationData){
          res.status(404).json({message:'No hotel Confirmation data found'})
          return
      }
      res.json(hotelConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.put('/:id',(req,res)=>{
    HotelConfirmation.update(req.body,{
        where:{
            id:req.params.id
        }
  }).then((hotelConfirmationData)=>{
      if(!hotelConfirmationData){
          res.status(404).json({message:'No hotel Confirmation data found'})
          return
      }
      res.json(hotelConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.delete('/:id',(req,res)=>{
    console.log("req.params.id = ",req.params.id)
    HotelConfirmation.destroy({
        where:{
            id:req.params.id
        }
  }).then((hotelConfirmationData)=>{
      if(!hotelConfirmationData){
          res.status(404).json({message:'No hotel Confirmation data found'})
          return
      }
      res.json(hotelConfirmationData)
      
  }).catch((err)=>{
    console.log(err)
      res.status(500).json(err)
  })
})


module.exports=router