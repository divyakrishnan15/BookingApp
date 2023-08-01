const sequelize = require("../config/connection")
const {User, HotelConfirmation} = require("../models")
const {User, restaurantConfirmation} = require("../models")


const hotelConfirmation = [
    {
        "city": "Alberta",
        "country": "Canada",
        "start_date": "2023-07-27",
        "end_date": "2023-07-28",
        "num_of_adults": 2,
        "num_of_children": 3,
        "num_of_rooms": 1,
        "user_id":1
      },
      {
		"city": "Vancouver",
		"country": "Canada",
		"start_date": "2023-07-01",
		"end_date": "2023-07-31",
		"num_of_adults": 2,
		"num_of_children": 5,
		"num_of_rooms": 2,
		"hotel_name": "Mariott",
		"price": 555,
		"reviews": 5,
		"description": "good with A/c and sea views",
		"first_name": "Divya",
		"last_name": "Krishnan",
		"email": "divya@gmail.com",
		"phone_number": 417302894,
		"card_number": "4242424242424242",
		"expiry_date": "10/25",
		"cvv": "123",
		"amount": 1050.00,
		"user_id": 5
	},
]

const RestaurantConfirmation = [
    {
        "city": "Alberta",
        "date": "2023-07-27",
        "num_of_guests": 5,
        "user_id":1
    },
    {
		"city": "Vancouver",
		"date": "2023-07-01",
		"num_of_adults": 7,
		"restaurant_name": "Hawksworth",
		"reviews": 21,
		"description": "inventive pacific northwest cuisine",
		"first_name": "Divya",
		"last_name": "Krishnan",
		"email": "divya@gmail.com",
		"phone_number": 417302894,
		"user_id": 5
	},
]

const seedData = async ()=>{
    try{
        await sequelize.sync({force:true})
        await User.bulkCreate(users,{
            individualHooks:true
        });
        await HotelConfirmation.bulkCreate(hotelConfirmation);
        await restaurantConfirmation.bulkCreate(RestaurantConfirmation);
        process.exit(0);
    } catch(err){
        console.log(err)
    }
}


seedData()