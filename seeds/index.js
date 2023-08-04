const sequelize = require("../config/connection")
const {User,HotelList, HotelConfirmation,Flights} = require("../models")

const users = [
    {
        email: "Admin@gmail.com",
        password: "admin123"
    },
    {
        email: "divya@gmail.com",
        password: "divya123"
    },
]

const Hotellist =[
        {
            "id": 1,
            "hotel_name": "Hilton",
            "country": "145 Richmond St W, Toronto, ON M5H 2L2",
            "price": 200,
            "filename": "hilton.jpg",
            "reviews": 4,
            "description": "In the entertainment district, we’re within five blocks of downtown Toronto attractions like the CN Tower, Union Station, Second City Theater, and the Rogers Center. It’s then 25 minutes to the airport."
        },
        {
            "id": 2,
            "hotel_name": "Hyatt",
            "country": "370 King Street West, Toronto, Ontario, Canada, M5V 1J9",
            "price": 300,
            "filename": "hyatt.jpg",
            "reviews": 3,
            "description": "Discover the excitement of Downtown Toronto’s Entertainment District, just steps from the business and financial district and all that makes the city a vibrant destination"
        },
        {
            "id": 3,
            "hotel_name": "Marriott",
            "country": "Quebec",
            "price": 400,
            "filename": "mariot.jpeg",
            "reviews": 5,
            "description": "Choose your getaway: From family fun to golf, Vacations by Marriott offers travel packages in all flavors."
        },
        {
            "id": 4,
            "hotel_name": "Ritz-Carlton Hotel",
            "country": "Canada",
            "price": 500,
            "filename": "ritz.jpg",
            "reviews": 2,
            "description": "Experience historic cities home to time-honored traditions. Immerse yourself in cosmopolitan capitals buzzing with energy. Unwind in hidden sanctuaries rich with natural wonder. The world awaits — where will The Ritz-Carlton take you?"
        },
        {
            "id": 5,
            "hotel_name": "Hollywood Plaza Hotel",
            "country": "Canada",
            "price": 600,
            "filename": "hollyword_plaza.jpg",
            "reviews": 1,
            "description": "Welcome to Hollywood! Located in the heart of Hollywood just steps away from Hollywood Walk of Fame, Hollywood Bowl, Grauman's Chinese Theatre, Universal Studios®, and famous star-studded attractions, hot spots, and nightlife of the Sunset Strip."
        }
    ]


// const hotelConfirmation = [
//     {
//         "city": "Alberta",
//         "country": "Canada",
//         "start_date": "2023-07-27",
//         "end_date": "2023-07-28",
//         "num_of_adults": 2,
//         "num_of_children": 3,
//         "num_of_rooms": 1,
//         "user_id":1
//       },
//       {
// 		"city": "Vancouver",
// 		"country": "Canada",
// 		"start_date": "2023-07-01",
// 		"end_date": "2023-07-31",
// 		"num_of_adults": 2,
// 		"num_of_children": 5,
// 		"num_of_rooms": 2,
// 		"hotel_name": "Mariott",
// 		"price": 555,
// 		"reviews": 5,
// 		"description": "good with A/c and sea views",
// 		"first_name": "Divya",
// 		"last_name": "Krishnan",
// 		"email": "divya@gmail.com",
// 		"phone_number": 417302894,
// 		"card_number": "4242424242424242",
// 		"expiry_date": "10/25",
// 		"cvv": "123",
// 		"amount": 1050.00,
// 		"user_id": 5
// 	},
// ]

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

const seedData = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await HotelList.bulkCreate(Hotellist);
         await Flights.bulkCreate(flightData);
        // await HotelConfirmation.bulkCreate(hotelConfirmation);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

seedData()