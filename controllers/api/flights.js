const router=require('express').Router();
const Flights=require('../../models/flight');

router.get('/findFlights',(req,res)=>{
    Flights.findAll({
        order: ['fight_name'],
        where:{
            Origin,
            Destination
        },
        attributes:{
         exclude:['is_hasStops']
        }
    }).then((FlightsData)=>{
        res.json(FlightsData);
    }).catch ((err)=> {
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.json(err);
    });
    
});

//seed the flight data

module.exports=router;