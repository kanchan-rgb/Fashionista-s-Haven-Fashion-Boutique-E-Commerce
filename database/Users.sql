use fashionistashaven;

create table Users(
	u_id int8 NOT NULL AUTO_INCREMENT primary key, 
    u_name varchar(100) NOT NULL, 
    u_photo longblob NOT NULL, 
    u_email varchar(100) NOT NULL, 
    u_phonenumber int8 NOT NULL, 
    u_password varchar(100) NOT NULL
);

ALTER TABLE Users
MODIFY COLUMN u_name varchar(100) NOT NULL,
MODIFY COLUMN u_photo longblob NOT NULL,
MODIFY COLUMN u_email varchar(100) NOT NULL, 
MODIFY COLUMN u_phonenumber int8 NOT NULL, 
MODIFY COLUMN u_password varchar(100) NOT NULL;

ALTER TABLE Users AUTO_INCREMENT=10000;

desc Users;

select * from Users;

drop table Users;