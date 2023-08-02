const router=require('express').Router();
const Flights=require('../../models/Flights');
const FlightBooking =require('../../models/flightBooking');


router.get('/',(req,res)=>{
    res.render('flights')
    })
    

    router.get('/', async (req, res) => {
        const flightData = await Flights.findAll().catch((err) => { 
            res.json(err);
          });
            const dishes = dishData.map((dish) => dish.get({ plain: true }));
            res.render('all', { dishes });
          });