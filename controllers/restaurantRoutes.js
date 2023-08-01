const {restaurantBookingInfo,restaurantList,restaurantBookingUser,restaurantConfirmation} = require('../models');
const router = require('express').Router()


router.get('/',(req,res)=>{
    restaurantBookingInfo.findAll({
      attributes:["city","date","num_of_guests"]
  }).then((restaurantListData)=>{
      if(!restaurantListData){
          res.status(404).json({message:'No restaurant details data found'})
          return
      }
    
        const restaurantListValues = restaurantListData.map((post) => post.get({ plain: true }));
        res.render("restaurantsMain", {restaurantListValues,user_session_data: req.session.user_session_data});

  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/list/:id',(req,res)=>{
    restaurantList.findAll({
      attributes:["id","restaurant_name","filename","reviews","description"]
  }).then((restaurantListData)=>{
      if(!restaurantListData){
          res.status(404).json({message:'No restaurant details data found'})
          return
      }
      
    const restaurantListRouteValues = restaurantListData.map((post) => post.get({ plain: true }));
    res.render("restaurantsList", {restaurantListRouteValues,user_session_data: req.session.user_session_data,bookingId:req.params.id});
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/list/:restaurant_name',(req,res)=>{
  restaurantList.findAll({
    attributes:["id","restaurant_name","filename","reviews","description"],
    where:{
      restaurantName:req.body.restaurant_name
    }
}).then((restaurantListData)=>{
    if(!restaurantListData){
        res.status(404).json({message:'No restaurant details data found'})
        return
    }
    
  const SinglerestaurantListRouteValues = restaurantListData.get({ plain: true });
  res.render("restaurantsList", {SinglerestaurantListRouteValues,user_session_data: req.session.user_session_data});
}).catch((err)=>{
    res.status(500).json(err)
})
})


router.get('/userInfo/:id',(req,res)=>{
    restaurantBookingUser.findAll({
      attributes:["first_name","last_name","email","phone_number"]
  }).then((restaurantUserData)=>{
      if(!restaurantUserData){
          res.status(404).json({message:'No restaurant user data found'})
          return
      }
    const restaurantUserRouteValues = restaurantUserData.map((post) => post.get({ plain: true }));
    res.render("restaurantsUserInfo", {restaurantUserRouteValues,user_session_data: req.session.user_session_data,bookingId:req.params.id});
  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/confirmation/:id',(req,res)=>{
  restaurantConfirmation.findOne({
    attributes:["id","city","date","num_of_guests","restaurant_name","reviews","description","first_name","last_name","email","phone_number","user_id"],
    where:{
      id:req.params.id
    },
      }).then((restaurantconfirmationData)=>{
      if(!restaurantconfirmationData){
          res.status(404).json({message:'No restaurant dashboard data found'})
          return
      }


  const restaurantconfirmationValues = restaurantconfirmationData.get({ plain: true })
  res.render("restaurantsConfirmation",{restaurantconfirmationValues,user_session_data:req.session.user_session_data,bookingId:req.params.id})

}).catch((err)=>{
  res.status(500).json(err)
})
})

module.exports = router