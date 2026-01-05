use fashionistashaven;

create table Contactus(
	cus_id int8 NOT NULL AUTO_INCREMENT primary key, 
	cus_name varchar(100), 
    cus_email varchar(300), 
    cus_message varchar(1200));


ALTER TABLE Contactus
MODIFY COLUMN cus_name varchar(100) NOT NULL, 
MODIFY COLUMN cus_email varchar(300) NOT NULL, 
MODIFY COLUMN cus_message varchar(1200) NOT NULL;


ALTER TABLE Contactus AUTO_INCREMENT=1;  

desc Contactus;

select * from Contactus;

drop table Contactus;
