-- USER_ID,NAME,PHONE_NUMBER,ALTERNATIVE_PHONE_NUMBER,ZIPCODE,STATE,CITY,HOUSE_BUILDING_NO,ROAD_AREA_COLONY_NAME,LANDMARK
use fashionistashaven;
RENAME TABLE Useraddress TO User_address;


CREATE TABLE User_address (
    ua_id int8 NOT NULL AUTO_INCREMENT primary key, 
    u_id int8, 
    ua_name varchar(200),
    ua_phnumber long,
    ua_alternativephnumber long,
    ua_zipcode int8,
    ua_state varchar(100),
    ua_city varchar(100),
    ua_houseno varchar(100),
    ua_road_colony varchar(200),
    ua_landmark varchar(200)
);

ALTER TABLE User_address
MODIFY COLUMN u_id int8 NOT NULL,
MODIFY COLUMN ua_name varchar(200) NOT NULL,
MODIFY COLUMN ua_phnumber long NOT NULL,
MODIFY COLUMN ua_zipcode int8 NOT NULL,
MODIFY COLUMN ua_state varchar(100) NOT NULL,
MODIFY COLUMN ua_city varchar(100) NOT NULL,
MODIFY COLUMN ua_houseno varchar(100) NOT NULL,
MODIFY COLUMN ua_road_colony varchar(200) NOT NULL,
MODIFY COLUMN ua_landmark varchar(200) NOT NULL;

ALTER TABLE User_address AUTO_INCREMENT=1;

desc User_address;

select * from User_address;

drop table User_address;