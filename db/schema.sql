DROP DATABASE IF EXISTS bookings_db;

CREATE DATABASE bookings_db;

USE bookings_db;

CREATE TABLE Flights(
    flight_num VARCHAR(6) NOT NULL PRIMARY KEY ,
    flight_name VARCHAR(15) NOT NULL,
    origin VARCHAR(15) NOT NULL,
    destination VARCHAR(15) NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    num_of_Stops VARCHAR(15) NOT NULL,
    is_hasStops BOOLEAN
);


show DATABASES;
show tables;