const { Flights } = require('../models');

const flightData=[
        {
            flight_num:"AC1231",
            flight_name:"AirCanada",
            origin:"Toronto,ON",
            destination:"Montreal,QC",
            start_time:"6:00",
            end_time:"7:00",
            num_of_Stops:"non-stop",
            is_hasStops:false,
            price: "500.00"

        },
        {
            flight_num:"AC1232",
           flight_name:"AirCanada",
            origin:"Toronto,ON",
            destination:"Quebec,QC",
            start_time:"07:00",
             end_time:"09:00",
             num_of_Stops:"non-stop",
             is_hasStops:false,
             price: "500.00"

        },
        {
                     flight_num:"AC1233",
                    flight_name:"AirCanada",
                     origin:"Toronto,ON",
                      destination:"Vancouver,BC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1234",
                    flight_name:"AirCanada",
                     origin:"Montreal,QC",
                      destination:"Quebec,QC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1235",
                    flight_name:"AirCanada",
                     origin:"Montreal,QC",
                      destination:"Toronto,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"2-stops",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1236",
                    flight_name:"AirCanada",
                     origin:"Montreal,QC",
                      destination:"Ottawa,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1237",
                    flight_name:"AirCanada",
                     origin:"Montreal,QC",
                      destination:"Calgary,AB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1238",
                    flight_name:"AirCanada",
                     origin:"Ottawa,ON",
                      destination:"Quebec,QC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AC1239",
                    flight_name:"AirCanada",
                     origin:"Ottawa,ON",
                      destination:"Toronto,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                       price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1111",
                    flight_name:"CanadianNorth",
                     origin:"Montreal,QC",
                      destination:"Quebec,QC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1112",
                    flight_name:"CanadianNorth",
                     origin:"Montreal,QC",
                      destination:"Edmonton,AB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1113",
                    flight_name:"CanadianNorth",
                     origin:"Edmonton,AB",
                      destination:"Montreal,QC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1114",
                    flight_name:"CanadianNorth",
                     origin:"Calgary,AB",
                      destination:"winnipeg,MB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1115",
                    flight_name:"CanadianNorth",
                     origin:"Toronto,ON",
                      destination:"winnipeg,MB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1116",
                    flight_name:"CanadianNorth",
                     origin:"Toronto,ON",
                      destination:"windsor,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1117",
                    flight_name:"CanadianNorth",
                     origin:"Ottawa,ON",
                      destination:"windsor,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1118",
                    flight_name:"CanadianNorth",
                     origin:"Ottawa,ON",
                      destination:"Halifax,NS",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"CN1119",
                    flight_name:"CanadianNorth",
                     origin:"Ottawa,ON",
                      destination:"Edmonton,AB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2311",
                    flight_name:"AirNorth",
                     origin:"Toronto,ON",
                      destination:"Halifax,NS",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2312",
                    flight_name:"AirNorth",
                     origin:"Toronto,ON",
                      destination:"Ottawa,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"2-stops",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2313",
                    flight_name:"AirNorth",
                     origin:"Toronto,ON",
                      destination:"Edmonton,AB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2314",
                    flight_name:"AirNorth",
                     origin:"Toronto,ON",
                      destination:"Calgary,AB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN231",
                    flight_name:"AirNorth",
                     origin:"Ottawa,ON",
                      destination:"winnipeg,MB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2316",
                    flight_name:"AirNorth",
                     origin:"Ottawa,ON",
                      destination:"Vancouver,BC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2317",
                    flight_name:"AirNorth",
                     origin:"Ottawa,ON",
                      destination:"Montreal,QC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2318",
                    flight_name:"AirNorth",
                     origin:"Quebec,QC",
                      destination:"winnipeg,MB",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AN2319",
                    flight_name:"AirNorth",
                     origin:"Quebec,QC",
                      destination:"Toronto,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3411",
                    flight_name:"AirTransat",
                     origin:"Vancouver,BC",
                      destination:"Toronto,ON",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3412",
                    flight_name:"AirTransat",
                     origin:"Vancouver,BC",
                      destination:"Montreal,BC",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"2-stops",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3413",
                    flight_name:"AirTransat",
                     origin:"Vancouver,BC",
                      destination:"Halifax,NS",
                      start_time:"07:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3414",
                    flight_name:"AirTransat",
                     origin:"Vancouver,BC",
                      destination:"Edmonton,AB",
                      start_time:"06:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3415",
                    flight_name:"AirTransat",
                     origin:"Halifax,NS",
                      destination:"Toronto,ON",
                      start_time:"10:00",
                      end_time:"14:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3416",
                    flight_name:"AirTransat",
                     origin:"Calgary,AB",
                      destination:"Toronto,ON",
                      start_time:"09:00",
                      end_time:"13:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3417",
                    flight_name:"AirTransat",
                     origin:"Calgary,AB",
                      destination:"Edmonton,AB",
                      start_time:"06:00",
                      end_time:"07:00",
                      num_of_Stops:"non-stop",
                      is_hasStops:false,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3418",
                    flight_name:"AirTransat",
                     origin:"Calgary,AB",
                      destination:"Vancouver,BC",
                      start_time:"06:00",
                      end_time:"07:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 },
                 {
                     flight_num:"AT3419",
                    flight_name:"AirTransat",
                     origin:"Calgary,AB",
                      destination:"Ottawa,ON",
                      start_time:"07:00",
                      end_time:"09:00",
                      num_of_Stops:"1-stop",
                      is_hasStops:true,
                      price: "500.00"
        
        
                 }
        
        
             ]
        

             const searchFlights = () => Flights.bulkCreate(flightData);

             module.exports = searchFlights;
    