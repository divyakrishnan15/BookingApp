const router = require('express').Router()
const path = require('path')
const {HotelBookingInfo,HotelList,HotelBookingUser,Payment,User,HotelConfirmation} = require('../models');


router.get('/',(req,res)=>{
    HotelList.findAll({
      attributes:["hotel_name"]
  }).then((hotelListData)=>{
      if(!hotelListData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }


        const hotelListValues = hotelListData.map((post) => post.get({ plain: true }));
        res.render("homepage", {hotelListValues,user_session_data: req.session.user_session_data});

  }).catch((err)=>{
      res.status(500).json(err)
  })
})


router.get('/chat',(req,res)=>{
    res.render("chat",{user_session_data:req.session.user_session_data})
    //   res.sendFile(path.join(__dirname,'/../views/layouts/chat.html'))
})


router.get('/flights',(req,res)=>{
    HotelList.findAll({
      attributes:["hotel_name","country","price","filename","reviews","description"]
  }).then((hotelListData)=>{
      if(!hotelListData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
    //   res.json(hotelListData)
    
        const hotelListValues = hotelListData.map((post) => post.get({ plain: true }));
        res.render("flights", {hotelListValues,user_session_data: req.session.user_session_data});

  }).catch((err)=>{
      res.status(500).json(err)
  })
})



router.get('/login',(req,res)=>{
    res.render("login", {user_session_data: req.session.user_session_data});
  })


router.get('/signup',(req,res)=>{
    res.render("signup", {user_session_data: req.session.user_session_data});
})


router.get('/dashboard',(req,res)=>{
    HotelConfirmation.findAll({
        where:{
            user_id:req.session.user_session_data.user_id
        },
        attributes:["id","city","country","start_date",	"end_date",	"num_of_adults","num_of_children","num_of_rooms","hotel_name","filename","price","reviews","description","first_name",	"last_name","email","phone_number","card_number","expiry_date","cvv","amount","user_id"]
    }).then((bookingsHotelDashboardData)=>{
        if(!bookingsHotelDashboardData){
            res.status(404).json({message:'No hotel Dashboard data found'})
            return
        }
      
    const hotelDashboardValues = bookingsHotelDashboardData.map((post) => post.get({ plain: true }));
    res.render("bookingHotelDashboard",{hotelDashboardValues,user_session_data:req.session.user_session_data})

}).catch((err)=>{
    res.status(500).json(err)
})
})







module.exports = router;