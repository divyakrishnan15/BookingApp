const router=require('express').Router();
const Flights=require('../../models/flight');
const FlightBooking =require('../../models/flightBooking');
// const { DateTime } = require('luxon');

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
    if(!FlightsData){
        res.status(404).json({message:'please provide different origin/destination'})
    }
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