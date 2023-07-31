const {HotelBookingInfo,HotelList,HotelBookingUser,HotelPayment,User,HotelConfirmation} = require('../models');
const router = require('express').Router()


router.get('/',(req,res)=>{
  // if(req.session.user_session_data){
    HotelBookingInfo.findAll({
      attributes:["city","country","start_date","end_date","num_of_adults","num_of_children","num_of_rooms"]
  }).then((hotelListData)=>{
      if(!hotelListData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
    
        const hotelListValues = hotelListData.map((post) => post.get({ plain: true }));
        res.render("hotelsMain", {hotelListValues,user_session_data: req.session.user_session_data});

  }).catch((err)=>{
      res.status(500).json(err)
  })
// }
// else{
//   res.render('notloggedin')
// }
})





//Hotel List
router.get('/list/:id',(req,res)=>{
    HotelList.findAll({
      attributes:["id","hotel_name","country","price","filename","reviews","description"]
  }).then((hotelListData)=>{
      if(!hotelListData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
      
    const hotelListRouteValues = hotelListData.map((post) => post.get({ plain: true }));
    res.render("hotelsList", {hotelListRouteValues,user_session_data: req.session.user_session_data,bookingId:req.params.id});
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



//Hotel List - single Hotel
router.get('/list/:hotel_name',(req,res)=>{
  HotelList.findAll({
    attributes:["id","hotel_name","country","price","filename","reviews","description"],
    where:{
      hotelName:req.body.hotel_name
    }
}).then((hotelListData)=>{
    if(!hotelListData){
        res.status(404).json({message:'No hotelDetails data found'})
        return
    }
    
  const SinglehotelListRouteValues = hotelListData.get({ plain: true });
  res.render("hotelsList", {SinglehotelListRouteValues,user_session_data: req.session.user_session_data});
}).catch((err)=>{
    res.status(500).json(err)
})
})





//Hotel Guest User info
router.get('/userInfo/:id',(req,res)=>{
    HotelBookingUser.findAll({
      attributes:["first_name","last_name","email","phone_number"]
  }).then((hotelUserData)=>{
      if(!hotelUserData){
          res.status(404).json({message:'No hotel User data found'})
          return
      }
    const hotelUserRouteValues = hotelUserData.map((post) => post.get({ plain: true }));
    res.render("hotelsUserInfo", {hotelUserRouteValues,user_session_data: req.session.user_session_data,bookingId:req.params.id});
  }).catch((err)=>{
      res.status(500).json(err)
  })
})




//Hotel Payment info
router.get('/payment/:id',(req,res)=>{
    HotelPayment.findAll({
      attributes:["card_number","expiry_date","cvv","amount"]
  }).then((hotelPaymentData)=>{
      if(!hotelPaymentData){
          res.status(404).json({message:'No hotel Payment data found'})
          return
      }
    const hotelPaymentRouteValues = hotelPaymentData.map((post) => post.get({ plain: true }));
    res.render("hotelsPayment", {hotelPaymentRouteValues,user_session_data: req.session.user_session_data,env: process.env,bookingId:req.params.id});
  
  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.get('/confirmation/:id',(req,res)=>{
  HotelConfirmation.findOne({
    attributes:["id","city","country","start_date",	"end_date",	"num_of_adults","num_of_children","num_of_rooms","hotel_name","price","reviews","description","first_name",	"last_name","email","phone_number","card_number","expiry_date","cvv","amount","user_id"],
    where:{
      id:req.params.id
    },
      }).then((hotelconfirmationData)=>{
      if(!hotelconfirmationData){
          res.status(404).json({message:'No hotel Dashboard data found'})
          return
      }
      // res.json("bookingsHotelDashboardData = ",bookingsHotelDashboardData)

  const hotelconfirmationValues = hotelconfirmationData.get({ plain: true })
  res.render("hotelsConfirmation",{hotelconfirmationValues,user_session_data:req.session.user_session_data,bookingId:req.params.id})

}).catch((err)=>{
  res.status(500).json(err)
})
})

module.exports = router

