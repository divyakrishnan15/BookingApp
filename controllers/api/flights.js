const router=require('express').Router();
const Flights=require('../../models/Flights');
// const FlightBooking =require('../../models/flightBooking');


router.get('/',async(req,res)=>{
    try{
       const flights= Flights.findAll({
            attributes:["flight_name"]

        });
        if(!flights){
                res.status(404).json({message:'No flights data found'})
                return
            }
            console.log("hi")
            res.status(200).json(flights);
            
    }
    catch (err){
        // If an error occurs, send an error response
        console.error('Error fetching flights:', err);
        res.status(500).json(err);
    }
    });




router.post('/',async(req,res)=>{
    try{
    const FlightsData=await Flights.findAll({
        order: ['flight_name'],
        where:{
            origin:req.body.origin,
            destination:req.body.destination
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
  
 //to book flight
 router.get('/FlightBooking/:id'),async(req,res)=>{
    try{
        res.render('ticketbooking')
     }
    catch (err){
        // If an error occurs, send an error response
         console.error('Error fetching the form:', err);
         res.status(500).json(err);
     }
}
 router.post('/FlightBooking/:id',async(req,res)=>{
     try{
      const Bookingdata= await FlightBooking.create({
    Customer_name:req.body.Customer_name,
    gender: req.body.gender,
    DOB:req.body.DOB,
   Phonenumber:req.body.Phonenumber,
    Email:req.body.Email,
    Class:req.body.Class,
     ticket_num:req.body.ticket_num
      })
      res.json({success:true,booking:Bookingdata});
    }
    catch(err){
      res.status(500).json(err);
     }
});


 router.get('/FlightTicket',async(req,res)=>{
    
 try{
     const ticketDetails=await Flights.create({
       
        include:{
            model:FlightBooking,
            attributes:['Customer_name','Phonenumber','Email','Class']
        },
        attributes:[
            'flight_num', 'flight_name', 'origin','destination','start_time', 'end_time','price'
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