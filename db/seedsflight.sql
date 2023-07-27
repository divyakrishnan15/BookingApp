use bookings_db;

show tables;

describe Flights;

INSERT INTO Flights(flight_num,flight_name,origin,destination,start_time,end_time,num_of_Stops,stops)
VALUES
('AC1231','AirCanada','Toronto,ON','Montreal,QC','6:00','7:00','non-stop',FALSE),
('AC1232','AirCanada','Toronto,ON','Quebec,QC','7:00','9:00','non-stop',FALSE),
('AC1233','AirCanada','Toronto,ON','Vancouver,BC','7:00','8:00','non-stop',FALSE),
('AC1234','AirCanada','Montreal,QC','Quebec,QC','9:00','9:45','non-stop',FALSE),
('AC1235','AirCanada','Montreal,QC','TORONTO,ON','9:00','14:45','2-stops',TRUE),
('AC1236','AirCanada','Montreal,QC','OTTAWA,ON','13:00','13:45','non-stop',FALSE),
('AC1237','AirCanada','Montreal,QC','Calgary,AB','9:00','9:45','non-stop',FALSE),
('AC1238','AirCanada','Ottawa,ON','Quebec,QC','9:00','9:45','non-stop',FALSE),
('AC1239','AirCanada','Ottawa,ON','Toronto,ON','7:00','9:45','non-stop',FALSE),

('CN1111','CanadianNorth','Montreal,QC','Quebec,QC','10:00','10:55','non-stop',FALSE),
('CN1112','CanadianNorth','Montreal,QC','Edmonton,AB','8:00','13:15','1stop',TRUE),
('CN1113','CanadianNorth','Edmonton,AB','Montreal,QC','9:00','15:30','1stop',TRUE),
('CN1114','CanadianNorth','calgary,AB','winnipeg,MB','18:00','19:54','1stop',TRUE),
('CN1115','CanadianNorth','Toronto,ON','winnipeg,MB','8:00','10:54','non-stop',FALSE),
('CN1116','CanadianNorth','Toronto,ON','windsor,ON','15:00','16:54','non-stop',FALSE),
('CN1117','CanadianNorth','Ottawa,ON','windsor,ON','15:00','16:54','non-stop',FALSE),
('CN1118','CanadianNorth','Ottawa,ON','halifax,NS','5:00','6:54','non-stop',FALSE),
('CN1119','CanadianNorth','Ottawa,ON','Edmonton,AB','16:00','19:54','non-stop',FALSE),

('AN2311','AirNorth','Toronto,ON','Halifax,NS','15:00','19:54','non-stop',FALSE),
('AN2312','AirNorth','Toronto,ON','Ottawa,ON','6:00','12:54','2-stops',TRUE),
('AN2313','AirNorth','Toronto,ON','Edmonton,AB','15:00','19:54','non-stop',FALSE),
('AN2314','AirNorth','Toronto,ON','Calgary,AB','15:00','19:54','non-stop',FALSE),
('AN2315','AirNorth','Ottawa,ON','winnipeg,MB','15:00','19:54','non-stop',FALSE),
('AN2316','AirNorth','Ottawa,ON','Vancouver,BC','15:00','19:54','non-stop',FALSE),
('AN2317','AirNorth','Ottawa,ON','Montreal,QC','15:00','19:54','non-stop',FALSE),
('AN2318','AirNorth','Quebec,QC','winnipeg','15:00','19:54','non-stop',FALSE),
('AN2319','AirNorth','Quebec,QC','Toronto,ON','15:00','19:54','non-stop',FALSE),

('AT3411','AirTransat','Vancouver,BC','Toronto,ON','11:00','16:55','1-stop',TRUE),
('AT3412','AirTransat','Vancouver,BC','Montreal,BC','6:00','12:55','2-stops',TRUE),
('AT3413','AirTransat','Vancouver,BC','Halifax,NS','7:00','16:55','1-stop',TRUE),
('AT3414','AirTransat','Vancouver,BC','Edmonton,AB','11:00','16:55','non-stop',FALSE),
('AT3415','AirTransat','Halifax,NS','Toronto,ON','11:00','16:55','1-stop',TRUE),
('AT3416','AirTransat','Calgary,AB','Toronto,ON','11:00','16:55','1-stop',TRUE),
('AT3417','AirTransat','Calgary,AB','Edmonton,AB','11:00','16:55','non-stop',FALSE),
('AT3418','AirTransat','Calgary,AB','Vancouver,BC','11:00','16:55','1-stop',TRUE),
('AT3419','AirTransat','Calgary,AB','Ottawa,ON','11:00','16:55','1-stop',TRUE),
;








          


