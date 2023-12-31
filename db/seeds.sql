
use bookings_db;

show tables;



-- describe user;
-- describe HotelBookingInfo;
-- describe HotelList;
-- describe hotelbookinguser;
-- describe payment;


INSERT INTO user(email,password) 
VALUES('james5@gmail.com','testt12345'),
('alex@gmail.com','testt12345'),
('john@gmail.com','testt12345');
select * from user;


-- INSERT INTO user(username,email,password) 
-- VALUES('james','james5@gmail.com','testt12345'),
-- ('alex','alex@gmail.com','testt12345'),
-- ('john','john@gmail.com','testt12345');
-- select * from user;


INSERT INTO hotelbookinginfo(city,country,start_date,end_date,num_of_adults,num_of_children,num_of_rooms,created_at,updated_at)
VALUES('Toronto','Canada','2023-07-27','2023-07-28',1,2,1,'2023-07-27','2023-07-28'),
('Montreal','Canada','2023-07-28','2023-07-29',2,3,2,'2023-07-28','2023-07-29'),
('Quebec','Canada','2023-07-29','2023-07-30',1,4,3,'2023-07-29','2023-07-30'),
('Vancouver','Canada','2023-07-30','2023-07-31',1,1,2,'2023-07-30','2023-07-31'),
('Ottawa','Canada','2023-07-31','2023-08-01',2,2,1,'2023-07-31','2023-08-01');
select * from HotelBookingInfo;


INSERT INTO HotelList(hotel_name,country,price,filename,reviews,description,created_at,updated_at)
VALUES('Hilton','145 Richmond St W, Toronto, ON M5H 2L2',200,'hilton.jpg',4,'In the entertainment district, we’re within five blocks of downtown Toronto attractions like the CN Tower, Union Station, Second City Theater, and the Rogers Center. It’s then 25 minutes to the airport.','2023-07-27','2023-07-28'),
('Hyatt','370 King Street West, Toronto, Ontario, Canada, M5V 1J9',300,'hyatt.jpg',3,'Discover the excitement of Downtown Toronto’s Entertainment District, just steps from the business and financial district and all that makes the city a vibrant destination','2023-07-28','2023-07-29'),
('Marriott','1 Blue Jays Way, Toronto, ON M5V 1J4',400,'mariot.jpeg',5,'Choose your getaway: From family fun to golf, Vacations by Marriott offers travel packages in all flavors.','2023-07-29','2023-07-30'),
('Ritz-Carlton Hotel','Toronto, ON M5V 3G7',500,'ritz.jpg',2,'Experience historic cities home to time-honored traditions. Immerse yourself in cosmopolitan capitals buzzing with energy. Unwind in hidden sanctuaries rich with natural wonder. The world awaits — where will The Ritz-Carlton take you?','2023-07-30','2023-07-31'),
('Hollywood Plaza Hotel','28 Hollywood Ave, Toronto, ON M2N 6S4',600,'hollyword_plaza.jpg',1,'Welcome to Hollywood! Located in the heart of Hollywood just steps away from Hollywood Walk of Fame, Hollywood Bowl, Graumans Chinese Theatre, Universal Studios®, and famous star-studded attractions, hot spots, and nightlife of the Sunset Strip.','2023-07-31','2023-08-01');
select * from HotelList;


INSERT INTO hotelbookinguser(first_name,last_name,email,phone_number,created_at,updated_at)
VALUES('Divya','Krishnan','divya@gmail.com',417111111,'2023-07-27','2023-07-28'),
('Kato','krishnan','kato@gmail.com',41744444,'2023-07-28','2023-07-29'),
('Alekhya','Vinni','alekhya@gmail.com',417555555,'2023-07-29','2023-07-30'),
('Joshua','Crawford','joshua@gmail.com',41766666,'2023-07-30','2023-07-31'),
('Peter','Bhat','peter@gmail.com',4177777,'2023-07-31','2023-08-01');
select * from hotelbookinguser;


INSERT INTO hotelpayment(card_number,expiry_date,cvv,amount,created_at,updated_at)
VALUES('4545454545454545','2025-05-10',123,200,'2023-07-27','2023-07-28'),
('4545454545454545','2023-05-10',234,300,'2023-07-28','2023-07-29'),
('4545454545454545','2024-05-10',345,500,'2023-07-29','2023-07-30'),
('4545454545454545','2026-05-10',678,500,'2023-07-30','2023-07-31'),
('4545454545454545','2027-05-10',227,500,'2023-07-31','2023-08-01');
select * from hotelpayment;

INSERT INTO hotelConfirmation(city,country,start_date,end_date,num_of_adults,num_of_children,num_of_rooms,hotel_name,price,filename,reviews,description,first_name,last_name,email,phone_number,card_number,expiry_date,cvv,amount,created_at,updated_at)
VALUES("Toronto","Canada","2023-07-27","2023-07-28",2,2,1,"Hilton",500,"hilton.jpg",5,"good","ABC","XYZ","abc@gmail.com",41623425,"4242424242424242","10/25","123",200.00,'2023-07-28','2023-07-29');
select * from hotelConfirmation;


-- INSERT INTO hotelConfirmation(city,country,start_date,end_date,num_of_adults,num_of_children,num_of_rooms,hotel_name,price,filename,reviews,description,first_name,last_name,email,phone_number,card_number,expiry_date,cvv,amount,created_at,updated_at,user_id)
-- VALUES("Toronto","Canada","2023-07-27","2023-07-28",2,2,1,"Hilton",500,"hilton.jpg",5,"good","ABC","XYZ","abc@gmail.com",41623425,"4242424242424242","10/25","123",200.00,'2023-07-28','2023-07-29',2);
-- select * from hotelConfirmation;

-- INSERT INTO user(username,email,password) 
-- VALUES('james','james5@gmail.com','testt12345'),
-- ('alex','alex@gmail.com','testt12345'),
-- ('john','john@gmail.com','testt12345');



