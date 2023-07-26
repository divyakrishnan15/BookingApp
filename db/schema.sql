DROP DATABASE IF EXISTS bookings_db;

CREATE DATABASE bookings_db;

USE bookings_db;

CREATE TABLE flights(
    flight_num VARCHAR(6) NOT NULL PRIMARY KEY ,
    flight_name VARCHAR(15) NOT NULL,
    origin VARCHAR(15) NOT NULL,
    destination VARCHAR(15) NOT NULL,
    start_time VARCHAR(10) NOT NULL,
    end_time VARCHAR(10) NOT NULL,
    num_of_Stops VARCHAR(15) NOT NULL,
    Stops BOOLEAN
);

show DATABASES;
show tables;