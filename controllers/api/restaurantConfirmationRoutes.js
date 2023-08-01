const {restaurantConfirmation,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    restaurantConfirmation.findAll({
      attributes:["id","city","date","num_of_guests","restaurant_name","filename","reviews","description","first_name","last_name","email","phone_number","user_id"],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      }
  }).then((restaurantConfirmationData)=>{
      if(!restaurantConfirmationData){
          res.status(404).json({message:'No restaurant details data found'})
          return
      }
      res.json(restaurantConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/:id',(req,res)=>{
    restaurantConfirmation.findOne({
      attributes:["id","city","date","num_of_guests","restaurant_name","filename","reviews","description","first_name","last_name","email","phone_number","user_id"],
      include:{
        model:User,
        attributes:{exclude:["password"]}
      },
      where:{
        id:req.params.id
      }
  }).then((restaurantConfirmationData)=>{
      if(!restaurantConfirmationData){
          res.status(404).json({message:'No restaurant details data found'})
          return
      }
      res.json(restaurantConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.post('/',(req,res)=>{
    restaurantConfirmation.create({
        city:req.body.city,
        date:req.body.date,
        num_of_guests:req.body.num_of_guests,
        restaurant_name:req.body.restaurant_name,
        filename:req.body.filename,
        reviews:req.body.reviews,
        description:req.body.description,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email,
        phone_number:req.body.phone_number,
        user_id:req.body.user_id
  }).then((restaurantConfirmationData)=>{
      if(!restaurantConfirmationData){
          res.status(404).json({message:'No restaurant confirmation data found'})
          return
      }
      res.json(restaurantConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.put('/:id',(req,res)=>{
    restaurantConfirmation.update(req.body,{
        where:{
            id:req.params.id
        }
  }).then((restaurantConfirmationData)=>{
      if(!restaurantConfirmationData){
          res.status(404).json({message:'No restaurant confirmation data found'})
          return
      }
      res.json(restaurantConfirmationData)
      
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.delete('/:id',(req,res)=>{
    console.log("req.params.id = ",req.params.id)
    restaurantConfirmation.destroy({
        where:{
            id:req.params.id
        }
  }).then((restaurantConfirmationData)=>{
      if(!restaurantConfirmationData){
          res.status(404).json({message:'No restaurant confirmation data found'})
          return
      }
      res.json(restaurantConfirmationData)
      
  }).catch((err)=>{
    console.log(err)
      res.status(500).json(err)
  })
})

module.exports=router