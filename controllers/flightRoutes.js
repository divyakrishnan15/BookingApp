const router=require('express').Router();
const path =require("path")
const Flights=require('../models/Flights');

router.get('/flights',async(req,res)=>{
    try{
    res.render("flights")
    }
    catch (err){
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.status(500).json(err);
    }
    });

router.post('/flights',async(req,res)=>{
    try{
    const FlightsData=await Flights.findAll({
        order: ['flight_name'],
        where:{
            Origin:req.body.origin,
            Destination:req.body.destination
        },
        attributes:{
         exclude:['is_hasStops']
        }
    });
    if(!FlightsData){
        res.status(404).json({message:'please provide different origin/destination'})
    }
 console.log(FlightsData)
    const flightlist = FlightsData.map((flight)=>flight.get({plain:true}))
    // res.redirect('/flightsList');
    res.render('flightsList',{flightlist})
     res.status(200).json(FlightsData);
    }
    catch (err){
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.status(500).json(err);
    }
    });
    
router.get('/flightsList',async(req,res)=>{
    try{
    res.render('flightsList')
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router;