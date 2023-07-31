const {HotelBookingInfo,HotelList,HotelBookingUser,Payment,User} = require('../../models');
const router = require('express').Router()

router.get('/',(req,res)=>{
    HotelList.findAll({
      attributes:["id","hotel_name","country","price","filename","reviews","description"]
  }).then((hotelListData)=>{
      if(!hotelListData){
          res.status(404).json({message:'No hotelDetails data found'})
          return
      }
      res.json(hotelListData)
      
    // const hotelListRouteValues = hotelListData.map((post) => post.get({ plain: true }));
    // res.render("hotelsList", {hotelListRouteValues,loggedIn: req.session.loggedIn});
  }).catch((err)=>{
      res.status(500).json(err)
  })
})

//Hotel List - single Hotel - by ID
// router.get('/:hotel_name',(req,res)=>{
//   HotelList.findOne({
//     attributes:["id","hotel_name","country","price","filename","reviews","description"],
//     where:{
//       hotel_name:req.params.hotel_name
//     }
// }).then((hotelListData)=>{
//     if(!hotelListData){
//         res.status(404).json({message:'No hotelDetails data found'})
//         return
//     }
//     res.json(hotelListData)
    
// }).catch((err)=>{
//     res.status(500).json(err)
// })
// })


//Hotel List - single Hotel
router.get('/:id',(req,res)=>{
  HotelList.findOne({
    attributes:["id","hotel_name","country","price","filename","reviews","description"],
    where:{
      id:req.params.id
    }
}).then((hotelListData)=>{
    if(!hotelListData){
        res.status(404).json({message:'No hotelDetails data found'})
        return
    }
    res.json(hotelListData)
    
}).catch((err)=>{
    res.status(500).json(err)
})
})


router.put('/:id',(req,res)=>{
  HotelList.update(req.body,{
      where:{
          id:req.params.id
      }
}).then((hotelListData)=>{
    if(!hotelListData){
        res.status(404).json({message:'No Hotel data found'})
        return
    }
    res.json(hotelListData)
    
}).catch((err)=>{
    res.status(500).json(err)
})
})

// //Hotel List - single Hotel
// router.post('/:hotel_name',(req,res)=>{
//   HotelList.create({
//           hotel_name=req.body.hotel_name,
//           country=req.body.country,

// }).then((hotelListData)=>{
//     if(!hotelListData){
//         res.status(404).json({message:'No hotelDetails data found'})
//         return
//     }
//     res.json(hotelListData)
    
// }).catch((err)=>{
//     res.status(500).json(err)
// })
// })



module.exports = router
