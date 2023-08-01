const router=require('express').Router();
const Flights=require('../../models/Flights');
const FlightBooking =require('../../models/flightBooking');



router.get('/', async (req, res) => {
    // We find all dishes in the db and set the data equal to dishData
    const FlightsData = await Flights.findAll().catch((err) => { 
      res.json(err);
    });
    // We use map() to iterate over dishData and then add .get({ plain: true }) each object to serialize it. 
    const flights = FlightsData.map((dish) => dish.get({ plain: true }));
    // We render the template, 'all', passing in dishes, a new array of serialized objects.
    res.render('all', { flights });
    });


router.get('/findFlights',async(req,res)=>{
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
    const flightlist = FlightsData.map((flight)=>flight.get({plain:true}))
    res.render('flights',{flightlist})
     res.status(200).json(FlightsData);
    }
    catch (err){
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.status(500).json(err);
    }
    });
    


router.post('/FlightBooking',async(req,res)=>{
    try{
      const Bookingdata= await FlightBooking.create({
    Customer_name:req.body.Customer_name,
    gender: req.body.gender,
    DOB:req.body.DOB,
    Phonenumber:req.body.Phonenumber,
    Email:req.body.Email,
    Class:req.body.Class    
      })
      res.json({success:true,booking:Bookingdata});
    }
    catch(err){
     res.status(500).json(err);
    }
});


router.get('/BookedTickets',async(req,res)=>{
    const TicketNum = req.params.ticket_num;
try{
    const ticketDetails=await Flights.findOne({
       
        include:{
            model:FlightBooking,
            attributes:['Customer_name','Phonenumber','Email','Class']
        },
        attributes:[
            'flight_num', 'flight_name', 'start_time', 'end_time','price'
        ]
    })
   if(!ticketDetails){
    res.status(404).json({message:'No ticket exists'})
   }
   res.status(200).json(ticketDetails)
}
catch(err){
    res.status(500).json(err)
}
})
module.exports=router;