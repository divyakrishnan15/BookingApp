const router = require('express').Router()
const apiRoutes=require('./api')
const flightRoutes=require('./flightRoutes')
const Flights=require('../models/Flights');


router.use('/',flightRoutes)


router.use('/api',apiRoutes)


// router.get('/',(req,res)=>{
//     // if(req.session.user_session_data){
//       Flights.findAll({
//         attributes:["flight_name"]
//     }).then((hotelListData)=>{
//         if(!hotelListData){
//             res.status(404).json({message:'No hotelDetails data found'})
//             return
//         }
      
//          // const hotelListValues = hotelListData.map((post) => post.get({ plain: true }));
//           res.render("flights");
  
//     }).catch((err)=>{
//         res.status(500).json(err)
//     })

// })
module.exports=router

