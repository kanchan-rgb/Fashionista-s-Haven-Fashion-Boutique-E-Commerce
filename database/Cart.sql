use fashionistashaven;

create table Cart(c_id int8 NOT NULL AUTO_INCREMENT primary key, u_id int8, p_id int8, c_size varchar(20), c_amount int8, c_image longblob, c_imagelink varchar(1000), c_name varchar(1500), c_price int8, c_category varchar(100));

ALTER TABLE Cart AUTO_INCREMENT=1;

ALTER TABLE Cart
MODIFY COLUMN c_imagelink varchar(1000);


desc Cart;

select * from Cart;

drop table Cart;
