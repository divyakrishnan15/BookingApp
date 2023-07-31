const router=require('express').Router();
const Flights=require('../../models/flight');
const { DateTime } = require('luxon');

router.get('/findFlights',async(req,res)=>{
    try{
    const FlightsData=await Flights.findAll({
        order: ['flight_name'],
        where:{
            Origin:req.body.origin,
            Destination:req.params.destination
        },
        attributes:{
         exclude:['is_hasStops']
        }
    });
        res.status(200).json(FlightsData);
    }
    catch (err){
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.status(400).json(err);
    }
    });
    


//seed the flight data



module.exports=router;