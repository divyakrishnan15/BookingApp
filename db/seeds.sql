
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
VALUES('Hilton','Ontario',200,'hilton.jpg',4,'wifi,a/c,tv','2023-07-27','2023-07-28'),
('Hyatt','Quebec',300,'hyatt.jpg',3,'wifi,a/c,tv','2023-07-28','2023-07-29'),
('Marriott','Quebec',400,'mariot.jpeg',5,'wifi,a/c,tv','2023-07-29','2023-07-30'),
('Ritz-Carlton Hotel','Canada',500,'ritz.jpg',2,'wifi,a/c,tv','2023-07-30','2023-07-31'),
('Hollywood Plaza Hotel','Canada',600,'hollyword_plaza.jpg',1,'wifi,a/c,tv','2023-07-31','2023-08-01');
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



