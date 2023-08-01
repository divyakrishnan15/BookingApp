const sequelize = require("../config/connection")
const {User,HotelList, HotelConfirmation} = require("../models")

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



const seedData = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await HotelList.bulkCreate(Hotellist);
        // await HotelConfirmation.bulkCreate(hotelConfirmation);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}

seedData()